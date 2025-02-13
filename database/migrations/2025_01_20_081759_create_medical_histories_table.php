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
        Schema::create('medical_histories', function (Blueprint $table) {
            $table->id();
            $table->boolean('medical_condition')->default(false);
            $table->text('messege')->nullable();
            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');
            $table->text('medications')->nullable();
            $table->boolean('is_allergic')->default(false);
            $table->text('allergies')->nullable();
            $table->text('family_medical_history')->nullable();
            $table->text('previous_surgeries_or_hospitalizations')->nullable();
            $table->timestamp('clients_date_and_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_histories');
    }
};
