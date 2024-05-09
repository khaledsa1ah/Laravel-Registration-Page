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
    
}
