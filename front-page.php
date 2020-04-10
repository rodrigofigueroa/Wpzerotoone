<?php get_header();?>

<div id="hero" class="hero">
    <div class="container">
        <h2>Welcome to my Shop</h2>
    </div>
</div>

    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-12">        
                    <?php if(have_posts()) : while(have_posts()) : the_post();?>

                    <?php the_content();?>

                    <?php endwhile; else: endif;?>
                </div>    
            </div>

        </div>
    <div>

<?php get_footer();?>