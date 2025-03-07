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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->unique();

            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');
            $table->foreignId('plan_id')
                ->constrained('plans')
                ->onDelete('cascade');

            $table->date('generated_at');
            $table->integer('duration');
            $table->date('due_date');
            $table->decimal('amount', 10, 2);
            $table->enum('status',
                ['unpaid', 'paid', 'overdue'])
                ->default('unpaid');


            $table->string('reference')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('currency')->default('NGN');
            $table->timestamp('paid_at')->nullable();



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
