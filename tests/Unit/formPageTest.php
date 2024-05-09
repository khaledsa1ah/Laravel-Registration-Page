<?php

namespace Tests\Unit;

use Tests\TestCase;
use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class formPageTest extends TestCase
{

    public function testHeader()
    {
        $response = $this->get('/register');

        $response->assertSee('My Website');
        $response->assertSee('Home');
        $response->assertSee('About');
        $response->assertSee('Contact');
    }
    public function testFormElemnts(){
        $response = $this->get('/register');

        $response->assertSee('Full Name:');
        $response->assertSee('Username:');
        $response->assertSee('Phone:');
        $response->assertSee('Address:');
        $response->assertSee('Email:');
        $response->assertSee('Password:');
        $response->assertSee('Confirm Password:');
        $response->assertSee('User Image:');
        $response->assertSee('Birthdate:');
        $response->assertSee('Register');
    }
}
