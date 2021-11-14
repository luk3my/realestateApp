<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SuburbFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Wellington Point', 'Cleveland', 'Ormiston', 'Birkdale', 'Thornlands'])
        ];
    }
}
