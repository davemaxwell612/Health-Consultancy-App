<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\User;
use App\Models\UserPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Unicodeveloper\Paystack\Paystack;

class PaystackController extends Controller
{
    // Display payment page
    public function index()
    {
        return inertia::render('Patient/PaystackPayment');
    }

    // Redirect to Paystack gateway
    public function redirectToGateway(Request $request)
    {
        // Validate request to ensure invoice_number is provided

        $request->validate([
            'invoice.invoice_number' => 'required|exists:invoices,invoice_number',
        ]);
        // Fetch the selected invoice
        $invoice = Invoice::where('invoice_number', $request->invoice['invoice_number'])
            ->where('user_id', auth()->id())
            ->where('status', 'unpaid')
            ->first();

        if (!$invoice) {
            return response()->json(['error' => 'Invalid or already paid invoice.'], 404);
        }

        $order_id = uniqid();

        // Create an instance of the Paystack class
        $paystack = new Paystack(env('PAYSTACK_SECRET_KEY'));
//        dd($request->user['email']);

        $payment = $paystack->getAuthorizationUrl([
            'amount' => $invoice->amount * 100, // Convert to kobo
            'email' => $request->user['email'],
            'order_id' => $order_id,
            'metadata' => [
                'invoice_number' => $invoice->invoice_number,
                'user_id' => $invoice->user_id,
                'plan_id' => $invoice->plan_id,
                'paid_at' => $invoice->paid_at,
                'duration' => $invoice->duration,
                'currency' => $invoice->currency,
            ],
        ]);

        return response()->json([
            'authorization_url' => $payment->url
        ]);
    }


    // Handle Paystack payment callback
    public function handleGatewayCallback(Request $request)
    {
        $paystack = new Paystack();
        $paymentData = $paystack->getPaymentData();
        if ($paymentData['status']) {
            $invoiceNumber = $paymentData['data']['metadata']['invoice_number'] ?? null;

            if (!$invoiceNumber) {
                return response()->json(['error' => 'Invoice number missing from payment metadata'], 400);
            }

            // Find the invoice using invoice_number
            $invoice = Invoice::where('invoice_number', $invoiceNumber)
                ->where('status', 'unpaid') // Ensure it's unpaid
                ->first();

            if ($invoice) {
                $invoice->update([
                    'reference' => $paymentData['data']['reference'],
                    'status' => 'paid',
                    'payment_method' => $paymentData['data']['channel'],
                    'currency' => $paymentData['data']['currency'],
                    'paid_at' => now(),
                ]);

                $existingPlan = UserPlan::where('user_id', $invoice->user_id)->first();
                if ($existingPlan){
                    $existingPlan->update([
                        'user_id' => $invoice->user_id,
                        'plans_id' => $invoice->plan_id,
                        'duration' => $invoice->duration,
                        'start_date' => $invoice->paid_at,
                        'end_date' => $invoice->due_date,
                        'status' => true,
                    ]);
                }else{
                    $userPlan = UserPlan::create([
                        'user_id' => $invoice->user_id,
                        'plans_id' => $invoice->plan_id,
                        'duration' => $invoice->duration,
                        'start_date' => $invoice->paid_at,
                        'end_date' => $invoice->due_date,
                        'status' => true,
                    ]);
                }
                return redirect()->route('payment.success')->with([
                    'user_id' => $invoice->user_id,
                    'invoice' => $invoice->id,
                ]);
            }
        }

        return redirect()->route('payment.failed')->with([
            'user_id' => $invoice->user_id,  // Pass the user object
            'invoice' => $invoice->id  // Pass the invoice object
        ]);;
    }


    public function success(Request $request)
    {

        $user = User::find($request->session()->get('user_id'));
        $invoice = Invoice::find($request->session()->get('invoice'));

//        dd($user, $invoice);



        // Pass the retrieved data to the Inertia component
        return inertia::render('Patient/PaymentSucess', [
            'user' => $user,
            'invoice' => $invoice,
        ]);
    }

    public function failed(Request $request)
    {

        $user = User::find($request->session()->get('user_id'));
        $invoice = Invoice::find($request->session()->get('invoice'));

        return inertia::render('Patient/PaymentSucess', [
            'user' => $user,
            'invoice' => $invoice,
        ]);
    }




}
