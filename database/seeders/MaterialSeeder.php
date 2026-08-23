<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Material;

class MaterialSeeder extends Seeder
{
    public function run(): void
    {
        $materials = [
            [
                'name'        => 'Stone',
                'description' => 'We use stone that is quarried within 200km of each site. It carries the geology of the place and ages into a deeper version of itself.',
                'image'       => 'https://images.pexels.com/photos/35646448/pexels-photo-35646448.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'sort_order'  => 1,
            ],
            [
                'name'        => 'Wood',
                'description' => 'Treated local timber for fins, screens and ceilings. A warm counterpoint to concrete that records every season it lives through.',
                'image'       => 'https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'sort_order'  => 2,
            ],
            [
                'name'        => 'Concrete',
                'description' => 'Cast on site, left unfinished. We design the formwork so the marks of making become the texture of the finished wall.',
                'image'       => 'https://images.pexels.com/photos/15663488/pexels-photo-15663488.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'sort_order'  => 3,
            ],
            [
                'name'        => 'Glass',
                'description' => 'Used sparingly and deliberately — to frame a view, to bring a courtyard inside, never as a skin for its own sake.',
                'image'       => 'https://images.pexels.com/photos/14989324/pexels-photo-14989324.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'sort_order'  => 4,
            ],
            [
                'name'        => 'Landscape',
                'description' => 'The first and last material. We start with the trees that are already there and build outward from them.',
                'image'       => 'https://images.pexels.com/photos/14698297/pexels-photo-14698297.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'sort_order'  => 5,
            ],
        ];

        foreach ($materials as $material) {
            Material::create($material);
        }
    }
}
