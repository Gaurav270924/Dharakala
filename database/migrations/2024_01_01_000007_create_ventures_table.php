<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ventures', function (Blueprint $table) {
            $table->id();
            $table->string('number', 10);
            $table->string('category');
            $table->string('title');
            $table->text('description');
            $table->string('url');
            $table->text('image');
            $table->enum('accent', ['green', 'beige'])->default('green');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ventures');
    }
};
