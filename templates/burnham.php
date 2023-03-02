<?php
/**
 * Template Name: Burnham
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
            <div class="lightbox_open lightboxopen27" style="background-image:url('https://anchovies.agency/wp-content/themes/anchovies/dist/images/eye_light.svg');"></div>
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


<section class="burnham-full-section">
    <div class="container">
        <div class="burnham_full_1" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/burnham/todd.png'); ?>);">
            <div class="burnham_full_1_text">
                <h1>“Anchovies has been pivotal in the growth of my law firm and my personal brand.”</h1>
                <h1>Todd Burnham</h1>
            </div>
        </div>

        <div class="burnham_full_text">
          <h1>Because of our involvement with his law firm, Todd has stated we were pivotal in the following growth...</h1>
        </div>

        <div class="burnham_stats">
          <div class="burnham_stat">
            <div class="stat"><img src="<?php echo get_theme_file_uri('/dist/images/burnham/stat_arrow.svg'); ?>"><span>2x</span></div>
            <h2 class="stat_text">Number of employees doubled.</h2>
          </div>
          <div class="burnham_stat">
            <div class="stat"><img src="<?php echo get_theme_file_uri('/dist/images/burnham/stat_arrow.svg'); ?>"><span>1.7x</span></div>
            <h2 class="stat_text">Number of locations have nearly doubled.</h2>
          </div>
          <div class="burnham_stat">
            <div class="stat"><img src="<?php echo get_theme_file_uri('/dist/images/burnham/stat_arrow.svg'); ?>"><span>22%</span></div>
            <h2 class="stat_text">The bounce rate decreased  by 22 percent.</h2>
          </div>
        </div>

        <div class="burnham_full_2">
            <video id="player" autoplay loop muted playsinline>
                <source src="<?php echo get_theme_file_uri('/src/images/burnham/TB.mp4'); ?>" type="video/mp4" />
                <source src="<?php echo get_theme_file_uri('/src/images/burnham/TB.webm'); ?>" type="video/webm" />
            </video>
        </div>
    </div>
</section>

<section class="design-section">
    <div class="container">
        <div class="design_intro">
          <div class="design_intro_left">
              <h1>When we design an identity, we are fully aware of what people expect to see within a given industry.</h1>
              <h1>It is our job to give people what they expect while providing something unexpected at the same time.</h1>
              <h1>It is this unexpected element, this shock if you will, that makes a brand profitable and memorable.</h1>
          </div>
          <div class="design_intro_right"><img src="<?php echo get_theme_file_uri('/dist/images/burnham/sparkler.svg'); ?>);"></div>
        </div>

        <div class="burnham_full_4">
            <img src="<?php echo get_theme_file_uri('/dist/images/burnham/tb_wallad_mockup.svg'); ?>">
        </div>

        <div class="design_flex">
          <div class="design_flex_left">
              <img src="<?php echo get_theme_file_uri('/dist/images/burnham/burnham_card_mockup.svg'); ?>">
          </div>
          <div class="design_flex_right">
              <img class="drive_mockup" src="<?php echo get_theme_file_uri('/dist/images/burnham/burnham_drive_mockup.svg'); ?>);">
              <div class="design_flex_right_text">
                  <h1>In this case, people expect a lawyer to be upscale.</h1>
                  <h1>The unexpected element came from Todd himself – his love of sports.</h1>
              </div>
          </div>
        </div>

        <div class="design_flex design_flex_2">
          <div class="design_flex_left">
            <h1>Whether you’re trying to be a great lawyer, athlete, or bartender, Todd believes that any path in life can be better understood through the lens of sports.</h1>
          </div>
          <div class="design_flex_right inner_flex">
              <div class="design_flex_inner_left">
                <img src="<?php echo get_theme_file_uri('/dist/images/burnham/shoes.svg'); ?>);">
                <p class="bold">Inspired by sports brands.</p>
                <p>Taking our inspiration directly from Nike made the design phase that much easier.</p>
                <p>We used the same fonts as Nike, the same colors, and were heavily inspired by various advertisments in terms of composition.</p>
              </div>
              <div class="design_flex_inner_right">
                <img src="<?php echo get_theme_file_uri('/dist/images/burnham/tennis_ball.svg'); ?>);">
                <p class="bold">The psychology of sports.</p>
                <p>Sports asks of you to never give up, always aim high, and accept the fact that you may not be the greatest of all time.</p>
                <p>Todd credits these lessons among others for his success in growing his law firm and his life.</p>
              </div>
          </div>
        </div>

        <div class="burnham_full_4">
            <video id="player" autoplay loop muted playsinline>
                <source src="<?php echo get_theme_file_uri('/src/images/burnham/BurnhamLaw.mp4'); ?>" type="video/mp4" />
                <source src="<?php echo get_theme_file_uri('/src/images/burnham/BurnhamLaw.webm'); ?>" type="video/webm" />
            </video>
        </div>
    </div>
</section>

<section class="mockup-section">
    <div class="container">

        <div class="burnham_mockup_intro">
            <h1>When it came time to work on Todd’s peronsal brand, the ground work had already been laid.</h1>
            <h1>So we cranked up the sports attitude to eleven.</h1>
        </div>

        <div class="burnham_mockup_full burnham_mockup_full_1">
            <img src="<?php echo get_theme_file_uri('/dist/images/burnham/tb_street_mockup.svg'); ?>">
        </div>

        <div class="burnham_mockup_full burnham_mockup_full_2">
            <img src="<?php echo get_theme_file_uri('/dist/images/burnham/tb_presentation.svg'); ?>">
        </div>

        <div class="burnham_mockup_full burnham_mockup_full_3">
            <img src="<?php echo get_theme_file_uri('/dist/images/burnham/tb_wall.svg'); ?>">
        </div>

        <div class="mockup_flex">
          <div class="mockup_flex_left">
              <div class="mockup_flex_left_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/burnham/tb_card_mockup.png'); ?>);"></div>
          </div>
          <div class="mockup_flex_right">
              <h1>X’s and O’s.<br>For playmaking.<br>Not for love.</h1>
              <div class="mockup_flex_right_text">
                  <p class="bold">Tape</p>
                  <p>We incorporated tape into the identity, and Todd’s logo, to represent the idea that no matter how broken you are, it’s never too late to put your life all back together.</p>
                  <p class="bold">X’s and O’s</p>
                  <p>Further signaling Todd’s connection to sports, we incorporated the playmaking-drawings coaches use to guide their team to victory.</p>
                  <p class="bold">Adding Attitude</p>
                  <p>We increased the attitude of the brand through kinetic components such as ripped paper and a gritty texture. We’ve never ripped paper slowly have you?</p>
              </div>
          </div>
        </div>

    </div>
</section>

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
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
