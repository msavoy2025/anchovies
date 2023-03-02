<?php
/**
 * Template Name: Humanly
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
        <div id="lightbox_wrap27" class="lightbox_wrap lightboxwrap27" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox27" class="lightbox lightbox27" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen27" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose27">Close</div>
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
        <div class="para_lsab_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/humanly_lsab1_2x.png'); ?>)"></div>
        <div class="para_lsab_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/humanly_embossed_2x.png'); ?>)"></div>
    </section>
</div>

<div class="container">
    <div class="para_ps_wrap">
        <h1 class="para_ps_intro">A paradigm shift – they’re not renting space. They’re helping clients build their business.</h1>
        <section class="para_ps">
            <div class="para_ps_flex">
                <div class="para_ps_flex_left">
                    <p class="bold">Humanly initially thought that most of their value came from offering rental spaces.</p>
                    <p>While offering rent-on-demand is a novel idea, it doesn’t solve the more fundamental problem Humanly’s clients face – how do I grow my business?</p>
                </div>
                <div class="para_ps_flex_right">
                    <p class="bold">We helped Humanly realize that what they ought to do is holistically help wellness professionals succeed.</p>
                    <p>An office is just one piece of the puzzle. Humanly’s clients really needed resources, tools, and guidance to help them get patients and grow their practice.</p>
                </div>
            </div>
            <div class="para_ps_right">
                <h2>Offer solutions beyond the obvious.</h2>
                <h2>Boring brands solve boring problems. People fall in love with your brand when you solve the underlying problem.</h2>
            </div>
        </section>
    </div>
</div>

<div class="container">
    <div class="para_full_tall" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/humanly_full_tall_2x.png'); ?>)">
    </div>
</div>

<div class="container">
    <div class="humanly_branding_intro">
        <h1>Being a wellness professional is lonely.</h1>
        <h1>So, we advised Humanly to center their business and brand around helping each other out.</h1>
        <h1>Professionals helping professionals.</h1>
        <h1>Humans helping humans.</h1>
    </div>
</div>

<div class="container">
    <div class="para_full">
        <div id="lightbox_wrap28" class="lightbox_wrap lightboxwrap28" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox28" class="lightbox lightbox28" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/humanly_full2_2x.png'); ?>)"></div>
            <div class="lightbox_open lightboxopen28" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose28">Close</div>
        </div>
    </div>
    <div class="humanly_branding_imagery">
        <div class="humanly_branding_imagery_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/humanly_branding_left_2x.png'); ?>)"></div>
        <div class="humanly_branding_imagery_right">
            <h1>The human face – the most human part of us.</h1>
            <h1>The thing that greets us, disgusts us, and joys us.</h1>
            <h1>The human face – A perfect ingredient for this recipe.</h1>
        </div>
    </div>
</div>

<div class="container">
    <section class="para_mockup_section">
        <div class="para_mockup_intro">
            <div class="para_mockup_intro_img"><img src="<?php echo get_theme_file_uri('/dist/images/humanly/logo.svg'); ?>"></div>
            <div class="para_mockup_intro_flex">
                <div class="para_mockup_intro_flex_left">
                    <p class="bold">Humanly is all about positivity.</p>
                    <p>Because positivity was one of the main targets we identified in brand strategy, we designed the logo to be as unabashedly positive as possible.</p>
                </div>
                <div class="para_mockup_intro_flex_right">
                    <p class="bold">Make. It. Simple.</p>
                    <p>Simple shapes were employed not just because of their great utility in logo design, but also because of their ability to be implemented throughout the identity.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
        <section class="humanly_mockup_section">
            <div class="humanly_full" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/mockup1_2x.png'); ?>)"></div>
            <div class="humanly_mockup_mid">
                <div class="humanly_mockup_mid_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/mockup2_2x.png'); ?>)"></div>
                <div class="humanly_mockup_mid_right">
                    <p class="bold">Happiness is just one aspect to life after all.</p>
                    <p>A set of alternate faces were created to show the full range of the human face and human experience.</p>
                </div>
            </div>
            <div class="humanly_mockup_outro">
                <div class="humanly_mockup_outro_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/humanly/mockup3.png'); ?>)">
                    <video id="player" autoplay loop muted playsinline>
                        <source src="<?php echo get_theme_file_uri('/src/videos/Humanly.mp4') ?>" type="video/mp4" />
                        <source src="<?php echo get_theme_file_uri('/src/videos/Humanly.webm') ?>" type="video/webm" />
                    </video>
                </div>
                <div class="humanly_mockup_outro_right">
                    <p class="bold">Incorporating the wellness professionals directly into the mix.</p>
                    <p>Showing the very same faces one might encounter in Humanly provides that real human to human connection Humanly is all about.</p>
                    <p>It also offers an opportunity for Humanly’s clients to play a role in the brand.</p>
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
