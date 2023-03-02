<?php
/**
 * Template Name: Landing
 */


get_header('metalogo'); ?>

<div class="landing_wrap">
    <div class="container">
        <section class="landing">
            <div class="landing_web">
                <h2>Web Agency</h2>
                <h1>Wondercrate </br> 2012-2021</h1>
            </div>
            <div class="landing_branding">
                <div class="landing_branding_intro">
                    <h2>Branding Agency</h2>
                    <h1>Anchovies </br> 2022-???</h1>
                </div>
                <p>On January 1st, 2022 we changed our name from WonderCrate to Anchovies to better reflect our principles and goals.</p>
                <p>WonderCrate was awesome while it lasted. We made some awesome websites under that name and will continue to create awesome websites, but behind every great website is a great brand and great branding is what Anchoives does best.</p>
            </div>
            <div class="landing_link">
                <a href="https://anchovies.agency/">
                    <h2>Enter Anchovies Website</h2>
                    <div class="landing_link_arrow"><img src="<?php echo get_theme_file_uri('/dist/images/arrow_right_matchbg.svg'); ?>"></div>
                </a>
            </div>
        </section>
    </div>
</div>

<?php wp_footer(); ?>
