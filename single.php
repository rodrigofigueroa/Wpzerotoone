<?php get_header();?>

    <div class="post-blog">
        <div class="container">
            <div class="row">
                <div class="col-12" id="gogAd">

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 order-1">                
                    <?php if(has_post_thumbnail()):?>
                       <a href="<?php the_permalink();?>">
                            <img src="<?php the_post_thumbnail_url('post_image');?>" alt="imagen destacada nettbyte" srcset=""></a>
                    <?php endif;?>
                </div>
                        
                <div class="col-12 order-1">
                    <h2 class="first-h2">
                        <?php the_title();?>
                    </h2>
                </div>
                <div class="col-12 order-1">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                    <?php the_content();?>

                    <?php endwhile; else: endif;?>
                    <section class="tags-css">                    
                        <?php the_tags();?> 
                    </section>
                </div>
                <div class="col-12 order-0 ">
                    <section class="side-bar-container complete-search">                    
                        <?php get_sidebar();?>
                    </section>
                    <?php  dynamic_sidebar('blog-sidebar');?>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12" id="fotgogAd">
                        
                </div>
            </div>
        </div>
    <div>

<?php get_footer();?>