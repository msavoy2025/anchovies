<?php
/**
 * Template Name: Viridian
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
        <div id="lightbox_wrap22" class="lightbox_wrap lightboxwrap22" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox22" class="lightbox lightbox22" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen22" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose22">Close</div>
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
    <div class="vir_lsat">
        <div class="vir_lsat_left">
            <div id="lightbox_wrap23" class="lightbox_wrap lightboxwrap23" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox23" class="lightbox lightbox23" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/viridian/branding1_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen23" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose23">Close</div>
            </div>
        </div>
        <div class="vir_lsat_right">
            <div class="vir_lsat_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/viridian/branding2_2x.png'); ?>)"></div>
            <p>Viridian was originally named Viridian Partners, but we advised them that as always, the simpler the better. They followed our suggestion and are now just Viridian.</p>
        </div>
    </div>
    <div class="vir_full">
        <div id="lightbox_wrap24" class="lightbox_wrap lightboxwrap24" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox24" class="lightbox lightbox24" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/viridian/branding3_2x.png'); ?>)"></div>
            <div class="lightbox_open lightboxopen24" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose24">Close</div>
        </div>
    </div>
</div>

<div class="container">
    <section class="vir_branding_section">
        <div class="vir_branding_intro">
            <h1>The central discovery came early. </h1>
            <h1>
                Focus on the future.</br>
                Focus on potential.</br>
                Focus on growth.
            </h1>
        </div>
        <div class="vir_branding_flex">
            <div class="vir_branding_flex_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/viridian/branding4_2x.png'); ?>)"></div>
            <div class="vir_branding_flex_right">
                <div class="vir_branding_flex_right_upper">
                    <p class="bold">Viridian was originally positioned the same as the rest of their competition – they were good for the environment.</p>
                    <p>We had them shift their focus to communicating what happens after land development is complete and why it is good for the local communities.</p>
                    <p>In other words, it’s all about the future, potential, and growth.</p>
                </div>
                <div class="vir_branding_flex_right_lower">
                    <h1>A logo and identity was developed based on the fundamental symbol of growth – the arrow.</h1>
                </div>
            </div>
        </div>
        <div class="vir_branding_outro">
            <div class="vir_branding_outro_left">
                <div class="vir_outro_upper"><img src="<?php echo get_theme_file_uri('/dist/images/viridian/vir_logo.svg'); ?>"></div>
                <p class="vir_outro_lower">Viridian’s symbol represents the potential and growth in all directions for the land they are developing.</p>
            </div>
            <div class="vir_branding_outro_right">
                <div class="vir_outro_upper"><img src="<?php echo get_theme_file_uri('/dist/images/viridian/arrows.svg'); ?>"></div>
                <p class="vir_outro_lower">Arrows placed in succession with one another, as well as crossing paths, and changing directions, reinforces the message and logo in a creative and entertaining way.</p>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="vir_mockup_section">
        <div class="vir_mockup_upper">
            <h1 class="vir_mockup_upper_left">Offset halftone images have been added to evoke resilience, grit, and determination.</h1>
            <div class="vir_mockup_upper_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/viridian/mockup1_2x.png'); ?>)">
                
            </div>
        </div>
        <div class="para_full" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_full_temp.png'); ?>)">
            <video id="player" autoplay loop muted playsinline>
                <source src="<?php echo get_theme_file_uri('/src/videos/Viridian.mp4') ?>" type="video/mp4" />
                <source src="<?php echo get_theme_file_uri('/src/videos/Viridian.webm') ?>" type="video/webm" />
            </video>
        </div>
        <div class="vir_mockup_full" data-value="http-test" style="background-image:url('https://anchovies.agency/wp-content/themes/anchovies/dist/images/viridian/mockup2_2x.png')"></div>
        <p class="vir_mockup_full_description bold">Visually focused case studies are currently in development.</p>
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
