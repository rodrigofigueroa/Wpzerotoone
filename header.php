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
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-12 col-md-3">
                    <a href="<?php bloginfo('url');?>">
                        <img src="<?php bloginfo('template_directory');?>/images/logo.png"/>
                    </a>                    
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">                
                    <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'top-menu'
                            )
                        )
                    ?>
                </div>
                <div class="col-12 col-md-2 d-flex justify-content-end align-items-center">
                    <div class="menu-carrito">
                        <i class="fas fa-shopping-cart"></i>
                    </div>                    
                </div>
            </div>
        </div>
    </header>
