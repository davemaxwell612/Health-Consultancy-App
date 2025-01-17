<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DoctorDetails extends Model
{
    protected $fillable = [
            'user_id',
            'age',
            'qualification',
            'fee',
            'department',
            'active',
    ];
}
