<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stat extends Model
{
    protected $fillable = [
        'value', 'suffix', 'label', 'sort_order',
    ];

    protected $casts = [
        'value'      => 'integer',
        'sort_order' => 'integer',
    ];
}
