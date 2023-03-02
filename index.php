<?php get_header(); ?>

    <div class="container">
        <div class="page_title">
            <h1><?php the_title(); ?></h1>
        </div>
    </div>

    <div class="container">
        <?php the_content(); ?>
    </div>

<?php get_footer(); ?>
