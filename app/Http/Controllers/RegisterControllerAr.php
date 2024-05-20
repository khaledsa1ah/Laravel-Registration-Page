<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DB_Ops;
use App\Upload;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\MytestEmail;
use Illuminate\Validation\Rule;
use App\Models\user;

class RegisterControllerAr extends Controller
{
    public function register(Request $request)
    {
        // Define validation rules
        $rules = [
            'full_nameAr' => 'required|string|max:255',
            'usernameAr' => 'required|string|max:255|unique:user,username',
            'birthdateAr' => 'required|date',
            'phoneAr' => 'required|string|max:15',
            'addressAr' => 'required|string|max:255',
            'emailAr' => 'required|string|email|max:255|unique:users,email',
            'passwordAr' => 'required|string|min:8|regex:/[A-Z]/|regex:/[0-9]/|regex:/[!@#$%^&*()]/',
            'user_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];

        // Validate the request
        $validatedData = $request->validate($rules);

        // Hash the password
        $hashedPassword = Hash::make($validatedData['passwordAr']);

        // Handle file upload
        $userImage = '';
        if ($request->hasFile('user_image')) {
            $userImage = $request->file('user_image')->store('user_images', 'public');
        }

        // Create DB_Ops and Upload instances
        $dbOps = new DB_Ops();
        $uploadImage = new Upload();

        // Create a new User instance
        $user = new User();
        $user->full_name = $validatedData['full_name'];
        $user->username = $validatedData['username'];
        $user->birthdate = $validatedData['birthdate'];
        $user->phone = $validatedData['phone'];
        $user->address = $validatedData['address'];
        $user->email = $validatedData['email'];
        $user->password = $hashedPassword;
        $user->user_image = $userImage;
        $user->save();


        // Upload the image
        $uploadImage->uploadImage($validatedData['usernameAr']);

        // Send the email
        Mail::to($validatedData['emailAr'])->send(new MytestEmail(
            $validatedData['full_nameAr'],
            $validatedData['usernameAr'],
            $validatedData['emailAr']
        ));

        // Send JSON response
        return response()->json(['success' => true]);
    }
}
