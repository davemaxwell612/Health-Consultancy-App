<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Invoice;
use App\Models\Department;
use App\Models\doctorRecommendation;
use App\Models\MedicalHistory;
use App\Models\Patient;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Models\PatientComplain;
use Carbon\Carbon;
use Dotenv\Util\Str;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Auth;
use inertia\inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Patient/Dashboard', []);

    }

    public function layComplain()
    {
        return inertia::render('Patient/LayComplain', [
            'departments' => Department::all(),

        ]);

    }

    public function fetchComplains()
    {

        $user_id = Auth::user()->id;
        $complains = PatientComplain::where('user_id', $user_id)
            ->with('department')
            ->get();

        return inertia::render('Patient/Complains', [
            'complains' => $complains,
        ]);

    }

    public function submitComplain(Request $request)
    {

        $validatedData = $request->validate([
            'department_id' => 'required|integer|exists:departments,id',
            'message' => 'required|string|min:5',
            'subject' => 'required|string',
        ]);

//        dd($validatedData['message']);
        $newComplain = PatientComplain::create([
            'user_id' => Auth::user()->id,
            'message' => $validatedData['message'],
            'subject' => $validatedData['subject'],
            'department_id' => $validatedData['department_id'],
        ]);
        $newComplain->save();

        return response()
            ->json(['message' => 'Your complaint has been successfully submitted']);
    }

    public function appointments()
    {
        return inertia::render('Patient/ClientScheduleAppointment', [
            'departments' => Department::orderBy('name', 'ASC')->get()]);
    }

    public function fectUserAppointments()
    {
        $user_id = Auth::user()->id;
        return inertia::render('Patient/Appointments', [
            'appointments' => Appointment::where('user_id', $user_id)
                ->with('department') // Eager load the department relationship
                ->get()
        ]);
    }

    public function saveMedicalHistory(Request $request)
    {
        $validatedData = $request->validate([
            'message' => 'String|nullable|max:255',
            'medications' => 'String|nullable|max:255',
            'allergies' => 'String|nullable|max:255',
            'familyMedicalHistory' => 'String|nullable|max:255',
            'previousSurgeries' => 'String|nullable|max:255',
            'medicalConditions' => 'String|nullable|max:255',
        ]);

        $user_id = Auth::user()->id;
//        dd($validatedData['message']);
        try {
            $existingHistory = MedicalHistory::where('user_id', $user_id)->first();

        } catch (error) {

        }

        if ($existingHistory) {
            $existingHistory->update([
                'medical_condition' => $validatedData['medicalConditions'],
                'messege' => $validatedData['message'],
                'user_id' => $user_id,
                'medications' => $validatedData['medications'],
                'allergies' => $validatedData['allergies'],
                'family_medical_history' => $validatedData['familyMedicalHistory'],
                'previous_surgeries_or_hospitalizations' => $validatedData['previousSurgeries'],
            ]);
            $existingHistory->save();
        } else {
            $newHistory = MedicalHistory::create([
                'medical_condition' => $validatedData['medicalConditions'],
                'messege' => $validatedData['message'],
                'user_id' => $user_id,
                'medications' => $validatedData['medications'],
                'allergies' => $validatedData['allergies'],
                'family_medical_history' => $validatedData['familyMedicalHistory'],
                'previous_surgeries_or_hospitalizations' => $validatedData['previousSurgeries'],
            ]);

        }

    }

    public function userViewRecomendationFromDoctor($user_id, $complain_id)
    {
        return inertia::render('Patient/RecomendationFromDoctor', [
            'recomendations' => doctorRecommendation::where('patient_id', $user_id)
                ->where('patient_complain_id', $complain_id)->get(),
            'complain' => PatientComplain::where('id', $complain_id)
                ->where('user_id', $user_id)->first()->get(),

            'medicalHistory' => MedicalHistory::where('user_id', $user_id)->first(),


        ]);
    }

    public function createAppointments(Request $request)
    {

//        dd($request['form']);
        $validateData = $request->validate([
            'form.messege' => 'required|string',
            'form.department' => 'required|int',
            'form.clients_date_and_time' => 'required|date'
        ]);


        $newAppointment = Appointment::create([
            'user_id' => Auth::user()->id,
            'department_id' => $validateData['form']['department'],
            'reason' => $validateData['form']['messege'],
            'clients_date_and_time' => $validateData['form']['clients_date_and_time'],
        ]);

        $newAppointment->save();
        return Response()->json(['message' => 'You have successfully booked an appointment']);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function createMedicalHistory()
    {

        $user_id = Auth::user()->id;
            try {
            $existingHistory = MedicalHistory::where('user_id', $user_id)->first();
            } catch (error){

            };
        return inertia::render('Patient/MedicalHistory', [
            'existingHistory'=> $existingHistory,
        ]);
    }

    public function billsAndPayments()
    {
        return inertia::render('Patient/BillingAndPayments', []);
    }

    public function generateInvoice(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0',
            'billing_cycle' => 'required|integer|in:3,6,12',
        ]);

        // Generate a unique invoice number
        do {
            $invoiceNumber = mt_rand(100000, 999999);
        } while (Invoice::where('invoice_number', $invoiceNumber)->exists());

        // Set invoice date (current date and time)
        $invoiceDate = now();

        // Calculate due date based on billing cycle
        $dueDate = Carbon::now()->addMonths($request->billing_cycle);

        // Create the invoice
        $invoice = Invoice::create([
            'invoice_number' => $invoiceNumber,
            'invoice_date' => $invoiceDate,
            'due_date' => $dueDate,
            'amount' => $request->amount,
            'status' => 'unpaid',
        ]);

//        return response()->json([
//            'message' => 'Invoice generated successfully',
//            'invoice' => $invoice
//        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
