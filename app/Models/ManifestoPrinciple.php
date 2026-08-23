<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ManifestoPrinciple extends Model
{
    protected $fillable = [
        'key', 'title', 'text', 'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
    ];
}
