<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Venture;

class VentureSeeder extends Seeder
{
    public function run(): void
    {
        $ventures = [
            [
                'number'      => '01',
                'category'    => 'ARCHITECTURE',
                'title'       => 'Arch Rajiva',
                'description' => 'Architecture, planning and design shaped around people, place and purpose.',
                'url'         => 'https://archrajiva.com/',
                'image'       => 'https://images.pexels.com/photos/26741547/pexels-photo-26741547.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'accent'      => 'green',
            ],
            [
                'number'      => '02',
                'category'    => 'EDUCATION',
                'title'       => 'Dharakala Academy',
                'description' => 'Learning, leadership and professional development for a changing world.',
                'url'         => 'https://academy.dharakala.com/',
                'image'       => 'https://images.pexels.com/photos/7244576/pexels-photo-7244576.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'accent'      => 'beige',
            ],
        ];

        foreach ($ventures as $venture) {
            Venture::create($venture);
        }
    }
}
