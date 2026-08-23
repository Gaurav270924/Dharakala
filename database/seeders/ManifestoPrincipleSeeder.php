<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ManifestoPrinciple;

class ManifestoPrincipleSeeder extends Seeder
{
    public function run(): void
    {
        $principles = [
            [
                'key'        => 'Place',
                'title'      => 'PLACE',
                'text'       => 'We begin with context. The street, the soil, the light, the memory of what was there before.',
                'sort_order' => 1,
            ],
            [
                'key'        => 'Space',
                'title'      => 'SPACE',
                'text'       => 'We design around human experience. A room is for living in, not for photographing.',
                'sort_order' => 2,
            ],
            [
                'key'        => 'Material',
                'title'      => 'MATERIAL',
                'text'       => 'We value things that age beautifully. A wall should look better in twenty years, not worse.',
                'sort_order' => 3,
            ],
            [
                'key'        => 'Time',
                'title'      => 'TIME',
                'text'       => 'We build for the future. A place is finished when the people who use it say so, not when we do.',
                'sort_order' => 4,
            ],
        ];

        foreach ($principles as $principle) {
            ManifestoPrinciple::create($principle);
        }
    }
}
