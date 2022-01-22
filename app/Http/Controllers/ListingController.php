<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;


class ListingController extends Controller
{
    public function index()
    {
        return Listing::query()->paginate(5);
    }

    public function store(Request $request, Listing $listing)
    {
    // validation
    $request->validate([
        'type' => ['required'],
        'suburb' => ['required'],
        'title' => ['required', 'max:100', 'unique:listings'],
        'street_address' => ['required', 'max:255'],
        'area' => ['required', 'max:5000', 'integer'],
        'rooms' => ['required', 'max:10', 'integer'],
        'price' => ['required', 'max:10000000', 'integer'],
        'blurb' => ['required', 'max:255'],
        'description' => ['required', 'max:255']
    ]);

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

    public function filterIndex() {

        return Listing::join('types', 'types.id', 'listings.type_id')
            ->join('suburbs', 'suburbs.id', 'listings.suburb_id')
            ->select('listings.*','types.name as type', 'suburbs.name as suburb')
            ->filter(request(['type', 'suburb', 'price']))
            ->paginate(5);
    }    
}
