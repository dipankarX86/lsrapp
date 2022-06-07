<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email' => $this->faker->email(),
            'phone' => '8888888888',
            'address' => '1',//
            'gps' => '100,200',
            'owner_first_name' => $this->faker->firstName(),
            'owner_last_name' => $this->faker->lastName(),
            'owner_email' => $this->faker->email(),
            'owner_phone' => '8888888888',
            'owner_address' => '2',//
            'pan' => '3',//
            'gst' => '4',//
            'trade_license' => '5'//
        ];
    }
}
