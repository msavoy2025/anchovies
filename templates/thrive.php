<?php
/**
 * Template Name: Thrive
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
        <div id="lightbox_wrap14" class="lightbox_wrap lightboxwrap14" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox14" class="lightbox lightbox14" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen14" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose14">Close</div>
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
    <section class="thrive_branding_section">
        <div class="thrive_branding_images">
            <div class="thrive_branding_images_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_branding_tall_2x.png'); ?>)"></div>
            <div class="thrive_branding_images_right">
                <div class="thrive_branding_image" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_branding_short_2x.png'); ?>)"></div>
                <p>An abstract mark was developed to stand out in a field of representational logos. This lets people know that we are bold and we are not traditional.</p>
                <p>Ancient monoliths, exclamation points, and the work of Ellsworth Kelly served as inspiration.</p>
                <p>We advised them to drop “Preschool” from their name. They agreed.</p>
            </div>
        </div>
        <div class="thrive_branding_lower">
            <div class="thrive_branding_content">
                <h1>Our idea – ignore the kids, focus on the parents.</h1>
                <div class="thrive_branding_content_flex">
                    <div class="thrive_branding_content_left">
                        <p class="bold">Most preschools look like they are trying to attract children, but this is a mistake.</p>
                        <p>Let's be honest, children, especially preschoolers, don’t care about brands. And if they do, do they really have the best taste?</p>
                    </div>
                    <div class="thrive_branding_content_right">
                        <p class="bold">We created a brand for parents. They are the ones paying the bills after all.</p>
                        <p>We created a brand for the non-traditional parent that spoke their language while still being playful. </p>
                    </div>
                </div>
            </div>
            <div class="thrive_branding_lower_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_branding_content_2x.png'); ?>)"></div>
        </div>
    </section>
</div>

<div class="container">
    <section class="thrive_mockup_section">
        <h1 class="thrive_mockup_intro">The identity we built, featuring shapes cut out of paper, embodied the playfulness that Thrive had been seeking.</h1>
        <div class="thrive_mockup_mobile">
            <p>While Thrive may not be a traditional preschool, their brand still had to communicate their goal of educating children.</p>
            <p>Going too untraditional would have just alienated the client and their customers.</p>
        </div>
        <div class="thrive_full" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_mockup_full.png'); ?>)">
            <video id="player" autoplay loop muted playsinline>
                <source src="<?php echo get_theme_file_uri('/src/videos/Thrive_Home.mp4') ?>" type="video/mp4" />
                <source src="<?php echo get_theme_file_uri('/src/videos/Thrive_Home.webm') ?>" type="video/webm" />
            </video>
        </div>
        <div class="thrive_mockup_flex">
            <div class="thrive_mockup_flex_left">
                <p class="bold">Examples of the identity on the twelve page website we designed and coded for them.</p>
            </div>
            <div class="thrive_mockup_flex_right">
                <p>While Thrive may not be a traditional preschool, their brand still had to communicate their goal of educating children.</p>
                <p>Going too untraditional would have just alienated the client and their customers.</p>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="thrive_images_section">
        <div class="thrive_images_intro">
            <div class="thrive_images_intro_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_images_intro_2x.png'); ?>)"></div>
            <div class="thrive_images_intro_right">
                <h1>We incorporated storytelling and a dose of reality into the compositions.</h1>
                <p class="bold">The image on the left means...</p>
                <p>In order to fix our broken world (the broken pot), we must cultivate humanity, but we cannot do it alone (the boy and girl holding hands).</p>
                <p>We must strive to succeed with love (the heart), wisdom (the sun), and hard work (the hand).</p>
            </div>
        </div>
        <div class="thrive_images_mobile">
            <p>Incorporating a handwritten typeface, Adobe Ernie, we were able to add elements of naturalism and humanity – key components of Thrive’s educational philosophy.</p>
        </div>
        <div class="thrive_full">
            <div id="lightbox_wrap15" class="lightbox_wrap lightboxwrap15" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox15" class="lightbox lightbox15" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_mockup_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen15" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose15">Close</div>
            </div>
        </div>
        <div class="thrive_images_outro">
            <div class="thrive_images_outro_left" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/thrive/thrive_images_outro_2x.png'); ?>)"></div>
            <div class="thrive_images_outro_right">
                <p>Incorporating a handwritten typeface, Adobe Ernie, we were able to add elements of naturalism and humanity – key components of Thrive’s educational philosophy.</p>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="thrive_partnership_section">
        <h1>Our partnership has been extensive and ongoing.</h1>
        <div class="thrive_pr_block">
            <h1>Murals</h1>
            <h1>Tuition Schedules</h1>
            <h1>Signage</h1>
            <h1>Pamplets</h1>
            <h1>Brochures</h1>
        </div>
        <div class="thrive_pr_block">
            <h1>Social Media</h1>
            <h1>Business Cards</h1>
            <h1>Flyers</h1>
            <h1>Videography</h1>
            <h1>And More...</h1>
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
