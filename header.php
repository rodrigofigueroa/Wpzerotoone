<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
    <?php wp_head();?>
</head>
<body <?php body_class('test');?>>
    <div class="shadow"></div>
    <header>
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-4 col-md-2">
                    <a href="<?php bloginfo('url');?>">
                        <img src="<?php bloginfo('template_directory');?>/images/logo.png"/>
                    </a>                    
                </div>
                <div class="col-1 col-md-8 d-flex justify-content-center align-items-center">
                    <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'top-menu'
                                )
                                )
                                ?>
                </div>
                <div class="col-7 col-md-2 d-flex justify-content-end justify-content-md-center ">
                    <i class="fas fa-bars"></i>              
                    <div class="menu-carrito">                 
                        <i class="fas fa-shopping-cart"></i>                   
                        <a class="cart-customlocation" 
                            href="
                                <?php echo wc_get_cart_url(); ?>"
                            title="
                                <?php _e( 'View your shopping cart' ); ?>">
                                <?php echo sprintf ( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count() ), WC()->cart->get_cart_contents_count() ); ?> - <?php echo WC()->cart->get_cart_total(); ?>
                        </a>


                    </div>                    
                </div>
            </div>
        </div>
    </header>
