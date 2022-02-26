<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\Models\Listing;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Carbon\Carbon;


class ListingTest extends TestCase
{
    use WithFaker;
    public function test_listing_has_a_title()
    {
        $listing = new Listing(['title' => 'Big House']);
        $this->assertTrue(true);
        $this->assertEquals('Big House', $listing->title);
    }

    public function test_listing_can_add_type()
    {
        $listing = Listing::factory()->create();
    //     Listing::create([
    //     'type_id' => (int) 1,
    //     'suburb_id' => (int) 1,
    //     'title' => 'test',
    //     'street_address' => 'test addr',
    //     'area' => 444,
    //     'rooms' => 6,
    //     'price' => 100000,
    //     'blurb' => 'good',
    //     'description' => 'great',
    //     'img_path' => '/dd/',
    //     'listed_at' => Carbon::now()->toDateTimeString()
    // ]);
    }
    
}
