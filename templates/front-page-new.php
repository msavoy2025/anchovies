<?php
/**
 * Template Name: Home - Revised
 */
$icons = carbon_get_theme_option('crb_icons');
$sections = carbon_get_the_post_meta( 'crb_sections' );
get_header(); ?>


<div class="subheader" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('subheader_bg'), 'full'); ?>);">
    <div class="container">
        <div class="subheader_mid">
            <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
        </div>

        <div class="subheader_bot">
            <div class="subheader_bot_toppings">
                <img src="<?php echo get_theme_file_uri('/dist/images/subheader_topping1.svg'); ?>">
                <img src="<?php echo get_theme_file_uri('/dist/images/subheader_topping2.svg'); ?>">
                <img src="<?php echo get_theme_file_uri('/dist/images/subheader_topping3.svg'); ?>">
            </div>
            <?php echo wpautop(carbon_get_the_post_meta('subheader_text')); ?>
        </div>
    </div>
</div>
<div class="container">
    <section class="about-section">
        <div class="about_left">
            <?php echo wpautop(carbon_get_the_post_meta('below_hero_left')); ?>
        </div>
        <div class="about_right">
            <?php echo wpautop(carbon_get_the_post_meta('below_hero_right')); ?>
        </div>
    </section>
</div>

<div class="container">
    <section class="icons-section icons-section-home">
        <div class="icons">
            <?php foreach ( $icons as $icon ) : ?>
                <div class="icon"><img src="<?php echo wp_get_attachment_image_url($icon['icon_img'], 'full'); ?>"></div>
            <?php endforeach ?>
        </div>
    </section>
</div>

<div class="container">
    <section class="together-section">
        <?php echo wpautop(carbon_get_the_post_meta('arrow_block')); ?>
    </section>
</div>

<section class="full-section" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('front_full_bg'), 'full'); ?>);">
    <div class="container">
        <div class="subheader_mid">
            <h1><?php echo carbon_get_the_post_meta('front_full_title'); ?></h1>
        </div>

        <div class="subheader_bot">
            <div class="subheader_bot_toppings">
                <img src="<?php echo get_theme_file_uri('/dist/images/front_full1.svg'); ?>">
                <img src="<?php echo get_theme_file_uri('/dist/images/front_full2.svg'); ?>">
                <img src="<?php echo get_theme_file_uri('/dist/images/front_full3.svg'); ?>">
            </div>
            <h2><?php echo carbon_get_the_post_meta('front_full_text'); ?></h2>
        </div>

        <div class="full-section-quip"><p><?php echo carbon_get_the_post_meta('front_full_quip'); ?></p></div>
    </div>
</section>

<div class="container">
    <section class="featured-work-section featured-work-section-home">
        <h2>Featured Work.</h2>
        <div class="featured-works">
            <?php
                $work = new WP_Query(array(
                'posts_per_page' => -1,
                'post_type' => 'work',
                'orderby' => 'title', 
                'order' => 'ASC',
                'category_name' => 'feat-home',
                ));

                while($work->have_posts()) {
                $work->the_post(); 
                $feats = carbon_get_the_post_meta('crb_feats');
                $website = carbon_get_the_post_meta('feat_website');
                $case = carbon_get_the_post_meta('feat_case');
                ?>

                <div class="featured-work">
                    <div class="fw-left">
                        <h2 class="fw-title"><?php the_title(); ?></h2>
                        <div class="fw-content">
                            <?php echo wpautop(carbon_get_the_post_meta('feat_solutions')) ?>
                            <?php if ( ! empty( $website ) || ! empty( $case ) ) : ?>
                                <div class="fw-content-links">
                                    <?php if ( ! empty( $website ) ) : ?>
                                        <p><a href="<?php echo $website ?>" target="_blank">WEBSITE</a></p>
                                    <?php endif ?>
                                    <?php if ( ! empty( $case ) ) : ?>
                                        <p><a href="<?php the_permalink(); ?>">CASE STUDY</a></p>
                                    <?php endif ?>
                                </div>
                            <?php endif ?>
                        </div>
                    </div>
                    <div class="fw-right slider">
                        <div class="inner">
                            <?php foreach ( $feats as $feat ) : ?>
                            <div class="item">
                                <div class="image feat_img" style="background-image:url(<?php echo wp_get_attachment_image_url($feat['featured_images'], 'full'); ?>);"></div>
                            </div>
                            <?php endforeach ?>
                        </div>
                        <button class="prev"><img src="https://anchovies.local/wp-content/themes/anchovies/dist/images/arrow_left.svg"></button>
                        <button class="next"><img src="https://anchovies.agency/wp-content/themes/anchovies/dist/images/arrow_right.svg"></button>
                    </div>
                </div> 
                    
            <?php } ?>
        </div>
    </section>
</div>

<div class="container">
    <section class="cta-section">
        <div class="cta_left"><h1><?php echo carbon_get_the_post_meta('cta_title'); ?></h1></div>
        <div class="cta_right">
            <p class="large_text"><?php echo carbon_get_the_post_meta('cta_text') ?></p>
            <a href="<?php echo carbon_get_the_post_meta('cta_btn_url') ?>"><button class="btn hoverswap" style="color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;"><?php echo carbon_get_the_post_meta('cta_btn_text') ?></button></a>
        </div>
    </section>
</div>

<?php get_footer(); ?>
