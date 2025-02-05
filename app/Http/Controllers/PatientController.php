<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Department;
use App\Models\Patient;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Models\PatientComplain;
use http\Env\Response;
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
            'departments' =>Department::all(),

        ]);

    }
    public function fetchComplains()
    {

        $user_id = Auth::user()->id;
        $complains = PatientComplain::where('user_id', $user_id)
            ->with('department')
            ->get();

        return inertia::render('Patient/Complains', [
            'complains' =>$complains,
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
            ->json(['message'=>'Your complaint has been successfully submitted']);
    }

    public function appointments()
    {
        return inertia::render('Patient/ClientScheduleAppointment', []);
    }
    public function createAppointments(Request $request)
    {
        $validateData =  $request->validate([
            'form.messege' => 'string',
            'form.clients_date_and_time' => 'date'
        ]);


        $newAppointment = Appointment::create([
            'user_id' => Auth::user()->id,
            'problem' => $validateData['form']['messege'],
            'clients_date_and_time' => $validateData['form']['clients_date_and_time'],
        ]);

        $newAppointment->save();
        return Response()->json(['message'=>'You have successfully booked an appointment']);


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
        return inertia::render('Patient/MedicalHistory', []);
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
