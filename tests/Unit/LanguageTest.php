<?php

namespace Tests\Unit;

use Tests\TestCase;
use PHPUnit\Framework\Attributes\CoversClass;

#[CoversClass(RegistrationForm::class)]
class LanguageTest extends TestCase
{

    public function testArabicPage()
    {
        $response = $this->get('/registerAr');

        // Header
        $response->assertSee('موقعي');
        $response->assertSee('الصفحة الرئيسية');
        $response->assertSee('تعرف علينا');
        $response->assertSee('طرق التواصل');
        // Form Page
        $response->assertSee(': الاسم كامل');
        $response->assertSee(': اسم المستخدم');
        $response->assertSee(': رقم الهاتف');
        $response->assertSee(': العنوان');
        $response->assertSee(': البريد الالكتروني');
        $response->assertSee(': كلمة المرور');
        $response->assertSee(': تأكيد كلمة المرور');
        $response->assertSee(': صورة المستخدم');
        $response->assertSee(': تاريخ الميلاد');
        $response->assertSee('انشاء');
        // Footer
        $response->assertSee('موقعي');
        $response->assertSee('خالد صلاح');
        $response->assertSee('2024');
    }
}
