<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Carbon\Carbon;

class ListingController extends Controller
{
    public function index()
    {
        return Listing::query()->paginate(5);
    }

    public function store(Request $request, Listing $listing)
    {
    // Needs validation
    Listing::create([
        'type_id' => $request->type,
        'suburb_id' => $request->suburb,
        'title' => $request->title,
        'street_address' => $request->street_address,
        'area' => $request->area,
        'rooms' => $request->rooms,
        'price' => $request->price,
        'blurb' => $request->blurb,
        'description' => $request->description,
        'img_path' => $request->image,
        'listed_at' => Carbon::now()->toDateTimeString()
    ]);
    return 'success';
    }
}
