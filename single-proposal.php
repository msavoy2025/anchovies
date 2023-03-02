<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:image" content="<?php echo get_theme_file_uri('/dist/images/Anchovies_Logo.gif') ?>" />
<meta property="og:title" content="Anchovies" />
<meta property="og:description" content="Anchovies is a creative agency unafraid to shake things up in order to fill the world with surprise and delight." />
<meta property="og:type" content="website" />
<link rel="shortcut icon" href="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>" type="image/x-icon">
<link rel="stylesheet" href="https://use.typekit.net/rmt2jjn.css">
<title>Anchovies</title>
<?php wp_head(); ?>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/utils/Draggable.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW8NSSKFKT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZW8NSSKFKT');
</script>
<body <?php body_class(); ?>>

<?php

while(have_posts()) {
    the_post();
    if (post_password_required()) { ?>
    <div class="proposal_password_header">
      <div class="container">
          <section class="proposal_header">
              <div class="proposal_header_left">
                  <div class="logo proposal_logo">
                      <a href="/"><div class="logo_desktop"><img class="prop_logo_desk" src="<?php echo get_theme_file_uri('/dist/images/Anchovies-black-full.svg'); ?>"></div></a>
                      <a href="/"><div class="logo_mobile"><img class="prop_logo_mob" src="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>"></div></a>
                      <div class="proposal_mobile_address"><?php echo wpautop(carbon_get_theme_option('footer_address')); ?></div>
                      <img class="proposal_stamp" src="<?php echo get_theme_file_uri('/dist/images/proposal_stamp.svg'); ?>">
                  </div>


              </div>
              <div class="proposal_header_right">
                  <div class="proposal_desktop_address"><?php echo wpautop(carbon_get_theme_option('footer_address')); ?></div>
              </div>
          </section>
      </div>

        <div class="container">
            <div class="password_container">
                <h1><?php the_title(); ?></h1>
                <?php echo get_the_password_form(); ?>
            </div>
        </div>
    </div>
<?php }

  else { ?>



<div class="container">
    <section class="proposal_header">
        <div class="proposal_header_left">
            <div class="logo proposal_logo">
                <a href="/"><div class="logo_desktop"><img src="<?php echo get_theme_file_uri('/dist/images/Anchovies-black-full.svg'); ?>"></div></a>
                <a href="/"><div class="logo_mobile"><img src="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>"></div></a>
                <div class="proposal_mobile_address"><?php echo wpautop(carbon_get_theme_option('footer_address')); ?></div>
                <img class="proposal_stamp" src="<?php echo get_theme_file_uri('/dist/images/proposal_stamp.svg'); ?>">
            </div>

            <div class="proposal_header_left_lower">
                <h1><?php the_title(); ?></h1>
                <div class="proposal_header_left_flex">
                    <div class="header_ingredients">
                        <p class="bold">Solutions</p>
                        <?php echo wpautop(carbon_get_the_post_meta('proposal_ingredients')); ?>
                    </div>
                    <div class="header_instructions">
                        <p class="bold">Overview</p>
                        <?php echo wpautop(carbon_get_the_post_meta('proposal_instructions')); ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="proposal_header_right">
            <div class="proposal_desktop_address"><?php echo wpautop(carbon_get_theme_option('footer_address')); ?></div>
            <div class="proposal_header_right_lower">
                <p class="bold">this proposal valid thru</p>
                <p class="proposal_valid"><span><?php echo carbon_get_the_post_meta('proposal_valid_month') ?></span>/<span><?php echo carbon_get_the_post_meta('proposal_valid_day') ?></span>/<span><?php echo carbon_get_the_post_meta('proposal_valid_year') ?></span></p>
                <a href="<?php echo carbon_get_the_post_meta('proposal_start_btn_url') ?>"><button class="btn">Start My Project</button></a>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <div class="proposal_fullwidth" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('proposal_full_1'), 'full'); ?>);"></div>
    <div class="proposal_underImage">
        <?php echo wpautop(carbon_get_the_post_meta('proposal_small_text')); ?>
        <img src="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>">
    </div>
</div>

<div class="container">
    <section class="ps_intro">
        <?php echo wpautop(carbon_get_the_post_meta('proposal_large_text')); ?>
    </section>
</div>


<div class="container">
    <section class="proposal_ps">
        <div class="ps_left">
            <?php echo carbon_get_the_post_meta('ps_intro'); ?>
        </div>
        <div class="ps_right">
            <div class="ps_header">
                <p class="bold">problem</p>
                <p class="bold">solution</p>
            </div>

                <?php $problems = carbon_get_the_post_meta('crb_ps') ?>
                <?php foreach ( $problems as $problem ) : ?>
                    <div class="ps">
                        <div class="problem"><?php echo wpautop($problem['ps_problem']); ?></div>
                        <div class="solution"><?php echo wpautop($problem['ps_solution']); ?></div>
                    </div>
                <?php endforeach ?>

        </div>
    </section>
</div>


<div class="container">
    <div class="proposal_fullwidth proposal_fullwidth2" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('proposal_full_2'), 'full'); ?>);"></div>
    <div class="proposal_underImage proposal_underImage2">
        <?php echo wpautop(carbon_get_the_post_meta('proposal_small_text_2')); ?>
        <img src="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>">
    </div>
</div>

<div class="container">
    <section class="ps_intro ps_intro2">
        <?php echo wpautop(carbon_get_the_post_meta('proposal_large_text_2')); ?>
    </section>
</div>

<div class="container">
    <section class="ingredient_section">
        <div class="ingredients_header">
            <p class="bold">solution</p>
            <p class="bold">dollar amount</p>
            <p class="bold">estimated timeline*</p>
        </div>
        <div class="ingredients">
            <?php $ingredients = carbon_get_the_post_meta('crb_ingredients') ?>
            <?php foreach ( $ingredients as $ingredient ) : ?>
                <div class="ingredient">
                    <div class="ingredient_content">
                        <h2><?php echo esc_html($ingredient['ingredient_title']); ?></h2>
                        <div class="mobile_ingredients">
                            <p class="bold"><?php echo esc_html($ingredient['ingredient_price']); ?> and <?php echo esc_html($ingredient['ingredient_time']); ?></p>
                        </div>
                        <p><?php echo esc_html($ingredient['ingredient_content']); ?></p>
                        <div class="ingredient_includes">
                            <?php echo wpautop($ingredient['ingredient_includes']); ?>
                        </div>
                    </div>
                    <div class="ingredient_price">
                        <p class="bold">$<?php echo  number_format( floatval( $ingredient['ingredient_price'] ), 0, '.', ','); ?></p>
                    </div>
                    <div class="ingredient_time">
                        <p><?php echo esc_html($ingredient['ingredient_time']); ?></p>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
        <div class="ingredients_totals">
            <div class="ingredients_totals_top">
                <h2>Everything Combined</h2>

                <?php
                    $total = 0;
                    foreach($ingredients as $ingredient) {
                        $total += floatval($ingredient['ingredient_price']);
                        //var_dump($ingredient['ingredient_price']);
                    }
                ?>
                <p class="bold">$<?php echo  number_format( floatval( $total ), 0, '.', ','); ?></p>
                <p><?php echo carbon_get_the_post_meta('ingredients_time'); ?></p>
            </div>
            <div class="ingredients_totals_bot">
                <div class="ingredients_totals_titles">
                    <p class="bold">solutions</p>
                    <?php foreach ( $ingredients as $ingredient ) : ?>
                        <p><?php echo esc_html($ingredient['ingredient_title']); ?></p>
                    <?php endforeach ?>
                </div>
                <div class="ingredients_totals_prices">
                    <p class="bold">dollar amount</p>
                    <?php foreach ( $ingredients as $ingredient ) : ?>
                        <p>$<?php echo  number_format( floatval( $ingredient['ingredient_price'] ), 0, '.', ','); ?></p>
                    <?php endforeach ?>
                </div>
                <div class="ingredients_totals_timeline">
                    <p class="bold">estimated timeline</p>
                    <p>The events in the timelines are incredibly sensitive to any small change or hiccup.</p>
                    <p>Thinking in exact dates is discouraged.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section class="proposal_links_section">
        <h1>Here’s a list of links we’ve either talked about before or are otherwise worth sharing.</h1>
        <div class="proposal_links_header">
            <p class="bold">item</p>
            <p class="bold">what this is</p>
            <p class="bold">why we're sharing this</p>
            <p class="bold">the link</p>
        </div>
        <div class="proposal_links">
            <?php $links = carbon_get_the_post_meta('crb_links') ?>
            <?php foreach ( $links as $link ) : ?>
                <div class="proposal_link_info">
                    <div class="proposal_title">
                        <h2><?php echo esc_html($link['link_item']); ?></h2>
                    </div>
                    <div class="proposal_what">
                        <?php echo wpautop($link['link_what']); ?>
                    </div>
                    <div class="proposal_why">
                        <?php echo wpautop($link['link_why']); ?>
                    </div>
                    <div class="proposal_link">
                        <a href="<?php echo esc_html($link['link_url']); ?>">
                            <span>view link</span><img src="<?php echo get_theme_file_uri('/dist/images/arrow_right_circled.svg'); ?>">
                        </a>
                    </div>
                </div>
            <?php endforeach ?>
        </div>
    </section>
</div>

<div class="fullwidth4_wrap">
    <div class="container">
        <div class="proposal_fullwidth proposal_fullwidth4" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/little_fish.svg'); ?>);"></div>
    </div>
</div>

<div class="container">
    <section class="cta-section">
        <div class="cta_left">
            <h1><?php echo carbon_get_the_post_meta('proposal_cta_title'); ?></h1>
            <div class="proposal_header_right_lower proposal_header_right_lower_mobile">
                <p class="bold">this proposal valid thru</p>
                <p class="proposal_valid"><span><?php echo carbon_get_the_post_meta('proposal_valid_month') ?></span>/<span><?php echo carbon_get_the_post_meta('proposal_valid_day') ?></span>/<span><?php echo carbon_get_the_post_meta('proposal_valid_year') ?></span></p>
            </div>
        </div>
        <div class="cta_right">
            <p class="large_text"><?php echo carbon_get_the_post_meta('proposal_cta_text') ?></p>
            <p class="bold">When you're ready to solve your problems...</p>
            <a href="<?php echo carbon_get_the_post_meta('proposal_cta_btn_url') ?>"><button class="btn"><?php echo carbon_get_the_post_meta('proposal_cta_btn_text') ?></button></a>
        </div>
    </section>
</div>

<?php wp_footer();?>

<?php  }
}
?>
