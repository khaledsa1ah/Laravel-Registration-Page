<?php

use App\Http\Controllers\RegisterControllerAr;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('registration');
});

Route::get('/registerAr', function () {
    return view('registrationAr');
});

Route::post('/register', [RegisterController::class, 'register'])->name('registerForm');

Route::post('/registerAr', [RegisterControllerAr::class, 'register'])->name('registerAr');

Route::get('/api/rapidapi/key', function () {
    $apiKey = Config::get('rapidapi.key');
    return response()->json(['key' => $apiKey]);
});
