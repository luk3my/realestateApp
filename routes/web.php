<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListingController;
use App\Models\Type;
use App\Models\Suburb;


use Inertia\Inertia;

use App\Models\Listing;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Views

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'Listings' => DB::table('Listings') 
                        ->join('types', 'types.id', 'listings.type_id')
                        ->join('suburbs', 'suburbs.id', 'listings.suburb_id')
                        ->select('listings.*','types.name as type', 'suburbs.name as suburb')
                        ->paginate(5),
        'Types' => Type::all(),
        'Suburbs' => Suburb::all(),

    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

// Endpoints
// Listings
Route::post('listingsIndex', [ListingController::class, 'filterIndex']);
Route::post('listings', [ListingController::class, 'store']);
// Route::post('listingsFiltered', [ListingController::class, 'filterIndex']);


// Type
Route::get('types', [TypeController::class, 'index']);