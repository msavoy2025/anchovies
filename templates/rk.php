<?php
/**
 * Template Name: Roman Kandle
 * Template Post Type: work
 */
$work_hero_height = carbon_get_the_post_meta('work_hero_height');
get_header('dark'); ?>



<div class="container">
    <div class="page_title">
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>
</div>

<div class="container">
    <div class="work_hero <?php if ( !empty( $work_hero_height ) ) : ?>work_hero_short<?php endif ?>">
        <div id="lightbox_wrap11" class="lightbox_wrap lightboxwrap11" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox11" class="lightbox lightbox11" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen11" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose11">Close</div>
        </div>
    </div>
</div>

<div class="work_ingredients_wrap">
    <div class="container">
        <div class="work_ingredients">
            <div class="ingredients_left">
                <div class="work_ingredient1">
                    <p class="bold">key Ingredient</p>
                    <h1 class="work_ingredient_title"><?php echo carbon_get_the_post_meta('work_ingredient_title'); ?></h1>
                </div>
                <div class="work_ingredient_content work_ingredient2">
                    <p class="bold">description</p>
                    <?php echo wpautop(carbon_get_the_post_meta('work_ingredient_content')); ?>
                </div>
            </div>
            <div class="ingredients_right">
                <div class="work_ingredient_involve work_ingredient3">
                    <p class="bold">involvement</p>
                    <?php echo wpautop(carbon_get_the_post_meta('work_ingredient_involvement')); ?>
                </div>
                <div class="work_ingredient4">
                    <p class="bold">status</p>
                    <p class="work_ingredient_status"><?php echo carbon_get_the_post_meta('work_ingredient_status'); ?></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <section class="rk_branding_section">
        <div class="rk_branding_images">
            <div class="rk_branding_images_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_branding_image1_2x.png'); ?>)"></div>
            <div class="rk_branding_images_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_branding_image2_2x.png'); ?>)"></div>
        </div>
        <div class="rk_branding_content">
            <div class="rk_branding_content_left">
                <h1>Shifting a client's perspective is never easy. It's one of the key reasons why brand strategy exists.</h1>
                <div class="rk_branding_content_text">
                    <p class="bold">Convincing them to think smaller.</p>
                    <p>The client had big aspirations to expand nationwide quickly, but through the initial brand strategy, we helped them understand that this wasn't the wisest move.</p>
                    <p>Our suggestion was to own the market they know best – Miami. They agreed.</p>
                </div>
            </div>
            <div class="rk_branding_content_right">
                <p class="bold">Understanding their customers.</p>
                <p>By analyzing their customers, we found that what the customer wanted was something flashy but not too outlandish or loud.</p>
                <p>In other words, they wanted a humble brag. The client again agreed.</p>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="rk_largetext_section rk_largetext_section_desktop">
        <img src="<?php echo get_theme_file_uri('/dist/images/rk/rk_largetext.svg'); ?>">
    </section>
</div>

<div class="container">
    <section class="rk_branding_development_section">
        <div class="rk_branding_name">
            <div class="rk_branding_name_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_branding_name_image_2x.png'); ?>)"></div>
            <div class="rk_branding_name_right">
                <h1>We found a name that got attention in a sophisticated way.</h1>
                <p class="bold">After sifting through hundreds of names, we decided upon Roman Candle.</p>
                <p>As a name, Roman Candle evokes all of the appropriate associations. On the one hand it’s loud - it is a type of firework after all - and on the other hand it’s sophisticated due to the words themselves - “Roman” & “Candle.”</p>
            </div>
        </div>
        
        <section class="rk_largetext_section rk_largetext_section_mobile">
            <img src="<?php echo get_theme_file_uri('/dist/images/rk/rk_largetext.svg'); ?>">
        </section>
        
        <div class="rk_branding_logo">
            <div class="rk_branding_logo_intro">
                <h1>We developed a logo that evoked the day and the night. No easy task.</h1>
            </div>
            <div class="rk_branding_logo_images">
                <div class="rk_branding_logo_image_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_branding_logos_2x.png'); ?>)"></div>
                <div class="rk_branding_logo_image_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_branding_logos2_2x.png'); ?>)"></div>
            </div>
            <div class="rk_branding_logo_bot">
                <div class="rk_branding_logo_bot_left">
                    <h1>Is it a palm tree or is it a firework? You tell us.</h1>
                </div>
                <div class="rk_branding_logo_bot_right">
                    <img src="<?php echo get_theme_file_uri('/dist/images/rk/rk_icon.svg') ?>">
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="rk_imagery">
        <div class="rk_imagery_full rk_imagery_bg_flex">
            <div class="rk_imagery_bg" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_imagery_1.svg'); ?>)"></div>
            <div class="rk_imagery_bg_text">
                <div class="rk_imagery_bg_text_left"></div>
                <div class="rk_imagery_bg_text_right"><h1>Gradients were added to evoke the transition from day to night.</h1></div>
            </div>
        </div>
        <div class="rk_imagery_flex">
            <div class="rk_imagery_flex_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_imagery2_2x.png'); ?>)"></div>
            <div class="rk_imagery_flex_right">
                <div id="lightbox_wrap12" class="lightbox_wrap lightboxwrap12" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox12" class="lightbox lightbox12" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_imagery3_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen12" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose12">Close</div>
                </div>
            </div>
        </div>
        <div class="rk_imagery_full">
            <div id="lightbox_wrap13" class="lightbox_wrap lightboxwrap13" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox13" class="lightbox lightbox13" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/rk/rk_imagery4_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen13" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose13">Close</div>
            </div>
        </div>
    </section>
</div>


<div class="container">
    <section class="cta-section">
        <div class="cta_left"><h1><?php echo carbon_get_the_post_meta('cta_title'); ?></h1></div>
        <div class="cta_right">
            <p class="large_text"><?php echo carbon_get_the_post_meta('cta_text') ?></p>
            <a href="<?php echo carbon_get_the_post_meta('cta_btn_url') ?>"><button class="btn hoverswap" style="color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;"><?php echo carbon_get_the_post_meta('cta_btn_text') ?></button></a>
            <div class="project_links">
                <div class="prev_project">
                    <p>Previous Project</p>
                    <?php previous_post_link( '<strong>%link</strong>' ); ?>
                </div>
                <div class="next_project">
                    <p>Next Project</p>
                    <?php next_post_link( '<strong>%link</strong>' ); ?>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
