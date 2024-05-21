<?php

namespace Database\Seeders;

use App\Models\User; // Make sure the correct namespace is used
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'full_name' => 'Test User',
            'username' => 'testuser',
            'birthdate' => '2000-01-01',
            'phone' => '1234567890',
            'address' => '123 Test Street',
            'email' => 'test@example.com',
            'password' => bcrypt('password'), // or use Hash::make('password')
            'user_image' => null,
        ]);
    }
}
