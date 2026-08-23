<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Stat;

class StatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            ['value' => 25, 'suffix' => '+',  'label' => 'Years',                'sort_order' => 1],
            ['value' => 30, 'suffix' => '+',  'label' => 'Projects',             'sort_order' => 2],
            ['value' => 5,  'suffix' => 'M+', 'label' => 'Sq. Ft.',              'sort_order' => 3],
            ['value' => 10, 'suffix' => 'K+', 'label' => 'Families & Businesses','sort_order' => 4],
        ];

        foreach ($stats as $stat) {
            Stat::create($stat);
        }
    }
}
