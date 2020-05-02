<?php get_header();?>

    <div class="bloggy">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-12 order-0">     
                    <h2 class="text-center">Blog<h2>
                </div>
                <div class="col-12 col-md-7 order-2 order-md-1">     
                    <div class="card-deck">

                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                        <div class="card">
                            <?php if(has_post_thumbnail()):?>
                                <a href="<?php the_permalink();?>">
                                    <img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset="" class="card-img-top">
                                </a>
                            <?php endif;?>
                    
                                <div class="card-body">                            
                                    <h2 class="card-title">
                                        <a href="<?php the_permalink();?>">
                                            <span><?php the_title();?></span>
                                        </a>
                                    </h2>                                    
                                    <?php the_excerpt();?>                                    
                                </div>
                        </div>

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
                <div class="col-12 col-md-3 order-1 order-md-2">
                    <section class="side-bar-container sticky-top">                    
                        <?php get_sidebar();?>
                    </section>
                    <?php  dynamic_sidebar('blog-sidebar');?>
                </div>
            </div>
        </div>
    <div>

<?php get_footer();?>