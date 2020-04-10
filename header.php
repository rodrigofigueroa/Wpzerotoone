<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
    <?php wp_head();?>
</head>
<body <?php body_class('test');?>>
    <header>
        <div class="container">
            <a href="<?php bloginfo('url');?>">
                <img src="<?php bloginfo('template_directory');?>/images/logo.png"/>
            </a>
            <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'top-menu'
                    )
                )
            ?>
        </div>
    </header>
