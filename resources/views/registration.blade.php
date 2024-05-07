<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <link rel="stylesheet" href="{{ asset('styles.css') }}">
</head>
<body>
    @include('layouts.header')

    <div class="container">
        <h2>User Registration</h2>
        <form id="registrationForm" action="{{ route('registerForm') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div id="imagePreview"></div>

            <label for="full_name">Full Name:</label>
            <input type="text" id="full_name" name="full_name" required><br><br>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" required><br><br>

            <label for="address">Address:</label>
            <textarea id="address" name="address" required></textarea><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <label for="confirm_password">Confirm Password:</label>
            <input type="password" id="confirm_password" name="confirm_password" required><br><br>

            <label for="user_image">User Image:</label>
            <input type="file" id="user_image" name="user_image" required accept="image/*"><br><br>

            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required>
            <button type="button" id="checkBirthdate">Check Actors</button>
            <div id="birthdateActors"></div>

            <input type="submit" value="Register">
        </form>
    </div>

    @include('layouts.footer')

    <script src="{{ asset('API_Ops.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>
</html>
