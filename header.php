<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=375, initial-scale=1">
<meta property="og:image" content="<?php echo get_theme_file_uri('/dist/images/Anchovies_Logo.gif') ?>" />
<meta property="og:video" content="<?php echo get_theme_file_uri('/dist/images/Anchovies_Logo.mp4') ?>" />
<meta property="og:title" content="Anchovies" />
<meta property="og:description" content="Anchovies is a creative agency unafraid to shake things up in order to fill the world with surprise and delight." />
<meta property="og:type" content="website" />
<link rel="shortcut icon" href="<?php echo get_theme_file_uri('/dist/images/logo_icon.svg'); ?>" type="image/x-icon">

<title>Anchovies</title>
<?php wp_head(); ?>
</head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW8NSSKFKT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZW8NSSKFKT');
</script>
<body <?php body_class(); ?> style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">

<header class="container">
    <div class="logo">
        <a href="/"><div class="logo_desktop"><img src="<?php echo get_theme_file_uri('/dist/images/Anchovies-white-full.svg'); ?>"></div></a>
        <a href="/"><div class="logo_mobile"><img src="<?php echo get_theme_file_uri('/dist/images/Anchovies-white-mark.svg'); ?>"></div></a>
    </div>
    <div class="nav_open">Menu</div>
    <div class="nav_wrap">
        <div class="nav_inner">
            <div class="nav_close hoverswap">Close</div>
            <?php
                wp_nav_menu( array(
                'theme_location' => 'header-menu',
                'container_class' => 'nav' ) );
            ?>
            <div class="nav_locations">
                <div class="nav_location">
                    <p class="bold">Denver</p>
                    <?php echo wpautop(carbon_get_theme_option('footer_address')); ?>
                </div>
                <div class="nav_location">
                    <p class="bold">Brooklyn</p>
                    <?php echo wpautop(carbon_get_theme_option('footer_address_2')); ?>
                </div>
            </div>
            <div class="nav_social">
                <p><a class="hoverswap" href="https://www.tiktok.com/@anchovies.agency?lang=en">tiktok</a></p>
                <p><a class="hoverswap" href="https://www.instagram.com/anchovies.agency/">instagram</a></p>
                <p><a class="hoverswap" href="mailto:Sean@anchovies.agency">email us</a></p>
            </div>
        </div>
    </div>
</header>
