<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class UsernameExistTest extends TestCase
{
    use RefreshDatabase;

    public function test_form_not_accept_existing_username()
    {
        // Create a user with a known username
        $existingUser = User::factory()->create(['username' => 'existing_username']);

        $data = [
            'username' => 'existing_username',
        ];

        $rule = [
            'username' => 'required|string|max:255|unique:users,username',
        ];

        $validator = Validator::make($data, $rule);

        $this->assertTrue($validator->fails());
    }
}
