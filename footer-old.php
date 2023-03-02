<footer>
    <div class="container">
        <div class="footer_content">
            <div class="footer_inner_left">
                <div class="footer_image">
                    <img src="<?php echo get_theme_file_uri('/dist/images/footer_image.svg'); ?>">
                </div>
                <div class="footer_logo">
                    <img src="<?php echo get_theme_file_uri('/dist/images/logo.svg'); ?>">
                    <p><?php echo carbon_get_theme_option('footer_logo_text'); ?></p>
                </div>
            </div>

            <div class="footer_inner_right">
                <div class="footer_contact">
                    <?php echo wpautop(carbon_get_theme_option('footer_address')); ?>
                    <a class="footer_absolute" href="mailto:<?php echo carbon_get_theme_option('crb_email'); ?>"><?php echo carbon_get_theme_option('crb_email'); ?></a>
                </div>
                <div class="footer_schedule">
                    <?php echo wpautop(carbon_get_theme_option('footer_schedule_text')); ?>
                    <a class="footer_absolute" href="<?php echo carbon_get_theme_option('footer_schedule_url'); ?>">Schedule A meeting</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer();?>
</body>
</html>
