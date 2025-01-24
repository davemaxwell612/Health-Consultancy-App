<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Http\Requests\StorePricingRequest;
use App\Http\Requests\UpdatePricingRequest;
use Inertia\Inertia;

class PricingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Guest/Pricing');
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
    public function store(StorePricingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pricing $pricing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pricing $pricing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePricingRequest $request, Pricing $pricing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pricing $pricing)
    {
        //
    }
}
