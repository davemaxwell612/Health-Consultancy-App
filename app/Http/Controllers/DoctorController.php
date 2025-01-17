<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Doctor;
use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Models\DoctorDetails;
use App\Models\User;
use Illuminate\Http\Request;
use inertia\inertia;
use PhpParser\Comment\Doc;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Doctors/DoctorsDashboard', [

        ]);
    }

    public function addDoctor(Request $request)
    {
        $validatedData = $request->validate([
            'sentData.form.age' => 'int',
            'sentData.form.fee' => 'int',
            'sentData.form.qualification' => 'string',
            'sentData.department' => 'int',
            'sentData.user' => 'int',
        ]);

        $newDoctor = DoctorDetails::create([
            'user_id' => $validatedData['sentData']['user'],
            'age' => $validatedData['sentData']['form']['age'],
            'qualification' => $validatedData['sentData']['form']['qualification'],
            'fee' => $validatedData['sentData']['form']['fee'],
            'department' => $validatedData['sentData']['department'],
            'active' => true,
        ]);
        $newDoctor->save();
        return response()->json(['message' => 'Doctor created successfully.']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('Admin/CreateDoctor', [
            'departments' => Department::orderBy('id', 'DESC')->get(),
            'users' => User::all(),
        ]);
    }

    public function appointments()
    {
        return inertia::render('Doctors/Appointments', [

        ]);

    }


    public function createTakeALeave()
    {
        return inertia::render('Doctors/TakeALeave', [

        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorRequest $request)
    {

    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorRequest $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        //
    }
}
