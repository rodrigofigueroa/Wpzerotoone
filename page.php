<?php get_header();?>

    <div class="content">
        <div class="container">
            <div class="row">
                <img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset="">                
                <div class="col-12">
                    <h2>
                        <?php the_title();?>
                    </h2>
                </div>
                <div class="col-12">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                    <?php the_content();?>

                    <?php endwhile; else: endif;?>
                </div>    
            </div>

        </div>
    <div>

<?php get_footer();?>