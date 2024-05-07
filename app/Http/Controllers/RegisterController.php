<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DB_Ops;
use App\Upload;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Retrieve form data
        $fullName = $request->input('full_name');
        $userName = $request->input('username');
        $birthdate = $request->input('birthdate');
        $phone = $request->input('phone');
        $address = $request->input('address');
        $email = $request->input('email');
        $password = $request->input('password');
        $confirmPassword = $request->input('confirm_password');
        $userImage = $request->file('user_image')->getClientOriginalName();

        // Perform client-side validations first
        // (e.g., password match, required fields, etc.)
        // Client-side validations should be done in JavaScript.

        $dbOps = new DB_Ops();
        $uploadImage = new Upload();
        // Check if username already exists in the database
        if ($dbOps->checkUsernameExists($userName)) {
            $response = ['success' => false, 'message' => 'Username already exists! Please choose another.'];
        } else {
            // Check if passwords match
            if ($password !== $confirmPassword) {
                $response = ['success' => false, 'message' => 'Passwords do not match!'];
            } else {
                // Validate password complexity (e.g., length, special characters, etc.)
                if (strlen($password) < 8 || !preg_match('/[A-Z]/', $password) || !preg_match('/[0-9]/', $password) || !preg_match('/[!@#$%^&*()]/', $password)) {
                    $response = ['success' => false, 'message' => 'Password does not meet complexity requirements!'];
                } else {
                    // Handle file upload (move uploaded file to desired directory)
                    if ($uploadImage->uploadImage($userName)) {
                        // Insert user into the database
                        $uniqueFilename = $userName . '_' . date('Ymd_His') . '_' . $_FILES['user_image']['name'];
                        $dbOps->insertUser($fullName, $userName, $birthdate, $phone, $address, $email, $password, $uniqueFilename);
                        $response = ['success' => true];
                    } else {
                        $response = ['success' => false, 'message' => 'Error uploading file!'];
                    }
                }
            }
        }

        // Send JSON response
        return response()->json($response);
    }
}
