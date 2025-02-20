<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Appointment_Department_Doctor;
use App\Http\Requests\StoreAppointment_Department_DoctorRequest;
use App\Http\Requests\UpdateAppointment_Department_DoctorRequest;
use App\Models\DoctorDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AppointmentDepartmentDoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Appointment $appointment_id)
    {
        $validatedAppointment = $request->validate([
            'doctorDateAndTime' => 'required|date',
        ]);
        $loggedInUserId = Auth::user()->id;
        $doctor = DoctorDetails::where('user_id', $loggedInUserId)->first();
//        dd(  $appointment_id->id);

        $validatedAppointment = Appointment_Department_Doctor::create([
                'department_id' => $appointment_id->department_id,
                'appointment_id' => $appointment_id->id,
                'doctor_id' => $doctor->id,
                'available_data_and_time' => $validatedAppointment['doctorDateAndTime'],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment_Department_Doctor $appointment_Department_Doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment_Department_Doctor $appointment_Department_Doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointment_Department_DoctorRequest $request, Appointment_Department_Doctor $appointment_Department_Doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment_Department_Doctor $appointment_Department_Doctor)
    {
        //
    }
}
