<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JournalEntry;

class JournalEntrySeeder extends Seeder
{
    public function run(): void
    {
        $entries = [
            [
                'number'   => '01',
                'title'    => 'Why the best spaces feel timeless',
                'category' => 'Design',
                'excerpt'  => 'Timelessness is not a style. It is what happens when a building is allowed to age without apologising for it.',
                'image'    => 'https://images.pexels.com/photos/137083/pexels-photo-137083.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'date'     => 'Jun 2025',
            ],
            [
                'number'   => '02',
                'title'    => 'The city as a slow garden',
                'category' => 'Cities',
                'excerpt'  => 'A township is not a product to be finished. It is a place that should keep growing long after the builder leaves.',
                'image'    => 'https://images.pexels.com/photos/6168453/pexels-photo-6168453.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'date'     => 'May 2025',
            ],
            [
                'number'   => '03',
                'title'    => 'On building with what is already there',
                'category' => 'Materials',
                'excerpt'  => 'The most sustainable material is the one already on the site. A note on keeping kilns, orchards and old walls.',
                'image'    => 'https://images.pexels.com/photos/966927/pexels-photo-966927.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'date'     => 'Apr 2025',
            ],
            [
                'number'   => '04',
                'title'    => 'Light is the first material',
                'category' => 'Architecture',
                'excerpt'  => 'Before stone, before wood, before glass — we design with light. Everything else is in service of how it falls.',
                'image'    => 'https://images.pexels.com/photos/15663488/pexels-photo-15663488.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'date'     => 'Mar 2025',
            ],
        ];

        foreach ($entries as $entry) {
            JournalEntry::create($entry);
        }
    }
}
