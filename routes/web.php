<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\DoctorController;
use \App\Http\Controllers\AdminController;
use  \App\Http\Controllers\PatientController;
use  \App\Http\Controllers\ServicesController;
use  \App\Http\Controllers\PricingController;
use  \App\Http\Controllers\AboutUsController;
use  \App\Http\Controllers\ContactUsController;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


//guest Links

    Route::get('/services', [ServicesController::class, 'index'])->name('services.index');
    Route::get('/pricing', [PricingController::class, 'index'])->name('pricing.index');
    Route::get('/about', [AboutUsController::class, 'index'])->name('about.index');
    Route::get('/contact', [ContactUsController::class, 'index'])->name('contact.index');







Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



//    doctors links >>>>>>>>>>>
    Route::get('/doctor-dashboard', [DoctorController::class, 'index']);
    Route::get('/doctor-appointments', [DoctorController::class, 'appointments']);
    Route::get('/doctor-take-a-leave', [DoctorController::class, 'createTakeALeave']);



//    Admin >>>>>>>>>>>
    Route::get('/admin-add-user', [AdminController::class, 'index']);
    Route::get('/create-doctor', [DoctorController::class, 'create']);
    Route::post('/add-doctor', [DoctorController::class, 'addDoctor']);
    Route::get('/admin-add-department', [AdminController::class, 'addDepartment']);
    Route::post('/admin-add-department', [AdminController::class, 'storeDepartment']);
    Route::get('/fetch-departments', [AdminController::class, 'fetchDepartments']);
    Route::get('/create-admin', [DoctorController::class, 'createTakeALeave']);
    Route::get('/create-patient', [DoctorController::class, 'createTakeALeave']);





    // routes/web.php
    Route::get('/run-migrations', function () {
        // Check if the user is authorized to run the migration (optional but highly recommended)
        if (auth()->user() && auth()->user()->user_role === 'admin') {
            Artisan::call('migrate');
            return 'Migrations have been run successfully!';
        }

        return 'Unauthorized action';
    });








    //    patient links >>>>>>>>>>>
//    Route::get('/patient-dashboard', [PatientController::class, 'index']);
//    Route::get('/patient-schedule-appointments', [PatientController::class, 'appointments']);
//    Route::get('/patient-lay-complain', [PatientController::class, 'layComplain']);
//    Route::get('/patient-medical-history', [PatientController::class, 'createMedicalHistory']);
    Route::post('/patient-schedule-appointment', [PatientController::class, 'createAppointments']);
    Route::post('/patient-lay-complain', [PatientController::class, 'submitComplain']);




    Route::get('/patient-dashboard-overview', [PatientController::class, 'index']);
    Route::get('/patient-book-appointment', [PatientController::class, 'appointments']);
    Route::get('/patient-my-appointments', [PatientController::class, '']);
    Route::get('/patient-medical-records', [PatientController::class, 'createMedicalHistory']);
    Route::get('/patient-prescriptions', [PatientController::class, 'submitComplain']);
    Route::get('/patient-billing-and-payments', [PatientController::class, 'submitComplain']);
    Route::get('/patient-messages', [PatientController::class, 'fetchComplains']);
    Route::get('/patient-messages-create', [PatientController::class, 'layComplain']);
    Route::get('/patient-profile-settings', [PatientController::class, '']);
    Route::get('/patient-health-tracker', [PatientController::class, '']);
});

require __DIR__.'/auth.php';
