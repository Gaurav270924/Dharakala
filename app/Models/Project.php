<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name', 'slug', 'category', 'location', 'city', 'status', 'year',
        'hero_image', 'thumbnail', 'gallery', 'short_description',
        'long_description', 'website_url', 'rera_number', 'project_type',
        'configuration', 'area', 'amenities', 'featured', 'display_order',
    ];

    protected $casts = [
        'gallery'   => 'array',
        'amenities' => 'array',
        'featured'  => 'boolean',
        'year'      => 'integer',
        'display_order' => 'integer',
    ];
}
