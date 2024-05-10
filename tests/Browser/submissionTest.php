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
    public function testFormSubmission(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/register')
            ->type('#full_name', 'NameTest')
            ->type('#username', 'userNameTest')
            ->type('#phone', '01234567891')
            ->type('#address', 'streetTest')
            ->type('#email', 'test@gmail.com')
            ->type('#password', '@Test123456')
            ->type('#confirm_password', '@Test123456')
            ->attach('#user_image', __DIR__.'/untitled.jpg')
            ->keys('#birthdate', '01/01/2022')
            ->press('#register')
            ->waitForDialog(3)
            ->assertDialogOpened('Registration successful!')
            ->acceptDialog();
        });
    }
   
}
