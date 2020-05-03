<?php


function load_stylesheets(){
    wp_register_style('stylesheet', get_template_directory_uri() . './style.css', '', 1, 'all');
    wp_enqueue_style('stylesheet');
    //
    wp_register_style('custom', get_template_directory_uri() . './app.css', '', 1, 'all');
    wp_enqueue_style('custom');
}
add_action('wp_enqueue_scripts', 'load_stylesheets');


function load_javascript(){
    wp_register_script('custom', get_template_directory_uri() . './app.js', '', 1, true);
    wp_enqueue_script('custom');
}

add_action('wp_enqueue_scripts', 'load_javascript');

// add support
add_theme_support('menus');
add_theme_support('post-thumbnails');

register_nav_menus(
    array(
        'top-menu' => 'Top menu'
    )
);

// add maximun size

add_image_size('post_image', 1100, 750, true);


// add page sidebar

register_sidebar(

        array(
            'name' => 'Page Sidebar',
            'id' => 'page-sidebar',
            'class' => '',
            'before_title' => '<h4>',
            'after_title'  => '</h4>'
        )
    );

    register_sidebar(

        array(
            'name' => 'Blog Sidebar',
            'id' => 'blog-sidebar',
            'class' => '',
            'before_title' => '<h4>',
            'after_title'  => '</h4>'
        )
    );


    // woocomerce

    function mytheme_add_woocommerce_support() {
        add_theme_support( 'woocommerce' );
    }
    
    add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );

/**
 * Show cart contents / total Ajax
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment' );

function woocommerce_header_add_to_cart_fragment( $fragments ) {
	global $woocommerce;

	ob_start();

	?>
	<a class="cart-customlocation" href="<?php echo esc_url(wc_get_cart_url()); ?>" title="<?php _e('View your shopping cart', 'woothemes'); ?>"><?php echo sprintf(_n('%d item', '%d items', $woocommerce->cart->cart_contents_count, 'woothemes'), $woocommerce->cart->cart_contents_count);?> - <?php echo $woocommerce->cart->get_cart_total(); ?></a>
	<?php
	$fragments['a.cart-customlocation'] = ob_get_clean();
	return $fragments;
}