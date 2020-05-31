<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel="shortcut icon" href="<?php echo get_site_url().'/favicon.ico';?>">    
            <title>Nettbyte Tienda de artículos para PC, Soporte técnico</title>
    <meta name="description" 
            content="Soporte Técnico , Tienda de articulos para PC e instalación de Camaras de Seguridad.">
    <link rel="canonical" href="http://example.com/" />
    <meta name="robots" content="index, follow">
    <!--
        Twitter meta tags
    -->
    <meta property="og:type" content="article" />

    <meta property="og:title" content="Tienda de artículos para PC, Soporte técnico" />

    <meta property="og:description" content="Tienda de artículos para PC" />

    <meta property="og:image" content="/a/wp-content/themes/woocomercetheme/images/logo.png" />

    <meta property="og:url" content="www.nettbyte.com.mx" />

    <meta property="og:site_name" content="Nettbyte" />
    <?php wp_head();?>
</head>
<body <?php body_class('test');?>>
    <div class="shadow"></div>
    <div id="btn-up" class="btn-up d-flex justify-content-center align-items-center">
        <i class="fas fa-angle-up"></i>
    </div>
    <header>
        <div class="r-up d-flex justify-content-center justify-content-md-end align-items-center">
            <a class="mr-3" href="https://www.facebook.com/Nettbyte-110300546983772"><i class="fab fa-facebook-f"></i></a>
            <a class="mr-2" href="https://api.whatsapp.com/send?phone=+5215584399797" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <img class="mr-3" src="<?php echo get_site_url().'/wp-content/themes/woocomercetheme/images/number.png' ?>" alt="numero Nettbyte">
        </div>
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-12 col-xs-4 col-md-2 d-flex justify-content-center">
                    <a href="<?php bloginfo('url');?>">
                        <img src="<?php bloginfo('template_directory');?>/images/logo.png" alt="Nettbyte logo" />
                    </a>                    
                </div>
                <div class="col-12 col-xs-1 col-md-8 d-flex justify-content-center align-items-center">
                    <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'top-menu'
                                )
                                )
                                ?>
                </div>
                <div class="col-12 col-xs-7 col-md-2 d-flex justify-content-center justify-content-md-center ">
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
