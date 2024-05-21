<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class submissionTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     */
    use DatabaseMigrations;
    public function testFormSubmission(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('http://127.0.0.1:8000/register')
            ->type('#full_name', 'NameTest')
            ->type('#username', 'userNameTest')
            ->type('#phone', '01234567891')
            ->type('#address', 'streetTest')
            ->type('#email', 'test@gmail.com')
            ->type('#password', '@Test123456')
            ->type('#confirm_password', '@Test123456')
            ->attach('#user_image', __DIR__.'/untitled.jpg')
            ->keys('#birthdate', '002022/01/01')
            ->press('#register')
            ->waitForDialog(3)
            ->assertDialogOpened('Registration successful!')
            ->acceptDialog();
        });
    }
   
}