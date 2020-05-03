<?php get_header();?>

    <div class="carrito">
        <div class="container">
            <div class="row">
                <!-- <img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset="">                 -->
                <div class="col-12 pb-4 pt-4">
                    <h2>
                        <?php the_title();?>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                    <?php the_content();?>

                    <?php endwhile; else: endif;?>
                </div>    
                <!-- <div class="col-6">
                    <?php get_sidebar();?>
                </div> -->
            </div>
        </div>
    <div>

<?php get_footer();?>