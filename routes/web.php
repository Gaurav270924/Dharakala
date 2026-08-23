<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EnquiryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This is the entire route surface for the Dharakala site.
| One GET for the single-page scroll experience, one POST for enquiries.
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/enquiry', [EnquiryController::class, 'store'])->name('enquiry.store');
