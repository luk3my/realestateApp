<?php

namespace Database\Factories;
use App\Models\Type;
use App\Models\Suburb;


use Illuminate\Database\Eloquent\Factories\Factory;

class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
     
    public function definition()
    {
      
        // dd($this->faker->image(storage_path('app/public/images'), 400, 300));
        return [
            'title' => $this->faker->sentence,
            'type_id' => Type::all()->random()->id,
            'suburb_id' => Suburb::all()->random()->id,
            'street_address' => $this->faker->sentence,
            'area' => $this->faker->numberBetween(100, 1000),
            'rooms' => $this->faker->numberBetween(1, 5),
            'price' => $this->faker->numberBetween(100000, 1000000),
            'description' => $this->faker->paragraph,
            'blurb' => $this->faker->paragraph,
            'img_path' => $this->faker->image(storage_path('app/public/images'), 400, 300),
            'listed_at' => $this->faker->date
        ];
    }
}
