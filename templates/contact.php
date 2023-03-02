<?php
/**
 * Template Name: Contact
 */


get_header('metalogo'); ?>

<div class="contactWrap">
    <div class="container contact-page">
        <div class="contact_absolute">
            <div class="contact_left">
                <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
                <div class="contact_left_mid">
                    <div class="contact_left_flex_left">
                        <p class="bold">Brooklyn</p>
                        <?php echo wpautop(carbon_get_theme_option('footer_address_2')); ?>
                    </div>
                    <div class="contact_left_flex_right">
                        <p class="bold">Denver</p>
                        <?php echo wpautop(carbon_get_theme_option('footer_address')); ?>
                    </div>
                </div>
                <div class="contact_left_lower">
                    <p><a class="bold hoverswap" href="mailto:Sean@anchovies.agency">Email Us</a> or <!-- Calendly link widget begin -->
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
                    <a class="bold hoverswap" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/wondercrate/phone?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ebe7dc&text_color=333333&primary_color=1c1c1c'});return false;">Schedule a meeting</a>
                    <!-- Calendly link widget end --> <br>to get started</p>
                </div>
            </div>
            <div class="contact_right">
                <h1>Don't hire us...</h1>
                <div class="contact_right_lower">
                    <div class="contact_right_flex_left">
                        <?php echo wpautop(carbon_get_the_post_meta('contact_lower_left')); ?>
                    </div>

                    <div class="contact_right_flex_right">
                        <?php echo wpautop(carbon_get_the_post_meta('contact_lower_right')); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--<div class="cursor cursor-bee">
  <img width="20" height="20" src="<?php echo get_theme_file_uri('/src/images/black_square.jpg'); ?>" alt="">
</div>
<div class="cursor cursor-eye">
  <img width="20" height="20" src="<?php echo get_theme_file_uri('/src/images/offwhite_square.jpg'); ?>" alt="">
</div>-->
<?php wp_footer(); ?>
