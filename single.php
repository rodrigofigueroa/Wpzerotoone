<?php get_header();?>

    <div class="content">
        <div class="container">
            <div class="row">

                    <?php if(has_post_thumbnail()):?>
                       <a href="<?php the_permalink();?>">
                            <img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset=""></a>
                    <?php endif;?>
                        
                <div class="col-12">
                    <h2>
                        <?php the_title();?>
                    </h2>
                </div>
                <div class="col-12">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                    <?php the_content();?>

                    <?php endwhile; else: endif;?>
                    <?php the_tags();?> 
                </div>    
            </div>
            <?php get_sidebar();?>
            <?php  dynamic_sidebar('blog-sidebar');?>
        </div>
    <div>

<?php get_footer();?>