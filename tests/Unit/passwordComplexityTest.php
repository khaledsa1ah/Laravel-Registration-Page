<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Http\Controllers\RegisterController;
use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class passwordComplexityTest extends TestCase
{
    public function testPasswordComplexity(): void
    {
        $registerController = new RegisterController();

        $passwords = [
            'password',  
            '12345678',       
            'PASSWORD',       
            'Password123',     
            '@Password123',       
        ];

        foreach ($passwords as $password) {

            $result = $registerController->validatePasswordComplexity($password);

            if ($password === '@Password123') {
                $this->assertEquals(['success' => true], $result);
            } else {
                $this->assertEquals(['success' => false, 'message' => 'Password does not meet complexity requirements!'], $result);
            }
        }
    }
}
