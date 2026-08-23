<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Location;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        $locations = [
            ['name' => 'Lucknow',       'project_count' => 5, 'x' => 52.00, 'y' => 44.00],
            ['name' => 'Delhi NCR',     'project_count' => 2, 'x' => 34.00, 'y' => 22.00],
            ['name' => 'Varanasi',      'project_count' => 1, 'x' => 68.00, 'y' => 58.00],
            ['name' => 'Other Markets', 'project_count' => 0, 'x' => 78.00, 'y' => 78.00],
        ];

        foreach ($locations as $location) {
            Location::create($location);
        }
    }
}
