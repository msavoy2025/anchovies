<?php
/**
 * Template Name: Agency
 */
$icons = carbon_get_theme_option('crb_icons');
$services = carbon_get_the_post_meta('crb_services');
get_header('metalogo'); ?>

<div class="container">
    <div class="page_title">
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>
</div>

<div class="container">
    <div class="page_mission">
        <h1><?php echo carbon_get_the_post_meta('page_mission'); ?></h1>
    </div>
</div>

<div class="container">
    <section class="agency-full" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('agency_fullwidth'), 'full'); ?>);"></section>
</div>

<div class="container">
    <section class="services-section">
        <h1 class="services_title"><?php echo carbon_get_the_post_meta('services_title'); ?></h1>
        <div class="services_header">
            <p>area of service</p>
            <p>what it is</p>
            <p>why it matters</p>
        </div>
        <div class="services">
            <?php foreach ( $services as $service ) : ?>
                <div class="service">
                    <h2><?php echo esc_html($service['service_title']); ?></h2>
                    <div class="service_what"><?php echo wpautop($service['service_what']); ?></div>
                    <div class="service_why"><?php echo wpautop($service['service_why']); ?></div>
                    <div class="service_absolute"><?php echo wpautop($service['service_includes']); ?></div>
                </div>
            <?php endforeach ?>
        </div>
    </section>
</div>

<div class="container">
    <section class="agency_description1_section">
        <div class="agency_description1_left">
            <?php echo wpautop(carbon_get_the_post_meta('services_block1_description')); ?>
        </div>
        <div class="agency_description1_right">
            <h2><?php echo carbon_get_the_post_meta('services_block1_description_2'); ?></h2>
            <img src="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>">
        </div>
    </section>
</div>

<div class="container">
    <div class="agency_imageblock1_upper" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('services_imageblock_3'), 'full'); ?>);"></div>
    <section class="agency_imageblock1_section">
        <div class="agency_imageblock1_left" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('services_imageblock_1'), 'full'); ?>);"></div>
        <div class="agency_imageblock1_right" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('services_imageblock_2'), 'full'); ?>);"></div>
    </section>
</div>

<div class="container">
    <section class="agency_description2_section">
        <div class="agency_description2_left">
            <h1 class="title"><?php echo carbon_get_the_post_meta('services_block2_title') ?></h1>
        </div>
        <div class="agency_description2_right">
            <div class="agency_description2_right_upper">
                <?php echo wpautop(carbon_get_the_post_meta('services_block2_description_1')); ?>
            </div>
            <div class="agency_description2_right_lower">
                <?php echo wpautop(carbon_get_the_post_meta('services_block2_description_2')); ?>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="icons-section">
        <div class="icons">
            <?php foreach ( $icons as $icon ) : ?>
                <div class="icon"><img src="<?php echo wp_get_attachment_image_url($icon['icon_img'], 'full'); ?>"></div>
            <?php endforeach ?>
        </div>
    </section>
</div>

<div class="container">
    <section class="agency_description3_section">
        <h1 class="title"><?php echo carbon_get_the_post_meta('services_block3_title'); ?></h1>
        <div class="agency_description3">
            <div class="agency_description3_left">
                <div>
                    <?php echo wpautop(carbon_get_the_post_meta('services_block3_flex_1')); ?>
                </div>
                <div>
                    <?php echo wpautop(carbon_get_the_post_meta('services_block3_flex_2')); ?>
                </div>
                <div>
                    <?php echo wpautop(carbon_get_the_post_meta('services_block3_flex_3')); ?>
                </div>
            </div>
            <div class="agency_description3_right">
                <?php echo wpautop(carbon_get_the_post_meta('services_block3_description_1')); ?>
            </div>
        </div>

    </section>
</div>

<div class="container">
    <section class="agency-full agency-full2" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('agency_fullwidth_2'), 'full'); ?>);"></section>
</div>

<div class="container">
    <section class="agency_contact_section">
        <div class="agency_contact_left">
            <?php echo wpautop(carbon_get_the_post_meta('agency_contact_content')); ?>
        </div>
        <div class="agency_contact_right" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('agency_contact_img'), 'full'); ?>);">
        </div>
    </section>
</div>

<?php get_footer(); ?>
