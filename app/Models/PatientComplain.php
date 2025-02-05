<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientComplain extends Model
{
    /** @use HasFactory<\Database\Factories\PatientComplainFactory> */
    use HasFactory;


    protected $fillable = [
        'user_id',
        'department_id',
        'message',
        'subject',
        'status',
        'responded_by',


    ];


    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }
}
