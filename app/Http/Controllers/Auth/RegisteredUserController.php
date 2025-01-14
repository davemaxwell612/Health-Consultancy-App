<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the request
        $validatedData = $request->validate([
            'surname' => 'required|string|max:255',
            'otherNames' => 'nullable|string|max:255',
            'address' => 'required|string|max:255',
            'tel' => 'required|string', // Match phone number format
            'email' => 'required|string|email|max:255|unique:users,email',
            'medicalConditions' => 'nullable|string|max:500',
            'medications' => 'nullable|in:yes,no',
            'username' => 'required|string|max:255|unique:users,username',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password_confirmation' => 'required|string', // Ensures confirmation is provided
            'preferredLanguage' => 'nullable|in:english,french,spanish',
            'termsAccepted' => 'accepted', // For checkbox validation
            'country' => 'required|string|max:255', // You can add more countries as needed
            'state' => 'required|string|max:255', // Add states based on selected country
        ]);

        // Create the user
        $user = User::create([
            'surname' => $validatedData['surname'],
            'otherNames' => $validatedData['otherNames'],
            'address' => $validatedData['address'],
            'tel' => $validatedData['tel'],
            'email' => $validatedData['email'],
            'medicalConditions' => $validatedData['medicalConditions'],
            'medications' => $validatedData['medications'],
            'username' => $validatedData['username'],
            'password' => Hash::make($validatedData['password']),
            'preferredLanguage' => $validatedData['preferredLanguage'],
            'termsAccepted' => $validatedData['termsAccepted'],
            'country' => $validatedData['country'],
            'state' => $validatedData['state'],
            'user_role' => 'patient',
        ]);

        // Trigger the Registered event
        event(new Registered($user));

        // Log the user in
        Auth::login($user);

        // Redirect to the dashboard
        return redirect(route('dashboard'));
    }
}
