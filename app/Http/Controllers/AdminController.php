<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Models\Department;
use Illuminate\Http\Request;

use inertia\inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Admin/AddUser', []);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function addDepartment()
    {
        return inertia::render('Admin/CreateDepartment', [
            'departments' => Department::orderBy('id', 'DESC')->get(),
        ]);
    }

    public function fetchDepartments()
    {
       return Department::orderBy('id', 'DESC')->get();
    }




    public function storeDepartment(Request $request)
    {
        $validatedData = $request['form'];
//        dd($validatedData['department']);
        $department = Department::create([
            'name' => $validatedData['department'],
        ]);
        $department->save();
        return response()->json(['message' => 'Department saved successfully.']);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        //
    }
}
