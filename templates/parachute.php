<?php
/**
 * Template Name: Parachute
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
        <div id="lightbox_wrap25" class="lightbox_wrap lightboxwrap25" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox25" class="lightbox lightbox25" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen25" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose25">Close</div>
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
    <section class="para_lsab">
        <div class="para_lsab_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_lsab1_2x.png'); ?>)"></div>
        <div class="para_lsab_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_lsab2_2x.png'); ?>)"></div>
    </section>
</div>

<div class="container">
    <div class="para_ps_wrap">
        <h1 class="para_ps_intro">The first problem – they had a misleading name.</h1>
        <section class="para_ps">
            <div class="para_ps_flex">
                <div class="para_ps_flex_left">
                    <p class="bold">Parachute’s original name was Procan, which is a portmanteau of “Professional” and “Cannabis.”</p>
                    <p>Their original name aligned with their original focus – indoor cannabis management.</p>
                </div>
                <div class="para_ps_flex_right">
                    <p class="bold">They had grown beyond just cannabis farms. They were now targeting indoor farms of all varieties.</p>
                    <p>With a name solely aligned with cannabis, this turned off investors and businesses looking for more than just cannabis management.</p>
                </div>
            </div>
            <div class="para_ps_right">
                <h2>Your name matters.</h2>
                <h2>Great brand names are not descriptive of what the brand does.</h2>
            </div>
        </section>
    </div>
</div>

<div class="container">
    <div class="para_full_tall" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_full_tall_2x.png'); ?>)"></div>
</div>

<div class="container">
    <div class="para_ps_wrap para_ps_wrap_lower">
        <h1 class="para_ps_intro">The first solution – own the military mindset.</h1>
        <section class="para_ps">
            <div class="para_ps_flex">
                <div class="para_ps_flex_left">
                    <p class="bold">Before we could create or find them a new name, we had to first discover who they were.</p>
                    <p>What we discovered was that behind the scenes, the founders and most of the employees came from military backgrounds. This background experience was something they found very useful for their business.</p>
                </div>
                <div class="para_ps_flex_right">
                    <p class="bold">Having a military background is what differentiated them and made them who they are.</p>
                    <p>Fearful of being labeled a military company, we assured them that the focus wasn’t on the military but rather, the military mindset. This mindset just so happened to be what every grower was looking for.</p>
                </div>
            </div>
            <div class="para_ps_right">
                <h2>Don't make it complicated.</h2>
                <h2>Instead of crafting some phony existence out of thin air, Parachute owned who they are and what they value.</h2>
            </div>
        </section>
    </div>
</div>

<div class="container">
    <section class="para_mockup_imagery">
        <div class="para_full para_full_lower">
            <div id="lightbox_wrap26" class="lightbox_wrap lightboxwrap26" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox26" class="lightbox lightbox26" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_full_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen26" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose26">Close</div>
            </div>
        </div>
        <div class="para_lsab para_lsab_lower">
            <div class="para_lsab_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_lsab3_2x.png'); ?>)"></div>
            <h1 class="para_lsab_right para_lsab_right_text">The brand needed a pinch of youthful professionalism and a dash of military strategy.</h1>
        </div>
    </section>
</div>

<div class="container">
    <section class="para_mockup_section">
        <div class="para_mockup_intro">
            <div class="para_mockup_intro_img"><img src="<?php echo get_theme_file_uri('/dist/images/para/logo.svg'); ?>"></div>
            <div class="para_mockup_intro_flex">
                <div class="para_mockup_intro_flex_left">
                    <p class="bold">The logo was developed to be in tune with the military mindset. In other words, it had to be as efficient as possible.</p>
                    <p>A simple bold arc abstracted from a parachute's shape imbues the brand with a “can do attitude”. Other similar positive associations include a rainbow and the horizon of a dawning day.</p>
                </div>
                <div class="para_mockup_intro_flex_right">
                    <h2>Parachute – because we oversee farm management from a bird’s eye view and jump in to get the job done. </h2>
                    <h2>Success. At any cost.</h2>
                </div>
            </div>
        </div>
        <div class="para_full para_full_outro" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/para_mockup.png'); ?>)">
            <video id="player" autoplay loop muted playsinline>
                <source src="<?php echo get_theme_file_uri('/src/images/parachute_video.mp4') ?>" type="video/mp4" />
                <source src="<?php echo get_theme_file_uri('/src/images/parachute_video.webm') ?>" type="video/webm" />
            </video>
        </div>
        <div class="para_mockup_outro">
            <div class="para_mockup_outro_left">
                <h2 class="para_mockup_outro_left_upper">Green was avoided as a brand color because it is undifferentiated within their competitive space. Blue fit the bill with its subliminal associations with the sky.</h2>
                <h2 class="para_mockup_outro_left_lower">Topographic maps are used extensively throughout the identity to elicit not just military planning but land management as a whole.</h2>
            </div>
            <div class="para_mockup_outro_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/para/mockup_outro_2x.png'); ?>)"></div>
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
