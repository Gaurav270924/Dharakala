<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venture extends Model
{
    protected $fillable = [
        'number', 'category', 'title', 'description', 'url', 'image', 'accent',
    ];
}
