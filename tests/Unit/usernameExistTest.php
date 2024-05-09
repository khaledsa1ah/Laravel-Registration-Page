<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Http\Controllers\RegisterController;
use PHPUnit\Framework\Attributes\CoversClass;

use mysqli;

#[CoversClass(RegistrationForm::class)]
class usernameExistTest extends TestCase
{
    public function test_form_not_accept_existing_username()
    {
        $conn = new mysqli("localhost", "root", "", "registrationpage");
        $sql = "SELECT username FROM user LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $stmt->bind_result($username);
        $stmt->fetch();
        
        $registerController = new RegisterController();

        $result = $registerController->validateUsername($username);


        // Assert that the result indicates failure with the appropriate message
        $this->assertEquals(['success' => false, 'message' => 'Username already exists! Please choose another.'], $result);

        // $this->assertTrue($registerController->validateUsername($username));
    }
}
