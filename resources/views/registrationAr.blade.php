@extends('layouts.masterAr')

@section('title', 'انشاء حساب')

@section('content')
<h2>انشاء حساب </h2>
        <form id="registrationFormAr" action="/registerAr" method="POST" enctype="multipart/form-data">
            @csrf
            <div id="imagePreview"></div>

            <label for="full_nameAr">: الاسم كامل</label>
            <input type="text" id="full_nameAr" name="full_nameAr" required><br><br>

            <label for="usernameAr">: اسم المستخدم</label>
            <input type="text" id="usernameAr" name="usernameAr" required><br><br>

            <label for="phoneAr">: رقم الهاتف</label>
            <input type="text" id="phoneAr" name="phoneAr" required><br><br>

            <label for="address">: العنوان</label>
            <textarea id="addressAr" name="addressAr" required></textarea><br><br>

            <label for="emailAr">: البريد الالكتروني</label>
            <input type="email" id="emailAr" name="emailAr" required><br><br>

            <label for="passwordAr">: كلمة المرور</label>
            <input type="password" id="passwordAr" name="passwordAr" required><br><br>

            <label for="confirm_passwordAr">: تأكيد كلمة المرور</label>
            <input type="password" id="confirm_passwordAr" name="confirm_passwordAr" required><br><br>

            <label for="user_image">: صورة المستخدم </label>
            <input type="file" id="user_image"  name="user_image" required accept="image/*"><br><br>

            <label for="birthdateAr">: تاريخ الميلاد</label>
            <input type="date" id="birthdateAr" name="birthdateAr" required>
            <button type="button" id="checkBirthdate">تصفح الممثلين</button>
            <div id="birthdateActors"></div>

            <input type="submit" value="انشاء ">
        </form>
@endsection
