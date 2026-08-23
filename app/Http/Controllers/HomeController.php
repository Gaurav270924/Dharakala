<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Project;
use App\Models\JournalEntry;
use App\Models\Material;
use App\Models\Location;
use App\Models\Stat;
use App\Models\ManifestoPrinciple;
use App\Models\Venture;

class HomeController extends Controller
{
    /**
     * Render the single-page Dharakala site.
     * All section data is fetched here and passed as Inertia props —
     * no data-fetching logic lives inside React components.
     */
    public function index(): Response
    {
        return Inertia::render('Home', [
            'projects'            => Project::orderBy('display_order')->get(),
            'journalEntries'      => JournalEntry::orderBy('id')->get(),
            'materials'           => Material::orderBy('sort_order')->get(),
            'locations'           => Location::orderBy('id')->get(),
            'stats'               => Stat::orderBy('sort_order')->get(),
            'manifestoPrinciples' => ManifestoPrinciple::orderBy('sort_order')->get(),
            'ventures'            => Venture::orderBy('id')->get(),
        ]);
    }
}
