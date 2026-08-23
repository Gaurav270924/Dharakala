<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed all application tables.
     * Run: php artisan db:seed
     */
    public function run(): void
    {
        $this->call([
            ProjectSeeder::class,
            JournalEntrySeeder::class,
            MaterialSeeder::class,
            LocationSeeder::class,
            StatSeeder::class,
            ManifestoPrincipleSeeder::class,
            VentureSeeder::class,
        ]);
    }
}
