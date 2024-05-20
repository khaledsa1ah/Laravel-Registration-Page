@extends('layouts.master')

@section('title', 'User Registration')

@section('content')
    <h2>User Registration</h2>
    <form id="registrationForm" action="/register" method="POST" enctype="multipart/form-data" onsubmit="return validateForm()">
        @csrf
        <div id="imagePreview"></div>

        <p class="form-group">
            <label for="full_name">Full Name:</label>
            <input type="text" id="full_name" name="full_name" required>
            <span id="full_name-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <span id="username-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required>
            <span id="phone-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="address">Address:</label>
            <textarea id="address" name="address" required></textarea>
            <span id="address-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <span id="email-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <span id="password-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required>
            <span id="confirm_password-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="user_image">User Image:</label>
            <input type="file" id="user_image" name="user_image" required accept="image/*">
            <span id="user_image-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required>
            <button type="button" id="checkBirthdate">Check Actors</button>
        <div id="birthdateActors"></div>
        <span id="birthdate-error" class="error-message"></span>
        </p>

        <p>
            <input type="submit" value="Register" id="register">
        </p>
    </form>
@endsection
