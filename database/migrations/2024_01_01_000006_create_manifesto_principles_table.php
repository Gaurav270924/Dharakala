<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('manifesto_principles', function (Blueprint $table) {
            $table->id();
            $table->string('key', 50);
            $table->string('title');
            $table->text('text');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('manifesto_principles');
    }
};
