<footer>
    <div class="container">
        <div class="footer_content">
            <div class="footer_inner_left">
                <div class="footer_logo">
                    <img src="<?php echo get_theme_file_uri('/dist/images/logo.svg'); ?>">
                    <p><?php echo carbon_get_theme_option('footer_logo_text'); ?></p>
                </div>
                <div class="footer_contacts">
                    <div class="footer_contact">
                        <p class="bold">Brooklyn</p>
                        <?php echo wpautop(carbon_get_theme_option('footer_address_2')); ?>
                        <a class="footer_absolute hoverswap" href="mailto:<?php echo carbon_get_theme_option('crb_email_2'); ?>">EMAIL BROOKLYN</a>
                    </div>
                    <div class="footer_contact">
                        <p class="bold">Denver</p>
                        <?php echo wpautop(carbon_get_theme_option('footer_address')); ?>
                        <a class="footer_absolute hoverswap" href="mailto:<?php echo carbon_get_theme_option('crb_email'); ?>">EMAIL DENVER</a>
                    </div>
                </div>
            </div>

            <div class="footer_inner_right">
                <div class="footer_right_intro">
                    <h1><?php echo carbon_get_theme_option('footer_right_intro_title'); ?></h1>
                    <p><?php echo carbon_get_theme_option('footer_right_intro_text'); ?></p>
                </div>
                <div class="footer_schedule">
                    <?php echo wpautop(carbon_get_theme_option('footer_schedule_text')); ?>
                    <!--<a class="footer_absolute" href="<?php echo carbon_get_theme_option('footer_schedule_url'); ?>">SCHEDULE A MEETING</a>-->
                    <!-- Calendly link widget begin -->
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
                    <script defer="defer" src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
                    <a class="footer_absolute hoverswap" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/wondercrate/phone?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ebe7dc&text_color=333333&primary_color=1c1c1c'});return false;">SCHEDULE A MEETING</a>
                    <!-- Calendly link widget end -->
                </div>
                <div class="footer_animation"><img src="<?php echo get_theme_file_uri('/dist/images/footer.gif'); ?>"></div>
            </div>
        </div>
    </div>
</footer>
<!--<div class="cursor cursor-bee">
  <img width="20" height="20" src="<?php echo get_theme_file_uri('/src/images/black_square.jpg'); ?>" alt="">
</div>
<div class="cursor cursor-eye">
  <img width="20" height="20" src="<?php echo get_theme_file_uri('/src/images/offwhite_square.jpg'); ?>" alt="">
</div>-->
<?php wp_footer();?>
</body>
</html>
