<?php
/**
 * Template Name: GDBD
 * Template Post Type: work
 */
$work_hero_height = carbon_get_the_post_meta('work_hero_height');
get_header('dark'); ?>

<div class="test">

<div class="container">
    <div class="page_title">
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>
</div>

<!--
<div class="container">
    <div class="lightbox_example_open">
        <p class="bold">tap any image</p>
        <p>with an eye in the corner to zoom in</p>
        <button class="btn example_btn">try it out</button>
        <div class="lightbox_open" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
    </div>
    <div class="lightbox_example" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
        <div class="example_inner">
            <p class="bold">move the image left & right</p>
            <p>using your thumb.</p>
            <p class="bold example_space">when you're all done</p>
            <p>click close in the top right.</p>
            <button class="btn example_btn">got it</button>
        </div>
        <div class="lightbox_close example_close">Close</div>
    </div>
</div>
-->
<div class="container">
    <div class="work_hero <?php if ( !empty( $work_hero_height ) ) : ?>work_hero_short<?php endif ?>">
        <div id="lightbox_wrap5" class="lightbox_wrap lightboxwrap5" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox5" class="lightbox lightbox5" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('work_hero_img'), 'full'); ?>);"></div>
            <div class="lightbox_open lightboxopen5" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose5">Close</div>
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
    <div class="gdbd_lsat">
        <div class="gdbd_lsat_left">
            <div id="lightbox_wrap1" class="lightbox_wrap lightboxwrap1" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div  class="lightbox lightbox1" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image2_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen1" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose1">Close</div>
            </div>
        </div>

        <div class="gdbd_lsat_right">
            <div class="gdbd_lsat_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image4_2x.png'); ?>)"></div>
            <p>A mark was developed to symbolize these strong children. Even though their bodies are often sore, they've got their heads on straight with confidence and positivity.</p>
        </div>

    </div>
    <div class="gdbd_full">
        <div id="lightbox_wrap2" class="lightbox_wrap lightboxwrap2" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
            <div id="lightbox2" class="lightbox lightbox2" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image3_2x.png'); ?>)"></div>
            <div class="lightbox_open lightboxopen2" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye.svg'); ?>)"></div>
            <div class="lightbox_close lightboxclose2">Close</div>
        </div>
    </div>

    <div class="gdbd_lsat_right gdbd_lsat_right_mobile">
        <div class="gdbd_lsat_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image4_2x.png'); ?>)"></div>
        <p>A mark was developed to symbolize these strong children. Even though their body is often sore, they’ve got their head on straight with confidence and positivity.</p>
    </div>
</div>


<div class="container">
    <section class="gdbd_help_section">
        <h1 class="gdbd_help_title">Making a name for those who need help now.</h1>
        <div class="gdbd_help">
            <div class="gdbd_help_left">
                <p>APBD Research Foundation</p>
                <p>Association for Creatine Deficiencies</p>
                <p>CLOVES Syndrome Community</p>
                <p>Cure CMD</p>
                <p>Congenital Hyperinsulinism International</p>
                <p>Cure HHT</p>
                <p>CureGRIN Foundation</p>
                <p>DADA2 Foundation</p>
                <p>Fibrolamellar Cancer Foundation</p>
                <p class="bold">Good Days Bad Days</p>
                <p>Li-Fraumeni Syndrome Association</p>
                <p>NEC Society</p>
                <p>TESS Research Foundation</p>
                <p>The EHE Foundation</p>
            </div>
            <div class="gdbd_help_right">
                <p>In a world of names revolving around the disease that each non-profit is helping to eradicate, something different was sorely needed.</p>
                <p class="bold">Our approach? <span>Just be honest.</span></p>
                <p>Good Days Bad Days comes from the fact that not every day for these kids is a good one and not every day is a bad one – it’s sometimes good and sometimes bad.</p>
                <p>A unique name attracts attention and attracts donations. <span>A unique names helps these kids.</span></p>
            </div>
        </div>
    </section>
</div>


<div class="container">
    <section class="stencil_art_section">
        <div class="stencil_art_upper">
            <div class="stencil_upper_left">
                <h1>To pull at the heart strings, an identity revolving around the daily life of a girl named Amelia was developed.</h1>
            </div>
            <div class="stencil_upper_right" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image8_2x.png'); ?>)">
            </div>
        </div>
        <div class="stencil_art_lower">
            <div class="stencil_lower_left">
                <div class="stencil_lower_left_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image5_2x.png'); ?>)"></div>
                <p class="bold">Various Early illustration explorations</p>
            </div>
            <div class="stencil_lower_right_flex">
                <div class="stencil_flex_left">
                    <div class="stencil_flex_left_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image6_2x.png'); ?>)"></div>
                    <p>A cast of characters was added to Amelia's journey, giving her the strength she needs to survive her bad days, and the friends that she deserves to celebrate her good ones.</p>
                </div>
                <div class="stencil_flex_right">
                    <div class="stencil_flex_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image7_2x.png'); ?>)"></div>
                    <p>As with all explorations, most of what we explored never ended up being used, but that’s the point of exploration – to see what works.</p>
                </div>
            </div>
        </div>
    </section>
</div>


<div class="container">
    <section class="gdbd_mockup_section">
        <div class="gdbd_mockup_full">
            <div id="lightbox_wrap3" class="lightbox_wrap lightboxwrap3" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                <div id="lightbox3" class="lightbox lightbox3" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image10_2x.png'); ?>)"></div>
                <div class="lightbox_open lightboxopen3" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                <div class="lightbox_close lightboxclose3">Close</div>
            </div>
        </div>
        <div class="gdbd_mockup_flex">
            <div class="gdbd_mockup_left">
                <div id="lightbox_wrap4" class="lightbox_wrap lightboxwrap4" style="background-color: <?php echo carbon_get_the_post_meta('bg_color'); ?>;">
                    <div id="lightbox4" class="lightbox lightbox4" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd/image9_2x.png'); ?>)"></div>
                    <div class="lightbox_open lightboxopen4" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/eye_light.svg'); ?>)"></div>
                    <div class="lightbox_close lightboxclose4">Close</div>
                </div>
            </div>
            <div class="gdbd_mockup_right">
                <div class="gdbd_mockup_right_img" style="background-image:url(<?php echo get_theme_file_uri('/dist/images/gdbd_mockup3.png'); ?>)"></div>
                <p>Staying true to our commitment of honesty, we created these buttons to remind people that it’s okay to have a bad day.</p>
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
                    <p>Next Project</p>
                    <?php next_post_link( '<strong>%link</strong>' ); ?>
                </div>
            </div>
        </div>
    </section>
</div>

</div> <!-- test close -->
<?php get_footer(); ?>
