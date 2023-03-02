<?php
/**
 * Template Name: Home
 */

$sections = carbon_get_the_post_meta( 'crb_sections' );
get_header(); 
//Testing Git Updates
?>


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
    <section class="lsab">
        <div class="lsab_left">
            <a href="/works/humanly">
                <div class="lsab_left_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_large_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('lsab_large_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('lsab_large_text'); ?></p>
            </a>
        </div>
        <div class="lsab_right">
            <a href="/works/smell-the-roses">    
                <div class="lsab_right_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_small_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('lsab_small_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('lsab_small_text'); ?></p>
            </a>
        </div>
    </section>
</div>

<div class="container">
    <section class="full_text">
        <a href="/works/viridian"><section class="full_text">
            <div class="full hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('fullwtext_img'), 'full'); ?>);"></div>
            <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('fullwtext_title'); ?></h2>
            <p><?php echo carbon_get_the_post_meta('fullwtext_text'); ?></p>
        </section></a>
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
    <section class="cta-section">
        <div class="cta_left"><h1><?php echo carbon_get_the_post_meta('cta_title'); ?></h1></div>
        <div class="cta_right">
            <p class="large_text"><?php echo carbon_get_the_post_meta('cta_text') ?></p>
            <a href="<?php echo carbon_get_the_post_meta('cta_btn_url') ?>"><button class="btn hoverswap" style="color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;"><?php echo carbon_get_the_post_meta('cta_btn_text') ?></button></a>
        </div>
    </section>
</div>

<?php get_footer(); ?>
