<?php

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
