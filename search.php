<?php get_header();?>

<section class="search-container">
        <div class="container">
        
            <div class="row d-flex justify-content-center ">
            
                <div class="col-12 col-md-7 order-2 order-md-1">                
                    <?php
                            $s=get_search_query();
                            $args = array(
                                            's' =>$s
                                        );
                                // The Query
                                    $the_query = new WP_Query( $args );
                                    if ( $the_query->have_posts() ) {
                                            _e("<h2 style='font-weight:bold;color:#000'>Resultados de Búsqueda para: ".get_query_var('s')."</h2>");
                                            while ( $the_query->have_posts() ) {
                                            $the_query->the_post();
                                                    ?>
                                                    <div class="card-deck">
                                                        <a href="<?php the_permalink(); ?>">
                                                            <div class="card mt-4 mb-4 ">
                                                                <div class="row no-gutters">
                                                                    <div class="col-md-5">
                                                                        <img src="<?php the_post_thumbnail_url('post_image');?>" alt="" srcset="" class="card-img-top">
                                                                    </div>
                                                                    <div class="col-md-7">
                                                                        <div class="card-body">                            
                                                                            <h2 class="card-title ">
                                                                                <?php the_title(); ?>            
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <?php
                                            }
                                        }else{
                                    ?>
                                    <h2 style='font-weight:bold;color:#000'>No encontramos lo que querías</h2>
                                    <div class="alert alert-info">
                                        <p>
                                            No encontramos la información especificada.
                                            <br>
                                            Intenta con otra palabra.
                                        </p>
                                    </div>
                    <?php } ?>
                
                </div>
                <div class="col-12 col-md-3 order-1 order-md-2">
                    <section class="side-bar-container sticky-top">                    
                        <?php get_sidebar();?>
                    </section>
                    <?php  dynamic_sidebar('blog-sidebar');?>
                </div>
            </div>
        </div>

</section>

<?php get_footer();?>