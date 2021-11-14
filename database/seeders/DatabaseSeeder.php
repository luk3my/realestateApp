<?php

namespace Database\Seeders;
use \App\Models\Listing;
use \App\Models\Type;
use \App\Models\Suburb;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Type::factory(3)->create();
        \App\Models\Suburb::factory(5)->create();
        \App\Models\Listing::factory(10)->create();
    }
}
