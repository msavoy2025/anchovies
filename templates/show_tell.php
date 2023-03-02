<?php
/**
 * Template Name: Show and Tell
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
        <div id="lightbox_wrap16" class="lightbox_wrap lightboxwrap16" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox16" class="lightbox lightbox16" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen16" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose16">Close</div>
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
    <div class="gdbd_lsat st_lsat">
        <div class="gdbd_lsat_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_lsat1_2x.png'); ?>)"></div>
        <div class="gdbd_lsat_right">
            <div class="gdbd_lsat_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_lsat2_2x.png'); ?>)"></div>
        </div>
    </div>
</div>

<div class="container">
    <section class="st_branding_section">
        <div class="st_branding_intro">
            <div class="st_branding_intro_left">
                <h1>A fresh start and and a new name. </h1>
                <h2>Show+Tell – because every child and mentor has something valuable to show and tell.</h2>
                <p>In the early stages of their brand strategy, we identified a guiding belief: that anyone and everyone has an important perspective to share.</p>
            </div>
            <div class="st_branding_intro_right">
                <img src="<?php echo get_theme_file_uri('/dist/images/show_tell/st_logo.svg'); ?>">
            </div>
        </div>
        <div class="st_branding_images">
            <div class="st_branding_flex_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_branding1_2x.png'); ?>)"></div>
            <div class="st_branding_flex_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_branding2.png'); ?>)">
                <video id="player" autoplay loop muted playsinline>
                    <source src="<?php echo get_theme_file_uri('/src/videos/ShowandTell.mp4') ?>" type="video/mp4" />
                    <source src="<?php echo get_theme_file_uri('/src/videos/ShowandTell.webm') ?>" type="video/webm" />
                </video>
            </div>
        </div>
        <div class="st_full" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_branding_full1_2x.png'); ?>)"></div>
        <div class="st_branding_outro">
            <h1>Every great brand has a true reason for existing.</h1>
            <h1>Why do you exist?</h1>
        </div>
        <div class="st_full st_full2">
            <div id="lightbox_wrap17" class="lightbox_wrap lightboxwrap17" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox17" class="lightbox lightbox17" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_branding_full2_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen17" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose17">Close</div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="st_imagery_section">
        
        <div class="st_imagery_intro">
            <div class="st_imagery_intro_left">
                <img src="<?php echo get_theme_file_uri('/dist/images/show_tell/st_logo.svg'); ?>">
                <div class="st_imagery_intro_flex">
                    <div class="st_imagery_intro_flex_left">
                        <p class="bold">Special names require special solutions.</p>
                        <p>The logo offers a unique solution in that the symbol of the brand is found in the middle of the name. This was done intentionally in order for the brand to read as “Show+Tell.”</p>
                    </div>
                    <div class="st_imagery_intro_flex_right">
                        <p class="bold">Attract a wide audience with a new spin on something safe.</p>
                        <p>The plus sign represents the relationships between the children and their mentors that make this organization so special.</p>
                    </div>
                </div>
            </div>
            <div class="st_imagery_intro_right">
                <h2>The plus sign represents the fact that it is the children plus their mentors that make this organzation so special.</h2>
            </div>
        </div>
        
        <div class="st_full st_full3">
            <div id="lightbox_wrap18" class="lightbox_wrap lightboxwrap18" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox18" class="lightbox lightbox18" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_imagery1_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen18" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose18">Close</div>
            </div>
        </div>
        
        <div class="st_imagery_outro">
            <div class="st_imagery_outro_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/show_tell/st_imagery3_2x.png'); ?>)"></div>
            <div class="st_imagery_outro_right">
                <div class="st_imagery_outro_upper">
                    <p class="bold">Emphasizing community.</p>
                    <p>We emphasized the communal aspect of Show+Tell by creating a pattern with the symbol.</p>
                </div>
                <div class="st_imagery_outro_lower">
                    <p class="bold">Emphasizing the individual.</p>
                    <p>We created a wide color gamut for the brand and symbol, to show that we all have our own inner color of life to share.</p>
                </div>
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
