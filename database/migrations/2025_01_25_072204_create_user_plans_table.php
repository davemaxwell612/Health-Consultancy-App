<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to `users` table
            $table->foreignId('plans_id')->constrained()->onDelete('cascade'); // Link to `plans` table
            $table->foreignId('cycle_id')->constrained('billing_cycles')->onDelete('cascade'); // Link to `billing_cycles`
            $table->date('start_date'); // When the subscription starts
            $table->date('end_date'); // When the subscription ends
            $table->boolean('status')->default(true); // Status of the subscription
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_plans');
    }
};
