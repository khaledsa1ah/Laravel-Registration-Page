<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DB_Ops;
use App\Upload;
use Illuminate\Support\Facades\Hash;
class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Retrieve form data
        // Check if English version inputs exist
        if ($request->has('full_name')) {
            // English version inputs exist
            $fullName = $request->input('full_name');
            $userName = $request->input('username');
            $birthdate = $request->input('birthdate');
            $phone = $request->input('phone');
            $address = $request->input('address');
            $email = $request->input('email');
            $password = $request->input('password');
            $confirmPassword = $request->input('confirm_password');
        } elseif ($request->has('full_nameAr')) {
            // Arabic version inputs exist
            $fullName = $request->input('full_nameAr');
            $userName = $request->input('usernameAr');
            $birthdate = $request->input('birthdateAr');
            $phone = $request->input('phoneAr');
            $address = $request->input('addressAr');
            $email = $request->input('emailAr');
            $password = $request->input('passwordAr');
            $confirmPassword = $request->input('confirm_passwordAr');
        }

        // Hash the password
        $hashedPassword = Hash::make($password);

        // Check if file is uploaded
        if ($request->hasFile('user_image')) {
            $userImage = $request->file('user_image')->getClientOriginalName();
        } else {
            // Handle if no image is provided
            $userImage = ''; // Or set a default image name
        }

        // Perform client-side validations first
        // (e.g., password match, required fields, etc.)
        // Client-side validations should be done in JavaScript.

        $response = $this->validateUsername($userName);

        if ($response['success']) {
            $response = $this->validatePassword($password, $confirmPassword);
        }

        if ($response['success']) {
            $response = $this->validatePasswordComplexity($password);
        }

        if ($response['success']) {
            $dbOps = new DB_Ops();
            $uploadImage = new Upload();

            // Handle file upload (move uploaded file to desired directory)
            if ($uploadImage->uploadImage($userName)) {
                // Insert user into the database with hashed password
                $uniqueFilename = $userName . '_' . date('Ymd_His') . '_' . $_FILES['user_image']['name'];
                $dbOps->insertUser($fullName, $userName, $birthdate, $phone, $address, $email, $hashedPassword, $uniqueFilename);
                $response = ['success' => true];
            } else {
                $response = ['success' => false, 'message' => 'Error uploading file!'];
            }
        }

        // Send JSON response
        return response()->json($response);
    }


    public function validateUsername($userName) {
        // Check if username already exists in the database
        $dbOps = new DB_Ops();
        if ($dbOps->checkUsernameExists($userName)) {
            return ['success' => false, 'message' => 'Username already exists! Please choose another.'];
        } else {
            return ['success' => true];
        }
    }

    private function validatePassword($password, $confirmPassword) {
        if ($password !== $confirmPassword) {
            return ['success' => false, 'message' => 'Passwords do not match!'];
        } else {
            return ['success' => true];
        }
    }

    public function validatePasswordComplexity($password) {
        if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[0-9]/', $password) || !preg_match('/[!@#$%^&*()]/', $password)) {
            return ['success' => false, 'message' => 'Password does not meet complexity requirements!'];
        } else {
            return ['success' => true];
        }
    }
}
