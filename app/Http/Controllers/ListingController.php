<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class ListingController extends Controller
{
    public function index()
    {
        return Listing::query()->paginate(5);
    }

    public function store(Request $request, Listing $listing)
    {
    // Needs validation
    if ($request->file('image')) {
        $file = $request->file('image');
        $fileName = $file->getClientOriginalName();
        $storeName = date('His').$fileName;
        $request->file('image')->storeAs('images/', $storeName, 'public');
        $DS = DIRECTORY_SEPARATOR;
        $imgPath = $DS.'storage'.$DS.'images'.$DS.basename($storeName);
    }

    Listing::create([
        'type_id' => (int) $request->type,
        'suburb_id' => (int) $request->suburb,
        'title' => $request->title,
        'street_address' => $request->street_address,
        'area' => $request->area,
        'rooms' => $request->rooms,
        'price' => $request->price,
        'blurb' => $request->blurb,
        'description' => $request->description,
        'img_path' => $imgPath,
        'listed_at' => Carbon::now()->toDateTimeString()
    ]);
    return 'success';
    }
}
