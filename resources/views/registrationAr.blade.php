@extends('layouts.masterAr')

@section('title', 'انشاء حساب')

@section('content')
    <h2>انشاء حساب </h2>
    <form id="registrationFormAr" action="/registerAr" method="POST" enctype="multipart/form-data">
        @csrf
        <div id="imagePreview"></div>

        <p class="form-group">
            <label for="full_nameAr">الاسم الكامل:</label>
            <input type="text" id="full_nameAr" name="full_nameAr" required>
            <span id="full_nameAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="usernameAr">اسم المستخدم:</label>
            <input type="text" id="usernameAr" name="usernameAr" required>
            <span id="usernameAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="phoneAr">رقم الهاتف:</label>
            <input type="text" id="phoneAr" name="phoneAr" required>
            <span id="phoneAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="addressAr">العنوان:</label>
            <textarea id="addressAr" name="addressAr" required></textarea>
            <span id="addressAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="emailAr">البريد الالكتروني:</label>
            <input type="email" id="emailAr" name="emailAr" required>
            <span id="emailAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="passwordAr">كلمة المرور:</label>
            <input type="password" id="passwordAr" name="passwordAr" required>
            <span id="passwordAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="confirm_passwordAr">تأكيد كلمة المرور:</label>
            <input type="password" id="confirm_passwordAr" name="confirm_passwordAr" required>
            <span id="confirm_passwordAr-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="user_image">صورة المستخدم:</label>
            <input type="file" id="user_image" name="user_image" required accept="image/*">
            <span id="user_image-error" class="error-message"></span>
        </p>

        <p class="form-group">
            <label for="birthdateAr">تاريخ الميلاد:</label>
            <input type="date" id="birthdateAr" name="birthdateAr" required>
            <button type="button" id="checkBirthdate">تصفح الممثلين</button>
        <div id="birthdateActors"></div>
        <span id="birthdateAr-error" class="error-message"></span>
        </p>

        <p>
            <input type="submit" value="انشاء ">
        </p>
    </form>
@endsection
