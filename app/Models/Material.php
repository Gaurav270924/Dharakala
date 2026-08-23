<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = [
        'name', 'description', 'image', 'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
    ];
}
