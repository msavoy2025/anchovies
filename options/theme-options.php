<?php

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

Container::make( 'theme_options', __( 'Theme Options', 'crb' ) )
	->set_page_file( 'crbn-theme-options.php' )

	->add_tab( __( 'Footer', 'crb' ), array(
		Field::make( 'text', 'footer_logo_text', __( 'Text Under Logo', 'crb' ) ),
		Field::make( 'separator', 'btn_separator_footer', __( 'Denver', 'crb' ) ),
        Field::make( 'rich_text', 'footer_address', __( 'Address', 'crb' ) ),
        Field::make( 'text', 'crb_email', __( 'Email Address', 'crb' ) ),
		Field::make( 'separator', 'btn_separator_footer_2', __( 'Brooklyn', 'crb' ) ),
		Field::make( 'rich_text', 'footer_address_2', __( 'Address', 'crb' ) ),
        Field::make( 'text', 'crb_email_2', __( 'Email Address', 'crb' ) ),
		Field::make( 'separator', 'btn_separator_ft_right', __( 'Brooklyn', 'crb' ) ),
		Field::make( 'text', 'footer_right_intro_title', __( 'Footer Right Intro Title', 'crb' ) ),
		Field::make( 'text', 'footer_right_intro_text', __( 'Footer Right Intro Text', 'crb' ) ),
		Field::make( 'rich_text', 'footer_schedule_text', __( 'Schedule Text Block', 'crb' ) ),
        Field::make( 'text', 'footer_schedule_url', __( 'Schedule URL', 'crb' ) ),
	) )
	->add_tab( __( 'Misc', 'crb' ), array(
		Field::make( 'text', 'crb_google_maps_api_key', __( 'Google Maps API Key', 'crb' ) )
			->help_text( sprintf(
				__( 'You can generate your own key, by visiting %s and clicking on the "GET A KEY" button there.', 'crb' ),
				sprintf(
					'<a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">%s</a>',
					_x( 'Get API Key', 'Google Maps Docs', 'crb' )
				)
			) ),
		Field::make( 'header_scripts', 'crb_header_script', __( 'Header Script', 'crb' ) ),
		Field::make( 'footer_scripts', 'crb_footer_script', __( 'Footer Script', 'crb' ) ),
	) )

	->add_tab( __( 'Icons', 'crb' ), array( 
		Field::make( 'complex', 'crb_icons', __( 'Icons', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Icon', 'crb' ),
				'plural_name'   => __( 'Icons', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'text', 'icon_title', __( 'Icon Title', 'crb' ) )
					->set_width( 100 ),

				Field::make( 'image', 'icon_img', __( 'Icon Image', 'crb' ) )
					->set_width( 100 ),
			) )
			->set_header_template( '<%- icon_title %>' ),
	) );
