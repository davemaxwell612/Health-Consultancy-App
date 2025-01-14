<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\DoctorController;
use  \App\Http\Controllers\PatientController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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

    //    patient links >>>>>>>>>>>
    Route::get('/patient-dashboard', [PatientController::class, 'index']);
    Route::get('/patient-schedule-appointments', [PatientController::class, 'appointments']);



});

require __DIR__.'/auth.php';
