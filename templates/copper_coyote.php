<?php
/**
 * Template Name: Copper Coyote
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
        <div id="lightbox_wrap19" class="lightbox_wrap lightboxwrap19" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox19" class="lightbox lightbox19" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen19" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose19">Close</div>
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
    <section class="cc_branding_section">
        <div class="cc_branding_intro">
            <div class="cc_branding_intro_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/branding_intro_left_2x.png'); ?>)"></div>
            <div class="cc_branding_intro_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/branding_intro_right_2x.png'); ?>)"></div>
        </div>
        <div class="cc_epiphany cc_epiphany_upper">
            <div class="cc_epiphany_left">
                <h1>Our first epiphany – you need to sell the right mood.</h1>
                <p class="bold">If they were going to be successful, they had to appeal to musicians and sell the muscians’ aesthetic to others.</p>
            </div>
            <div class="cc_epiphany_right">
                <div class="cc_epiphany_right_upper">
                    <div class="cc_epiphany_image">
                        <img src="<?php echo get_theme_file_uri('/dist/images/cc/epiphany_upper.png'); ?>">
                    </div>
                </div>
                <div class="cc_epiphany_right_lower">
                    <p>The brand initially had a universal look and feel that was trying to attract anyone who might be even remotely interested in southwestern clothing. This direction simply wasn’t targeted or niche enough.</p>
                    <p>We found that both the musicians and customers they are trying to attract want that Rock’n’Roll aesthetic. So let's give them that.</p>
                </div>
            </div>
        </div>
        <div class="cc_branding_images">
            <div class="cc_branding_image_flex">
                <div class="cc_branding_image_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/branding_image1_2x.png'); ?>)"></div>
                <div class="cc_branding_image_right">
                    <div id="lightbox_wrap20" class="lightbox_wrap lightboxwrap20" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                        <div id="lightbox20" class="lightbox lightbox20" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/branding_image2_2x.png'); ?>)"></div>
                        <div class="lightbox_open lightboxopen20" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                        <div class="lightbox_close lightboxclose20">Close</div>
                    </div>
                </div>
            </div>
            <div class="cc_full cc_full_upper">
                <div id="lightbox_wrap21" class="lightbox_wrap lightboxwrap21" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox21" class="lightbox lightbox21" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/branding_image3_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen21" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose21">Close</div>
                </div>
            </div>
        </div>
        <div class="cc_epiphany cc_epiphany_lower">
            <div class="cc_epiphany_left">
                <h1>Our second epiphany – you need to make and sell the right clothes.</h1>
                <p class="bold">Vintage inspired brands are a dime a dozen. What they needed was a unique approach. Focus on not just what you make but how you make it.</p>
            </div>
            <div class="cc_epiphany_right">
                <div class="cc_epiphany_right_upper">
                    <div class="cc_epiphany_image">
                        <img src="<?php echo get_theme_file_uri('/dist/images/cc/epiphany_lower.png'); ?>">
                    </div>
                </div>
                <div class="cc_epiphany_right_lower">
                    <p>Before they came to us they sold vintage inspired clothing. This simply was not enough.</p>
                    <p>Through brand strategy and consulting services, we helped them realize that imitating vintage clothing didn’t provide enough value to their target demographic.</p>
                    <p>Our solution? Source authentic vintage textitles and incorporate those textiles into new clothes.</p>
                </div>
            </div>
        </div>
        <div class="cc_full cc_full_lower" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/cc_full_2x.png'); ?>)"></div>
    </section>
</div>

<div class="container">
    <section class="cc_mockup_section">
        <div class="cc_mockup_intro">
            <h1 class="cc_mockup_intro_title">We needed a name to set the right mood.</h1>
            <div class="cc_mockup_intro_flex">
                <div class="cc_mockup_intro_flex_left">
                    <img src="<?php echo get_theme_file_uri('/dist/images/cc/cc_name.svg'); ?>">
                </div>
                <div class="cc_mockup_intro_flex_right">
                    <p class="bold cc_mockup_intro_flex_right_title">After creating and finding hundreds of names, we identified Copper Coyote as the strongest candidate for a few reasons.</p>
                    <div class="cc_mockup_intro_flex_right_lower">
                        <p class="cc_mockup_intro_flex_right_copy_1">Copper has strong associations with vintage items.</p>
                        <p class="cc_mockup_intro_flex_right_copy_2">Coyotes have a strong association with the southwest.</p>
                        <p class="cc_mockup_intro_flex_right_copy_3">Copper Coyote was simply a great way to set the right mood.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cc_mockup_lsat">
            <div class="cc_mockup_lsat_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/mockup_left_2x.png'); ?>)"></div>
            <div class="cc_mockup_lsat_right">
                <div class="cc_mockup_lsat_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/cc/mockup_right.svg'); ?>)"></div>
                <h1>A logo that provides tension.</h1>
                <p>A dead coyote was developed as the logo to intentionally provide tension with an otherwise poetic and soulful brand.</p>
                <p>We suggested remaining silent as to why the coyote is dead because it draws the viewer in to ask and think of the answer themself, thereby interacting with the brand even more.</p>
                <p>The real reason why he’s dead? It’s simply more Rock’n’Roll.</p>
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
