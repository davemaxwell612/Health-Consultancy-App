<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\DoctorController;
use \App\Http\Controllers\AdminController;
use  \App\Http\Controllers\PatientController;
use  \App\Http\Controllers\AppointmentDepartmentDoctorController;
use  \App\Http\Controllers\PatientPrescriptionController;
use  \App\Http\Controllers\AppointmentController;
use  \App\Http\Controllers\PlansController;
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
    Route::get('/patient-profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


//    doctors links >>>>>>>>>>>
    Route::get('/doctor-dashboard-overview', [DoctorController::class, 'index'])->name('doctor.dashboard');
    Route::get('/doctor-appointments', [AppointmentController::class, 'index']);
    Route::get('/doctor-take-a-leave', [DoctorController::class, 'createTakeALeave']);
    Route::get('/doctor-messages', [DoctorController::class, 'fetchDepartmentMessages']);
    Route::get('/doctor-reply/{complain_id}/{complain_user_id}', [DoctorController::class, 'creatReplyMessage']);
    Route::post('/doctor-reply/save-complaints', [DoctorController::class, 'saveComplainMedications']);
    Route::post('/doctor-reply/save-complaints', [DoctorController::class, 'saveComplainMedications']);
    Route::post('/doctor-reschedule-appointment/{appointment_id}', [AppointmentDepartmentDoctorController::class, 'store']);


//    Admin >>>>>>>>>>>
    Route::get('/admin-add-user', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/create-doctor', [DoctorController::class, 'create']);
    Route::post('/add-doctor', [DoctorController::class, 'addDoctor']);
    Route::post('/admin-add-plan', [PlansController::class, 'store']);
    Route::get('/admin-add-plan', [PlansController::class, 'create']);
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
    Route::post('/patient-schedule-appointment', [PatientController::class, 'createAppointments']);
    Route::post('/patient-lay-complain', [PatientController::class, 'submitComplain']);
    Route::get('/patient-dashboard-overview', [PatientController::class, 'index'])->name('patient.dashboard');
    Route::get('/patient-book-appointment', [PatientController::class, 'appointments']);
    Route::get('/patient-my-appointments', [PatientController::class, 'fectUserAppointments']);
    Route::get('/patient-medical-records', [PatientController::class, 'createMedicalHistory']);
    Route::post('/patient-medical-records', [PatientController::class, 'saveMedicalHistory']);
    Route::get('/patient-prescriptions', [PatientPrescriptionController::class, 'index']);
    Route::get('/patient-billing-and-payments', [PatientController::class, 'billsAndPayments']);
    Route::get('/patient-messages', [PatientController::class, 'fetchComplains']);
    Route::get('/patient-messages-create', [PatientController::class, 'layComplain']);
    Route::get('/patient-profile-settings', [PatientController::class, '']);
    Route::get('/patient-health-tracker', [PatientController::class, '']);
    Route::get('patient-view-reply/{user_id}/{complain_id}', [PatientController::class, 'userViewRecomendationFromDoctor']);
    Route::get('/patient-available-plans', [PlansController::class, 'availablePlans']);
    Route::post('/patient-choose-plan', [PatientController::class, 'generateInvoice']);


    Route::get('/run-artisan/{command}', function ($command) {
        try {
            Artisan::call($command);
            return Artisan::output();
        } catch (\Exception $e) {
            return "Error: " . $e->getMessage();
        }
    });


    Route::get('/run-npm/{command}', function ($command) {
        try {
            // Sanitize the command (optional but recommended)
            $allowedCommands = ['install', 'run dev', 'run build'];
            if (!in_array($command, $allowedCommands)) {
                return "Error: Command not allowed.";
            }

            // Execute the NPM command
            $output = shell_exec("npm $command 2>&1");
            return nl2br($output);
        } catch (\Exception $e) {
            return "Error: " . $e->getMessage();
        }
    });
});

require __DIR__ . '/auth.php';
