<?php
/**
 * Template Name: Notepad
 */
$check = carbon_get_the_post_meta('note_check');
$video = carbon_get_the_post_meta('note_video');
get_header('metalogo'); ?>

<div class="container">
    <div class="page_title">
        <h1><?php echo carbon_get_the_post_meta('page_title'); ?></h1>
    </div>

    <div class="notepad">
        <?php
            $notes = new WP_Query(array(
            'posts_per_page' => -1,
            'post_type' => 'note',
            ));

            while($notes->have_posts()) {
            $notes->the_post(); ?>
                <div class="note">
                    <div class="note_video">
                        <video class="notepad_vid" playsinline poster="<?php echo wp_get_attachment_url(carbon_get_the_post_meta('note_video')); ?>">
                            <source src="<?php echo wp_get_attachment_url(carbon_get_the_post_meta('note_video')); ?>" type="video/mp4">
                        </video>
                        <!--<div class="note_video_image" style="background-image:url(<?php echo wp_get_attachment_image_url(carbon_get_the_post_meta('note_video'), 'full'); ?>);"></div>-->
                    </div>  
                    <div class="note_upper">
                        <div class="note_upper_flex">
                            <p>IDEA</p>
                            <p>#<?php echo(rand(1,100)); ?></p>
                        </div>
                        <div class="note_img_rand">
                            <img src="<?php 
                                $string = ['https://anchovies.agency/wp-content/themes/anchovies/dist/images/notepad/circle.svg','https://anchovies.agency/wp-content/themes/anchovies/dist/images/notepad/open_circle.svg','https://anchovies.agency/wp-content/themes/anchovies/dist/images/notepad/triangle.svg', "https://anchovies.agency/wp-content/themes/anchovies/dist/images/notepad/3bar.svg", "https://anchovies.agency/wp-content/themes/anchovies/dist/images/notepad/mushroom.svg"];
                                $rand = rand(0,count($string)-1);
                                echo $string[$rand];
                            ?>">
                        </div>
                    </div>
                    <div class="note_content">
                        <?php echo wpautop(carbon_get_the_post_meta('note_text')); ?>
                    </div>
                </div>
        <?php } ?>
    </div>
</div>



<?php get_footer(); ?>
