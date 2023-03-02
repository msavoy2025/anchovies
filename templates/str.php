<?php
/**
 * Template Name: Smell The Roses
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
        <div id="lightbox_wrap6" class="lightbox_wrap lightboxwrap6" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox6" class="lightbox lightbox6" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen6" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose6">Close</div>
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
    <section class="str_branding_section">
        <div class="str_slat">
            <div class="str_slat_left">
                <div class="str_slat_left_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_branding1_2x.png'); ?>)"></div>
                <p>The logo we developed took inspiration from, and served the same function as, candy hearts.</p>
                <p>As we all know, the function of thse little sweet treats is to carry messages to those who are near and dear. </p>
                <p>Our message? Stop and <span class="bold">Smell The Roses.</span></p>
            </div>
            <div class="str_slat_right" >
                <div id="lightbox_wrap7" class="lightbox_wrap lightboxwrap7" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox7" class="lightbox lightbox7" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_branding2_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen7" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose7">Close</div>
                </div>
            </div>
        </div>
        <div class="str_slat_left_mobile">
            <p>The logo we developed took inspiration from, and served the same function as, candy hearts.</p>
            <p>As we all know, the function of thse little sweet treats is to carry messages to those who are near and dear. </p>
            <p>Our message? Stop and <span class="bold">Smell The Roses.</span></p>
        </div>
        <div class="str_full">
            <div id="lightbox_wrap8" class="lightbox_wrap lightboxwrap8" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox8" class="lightbox lightbox8" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_branding3_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen8" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose8">Close</div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="str_silly_section">
        <div class="str_silly">
            <div class="str_silly_left">
                <div id="lightbox_wrap9" class="lightbox_wrap lightboxwrap9" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox9" class="lightbox lightbox9" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_silly_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen9" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose9">Close</div>
                </div>
            </div>
            <div class="str_silly_right">
                <h1>Show silly moments.</h1>
                <h1>Oopsie moments.</h1>
                <h1>Tender moments.</h1>
                <h1>Happy moments.</h1>
                <h1>Sad moments.</h1>
                <h1>Learning moments.</h1>
                <h1>Messy moments.</h1>
                <h1 class="silly_right_space">Just show moments.</h1>
                <p>We decided to show moments within analog photographic frames because analog photography hearkens back to a time when capturing a moment felt special and less disposable than digital photography.</p>
                <p style="margin-top:20px;">Special moments aren't disposable.</p>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="str_mockup_section">
        <div class="str_mockup_intro">
            <h1>A pattern of candy hearts was utilized to add texture, intrigue, and just a pinch of silliness to the identity.</h1>
            <div class="str_mockup_intro_img">
                <div id="lightbox_wrap10" class="lightbox_wrap lightboxwrap10" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox10" class="lightbox lightbox10" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_mockup_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen10" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose10">Close</div>
                </div>
            </div>
        </div>
        <div class="str_mockup">
            <div class="str_mockup_upper">
                <div class="str_mockup_upper_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_mockup2_2x.png'); ?>)"></div>
                <div class="str_mockup_upper_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_mockup3_2x.png'); ?>)"></div>
            </div>
            <div class="str_mockup_lower">
                <div class="str_mockup_lower_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_mockup4_2x.png'); ?>)"></div>
                <div class="str_mockup_lower_right">
                    <div class="str_mockup_lower_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/str/str_mag.jpg'); ?>)"></div>
                    <p class="bold">A trademark symbol was added to the logo to let people know that while we are fun, we still mean business.</p>
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
                <div class="next_project hoverswap">
                    <p>Next Project</p>
                    <?php next_post_link( '<strong>%link</strong>' ); ?>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
