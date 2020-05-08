<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit67f5b8ea635f90cecb6f12cbf8b70c72
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit67f5b8ea635f90cecb6f12cbf8b70c72::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit67f5b8ea635f90cecb6f12cbf8b70c72::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
