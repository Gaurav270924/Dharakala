<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $fillable = [
        'name', 'project_count', 'x', 'y',
    ];

    protected $casts = [
        'project_count' => 'integer',
        'x' => 'float',
        'y' => 'float',
    ];
}
