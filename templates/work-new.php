<?php
/**
 * Template Name: Featured Work
 */

$icons = carbon_get_theme_option('crb_icons');
get_header('dark'); ?>

<div class="page_title">
    <div class="container">    
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>
</div>

<div class="container">
    <section class="featured-work-section">
        <h2>Featured Work.</h2>
        <div class="featured-works">
            <?php
                $work = new WP_Query(array(
                'posts_per_page' => -1,
                'post_type' => 'work',
                'orderby' => 'title', 
                'order' => 'ASC',
                //'cat' => 'home',
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
                        <button class="prev"></button>
                        <button class="next"></button>
                    </div>
                </div> 
                    
            <?php } ?>
        </div>
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
