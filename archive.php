<?php get_header();?>

    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-12">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>
                            <?php if(has_post_thumbnail()):?>
                                <a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset=""></a>
                            <?php endif;?>
                            <h2>
                                <a href="<?php the_permalink();?>"><?php the_title();?></a>
                            </h2>

                    <?php the_excerpt();?>

                    <?php endwhile; else: endif;?>

                        <?php
                          
                            global $wp_query;
                            $big = 9999999;

                            echo paginate_links(
                                array(
                                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link($big) ) ),
                                    'format' =>  '?paged=%#%', 
                                    'current' =>  max(1, get_query_var('paged')), 
                                    'total' =>  $wp_query->max_num_pages
                                )
                            )
                        ?>
                </div>    
            </div>
            <?php get_sidebar();?>
            <?php  dynamic_sidebar('blog-sidebar');?>
        </div>
    <div>

<?php get_footer();?>