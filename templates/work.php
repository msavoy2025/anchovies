<?php
/**
 * Template Name: Work
 */

$icons = carbon_get_theme_option('crb_icons');
get_header('dark'); ?>

<div class="page_title">
    <div class="container">    
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>
</div>

<div class="container">
    <section class="lsab">
        <div class="lsab_left">
            <a href="/works/viridian">
                <div id="lsab_left_image" >
                    <div class="lsab_slide active_lsab hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_large_img'), 'full'); ?>);"></div>
                    <div class="lsab_slide hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_large_img2'), 'full'); ?>);"></div>
                    <div class="lsab_slide hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_large_img3'), 'full'); ?>);"></div>
                    <div class="lsab_slide hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsab_large_img4'), 'full'); ?>);"></div>
                </div>
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
        <a href="/works/roman-kandle">
            <div class="full hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('fullwtext_img'), 'full'); ?>);"></div>
            <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('fullwtext_title'); ?></h2>
            <p><?php echo carbon_get_the_post_meta('fullwtext_text'); ?></p>
        </a>
    </section>
</div>

<div class="container">
    <section class="header_imageRight">
        <h1 class="header_imageRight_left"><?php echo carbon_get_the_post_meta('hcir_title'); ?></h1>
        <div class="header_imageRight_right">
            <a href="/works/good-days-bad-days/">
                <div class="header_imageRight_img hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('hcir_img'), 'full'); ?>);"></div>
                <h2><?php echo carbon_get_the_post_meta('hcir_img_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('hcir_img_text'); ?></p>
            </a>
        </div>
    </section>
</div>

<div class="container">
    <section class="slat">
        <div class="slat_left">
            <a href="/works/thrive">
                <div class="slat_left_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('slat_large_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('slat_large_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('slat_large_text'); ?></p>
            </a>
        </div>
        <div class="slat_right">
            <a href="/works/parachute">
                <div class="slat_right_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('slat_small_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('slat_small_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('slat_small_text'); ?></p>
            </a>
        </div>
    </section>
</div>

<div class="container">
    <section class="lsat">
        <div class="lsat_left">
            <a href="/works/humanly">
                <div class="lsat_left_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsat_large_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('lsat_large_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('lsat_large_text'); ?></p>
            </a>
        </div>
        <div class="lsat_right">
            <a href="/works/show-and-tell">
                <div class="lsat_right_image hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('lsat_small_img'), 'full'); ?>);"></div>
                <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('lsat_small_title'); ?></h2>
                <p><?php echo carbon_get_the_post_meta('lsat_small_text'); ?></p>
            </a>
        </div>
    </section>
</div>

<div class="container">
    <section class="full_text">
        <a href="/works/copper-coyote">
            <div class="full hoverswap" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('fullwtext2_img'), 'full'); ?>);"></div>
            <h2 class="underImage hoverswap"><?php echo carbon_get_the_post_meta('fullwtext2_title'); ?></h2>
            <p><?php echo carbon_get_the_post_meta('fullwtext2_text'); ?></p>
        </a>
    </section>
</div>

<div class="container">
    <section class="icons-section">
        <h1 class="icons_section_title"><?php echo carbon_get_the_post_meta('work_icons_title'); ?></h1>
        <div class="icons">
            <?php foreach ( $icons as $icon ) : ?>
                <div class="icon"><img src="<?php echo wp_get_attachment_image_url($icon['icon_img'], 'full'); ?>"></div>
            <?php endforeach ?>
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
