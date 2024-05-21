<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class PasswordComplexityTest extends TestCase
{
    use RefreshDatabase;

    public function testPasswordComplexity(): void
    {
        $passwords = [
            'password',         // too simple
            '12345678',         // numbers only
            'PASSWORD',         // uppercase only
            'Password123',      // no special character
            '@Password123',     // valid
        ];

        $rule = [
            'password' => 'required|string|min:8|regex:/[A-Z]/|regex:/[0-9]/|regex:/[!@#$%^&*()]/',
        ];

        foreach ($passwords as $password) {
            $data = ['password' => $password];
            $validator = Validator::make($data, $rule);

            if ($password === '@Password123') {
                $this->assertFalse($validator->fails());
            } else {
                $this->assertTrue($validator->fails());
            }
        }
    }
}
