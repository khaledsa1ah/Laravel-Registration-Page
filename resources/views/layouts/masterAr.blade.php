<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('styles.css') }}">
</head>
<body>
    @include('layouts.headerAr')

    <div class="container">
        @yield('content')
    </div>

    @include('layouts.footerAr')

    <script src="{{ asset('API_Ops.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>
</html>
