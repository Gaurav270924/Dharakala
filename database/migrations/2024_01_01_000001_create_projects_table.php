<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->enum('category', ['Residential', 'Commercial', 'Townships', 'Plotted', 'Mixed-Use']);
            $table->string('location');
            $table->string('city');
            $table->enum('status', ['Ongoing', 'Upcoming', 'Completed']);
            $table->smallInteger('year');
            $table->text('hero_image');
            $table->text('thumbnail');
            $table->json('gallery')->default('[]');
            $table->text('short_description');
            $table->text('long_description');
            $table->string('website_url');
            $table->string('rera_number');
            $table->string('project_type');
            $table->string('configuration');
            $table->string('area');
            $table->json('amenities')->default('[]');
            $table->boolean('featured')->default(false);
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
