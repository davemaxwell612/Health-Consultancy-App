<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPlan extends Model
{
    /** @use HasFactory<\Database\Factories\UserPlanFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'plans_id', 'cycle_id', 'start_date', 'end_date', 'status'];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function plan()
    {
        return $this->belongsTo(Plans::class);
    }

    public function billingCycle()
    {
        return $this->belongsTo(BillingCycle::class, 'cycle_id');
    }

}
