<?php

use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

$link_target_options = array(
	'_self'  => 'the same window',
	'_blank' => 'a new tab'
);

//Page Intro
Container::make( 'post_meta', __( 'Intro', 'crb' ) )
	->where( 'post_type', '=', 'page' )
	->or_where( 'post_type', '=', 'work' )
	->add_fields( array(
		Field::make( 'text', 'bg_color', __( 'Background Color', 'crb' ) )
      		->set_width(100)
			->set_attribute( 'placeholder', '#B7B6A5' )
			->help_text( __( 'Set a hex color for the page template.', 'crb' ) ),  
		Field::make( 'text', 'page_title', __( 'Page Title', 'crb' ) ) 	   	  
	) );	

//Featured Work Settings
Container::make( 'post_meta', __( 'Featured Work Settings', 'crb' ) )
	->where( 'post_type', '=', 'work' )
	->add_fields( array(

		Field::make( 'rich_text', 'feat_solutions', __( 'Solutions', 'crb' ) ),
		Field::make( 'text', 'feat_website', __( 'Website Link', 'crb' ) ),
		Field::make( 'text', 'feat_case', __( 'Case Study Link', 'crb' ) ),
		Field::make( 'complex', 'crb_feats', __( 'Images', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Image', 'crb' ),
				'plural_name'   => __( 'Images', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'image', 'featured_images', __( 'Featured Image', 'crb' ) )
					->set_width( 100 ),
			) )
			
	) );	

//Front Page Subheader
Container::make( 'post_meta', __( 'Subheader', 'crb' ) )
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/front-page-new.php' )
	->add_fields( array(
		Field::make( 'image', 'subheader_bg', __( 'Background Image', 'crb' ) ),
		Field::make( 'rich_text', 'subheader_text', __( 'Text', 'crb' ) )	   	  
	) );

//Front Page Below Hero
Container::make( 'post_meta', __( 'Below Hero', 'crb' ) )
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/front-page-new.php' )
	->add_fields( array(
		Field::make( 'rich_text', 'below_hero_left', __( 'Left Block', 'crb' ) ),
		Field::make( 'rich_text', 'below_hero_right', __( 'Right Block', 'crb' ) )	   	  
	) );	

//Full Width Front Page
Container::make( 'post_meta', __( 'Full Width', 'crb' ) )
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/front-page-new.php' )
	->add_fields( array(
		Field::make( 'image', 'front_full_bg', __( 'Background Image', 'crb' ) ),
		Field::make( 'text', 'front_full_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'front_full_text', __( 'Text', 'crb' ) ), 
		Field::make( 'text', 'front_full_quip', __( 'Lower Right Block', 'crb' ) ),   	  
	) );	

//LSAB
Container::make( 'post_meta', __( 'Large Small Align Bottom', 'crb' ) )
	
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'separator', 'btn_separator', __( 'Large Section', 'crb' ) ),
		Field::make( 'image', 'lsab_large_img', __( 'Image', 'crb' ) )
			->set_width(25),
		Field::make( 'image', 'lsab_large_img2', __( 'Image', 'crb' ) )
			->set_width(25),
		Field::make( 'image', 'lsab_large_img3', __( 'Image', 'crb' ) )
			->set_width(25),
		Field::make( 'image', 'lsab_large_img4', __( 'Image', 'crb' ) )
			->set_width(25),			
		Field::make( 'text', 'lsab_large_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'lsab_large_text', __( 'Text', 'crb' ) ), 
		Field::make( 'separator', 'btn_separator2', __( 'Small Section', 'crb' ) ),
		Field::make( 'image', 'lsab_small_img', __( 'Image', 'crb' ) ),
		Field::make( 'text', 'lsab_small_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'lsab_small_text', __( 'Text', 'crb' ) ),  
	) );


//Full With Text
Container::make( 'post_meta', __( 'Full With Text', 'crb' ) )
	
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'image', 'fullwtext_img', __( 'Image', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'fullwtext_title', __( 'Title', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'fullwtext_text', __( 'Text', 'crb' ) )
			->set_width(33),
	) );	

//Arrow Block
Container::make( 'post_meta', __( 'Arrow Block', 'crb' ) )
	->where( 'post_template', '=', 'templates/front-page.php' )
	->or_where( 'post_template', '=', 'templates/front-page-new.php' )
	->add_fields( array(
		Field::make( 'rich_text', 'arrow_block', __( 'Text', 'crb' ) )
			->set_width(100),
	) );	

//Header Image Right Centered
Container::make( 'post_meta', __( 'Header Centered Image Right', 'crb' ) )
	->where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'separator', 'hcir_separator', __( 'Left Section', 'crb' ) ),
		Field::make( 'text', 'hcir_title', __( 'Section Title', 'crb' ) ),
		Field::make( 'separator', 'hcir_separator2', __( 'Right Section', 'crb' ) ),
		Field::make( 'image', 'hcir_img', __( 'Brand Image', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'hcir_img_title', __( 'Brand Title', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'hcir_img_text', __( 'Brand Text', 'crb' ) )
			->set_width(33),
	) );	

//SLAT
Container::make( 'post_meta', __( 'Small Large Align Top', 'crb' ) )
	->where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'separator', 'slat_separator', __( 'Small Section', 'crb' ) ),
		Field::make( 'image', 'slat_large_img', __( 'Image', 'crb' ) ),
		Field::make( 'text', 'slat_large_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'slat_large_text', __( 'Text', 'crb' ) ), 
		Field::make( 'separator', 'slat_separator2', __( 'Large Section', 'crb' ) ),
		Field::make( 'image', 'slat_small_img', __( 'Image', 'crb' ) ),
		Field::make( 'text', 'slat_small_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'slat_small_text', __( 'Text', 'crb' ) ),  
	) );
	
//LSAT
Container::make( 'post_meta', __( 'Large Small Align Top', 'crb' ) )
	->where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'separator', 'lsat_separator', __( 'Large Section', 'crb' ) ),
		Field::make( 'image', 'lsat_large_img', __( 'Image', 'crb' ) ),
		Field::make( 'text', 'lsat_large_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'lsat_large_text', __( 'Text', 'crb' ) ), 
		Field::make( 'separator', 'lsat_separator2', __( 'Small Section', 'crb' ) ),
		Field::make( 'image', 'lsat_small_img', __( 'Image', 'crb' ) ),
		Field::make( 'text', 'lsat_small_title', __( 'Title', 'crb' ) ),
		Field::make( 'text', 'lsat_small_text', __( 'Text', 'crb' ) ),  
	) );	

//Full With Text - 2
Container::make( 'post_meta', __( 'Full With Text Second', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/work.php' )
	->add_fields( array(
		Field::make( 'image', 'fullwtext2_img', __( 'Image', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'fullwtext2_title', __( 'Title', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'fullwtext2_text', __( 'Text', 'crb' ) )
			->set_width(33),
	) );
	
//Work Icons
Container::make( 'post_meta', __( 'Work Icons', 'crb' ) )
	->where( 'post_template', '=', 'templates/work.php' )
	->or_where( 'post_template', '=', 'templates/work-new.php' )
	->add_fields( array(
		Field::make( 'text', 'work_icons_title', __( 'Title', 'crb' ) )
			->set_width(100),
		//removed and switch to theme options, leaving in case they ever want personal icons again	
		/*Field::make( 'complex', 'crb_icons', __( 'Icons', 'crb' ) )
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
			->set_header_template( '<%- icon_title %>' ),*/
	) );	

//Agency Page Mission
Container::make( 'post_meta', __( 'Mission', 'crb' ) )
	->where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(  
		Field::make( 'text', 'page_mission', __( 'Text', 'crb' ) ) 	   	  
	) );

//Agency Page Full Width Image
Container::make( 'post_meta', __( 'Full Width Image', 'crb' ) )
	->where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(  
		Field::make( 'image', 'agency_fullwidth', __( 'Image', 'crb' ) ) 	   	  
	) );
	
//Agency Services
Container::make( 'post_meta', __( 'Services', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(
		Field::make( 'text', 'services_title', __( 'Title', 'crb' ) )
			->set_width(33),
		Field::make( 'complex', 'crb_services', __( 'Services', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Service', 'crb' ),
				'plural_name'   => __( 'Services', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'text', 'service_title', __( 'Area Of Service', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'service_what', __( 'What it is', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'service_why', __( 'Why it matters', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'service_includes', __( 'Includes', 'crb' ) )
					->set_width( 100 ),		
				
			) )
			->set_header_template( '<%- service_title %>' ),
	) );		

//Agency Description Block 1
Container::make( 'post_meta', __( 'Description Block 1', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(
		Field::make( 'rich_text', 'services_block1_description', __( 'Left Block', 'crb' ) )
			->set_width(50),
		Field::make( 'text', 'services_block1_description_2', __( 'Right Block', 'crb' ) )
			->set_width(50),
	) );
	
//Agency Image Block 1
Container::make( 'post_meta', __( 'Image Block 1', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(
		Field::make( 'image', 'services_imageblock_1', __( 'Image 1', 'crb' ) )
			->set_width(33),
		Field::make( 'image', 'services_imageblock_2', __( 'Image 2', 'crb' ) )
			->set_width(33),
		Field::make( 'image', 'services_imageblock_3', __( 'Image 3', 'crb' ) )
			->set_width(33),	
	) );		

//Agency Description Block 2
Container::make( 'post_meta', __( 'Description Block 2', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(
		Field::make( 'separator', 'description_separator', __( 'Upper Block', 'crb' ) ),
		Field::make( 'text', 'services_block2_title', __( 'Left Block', 'crb' ) )
			->set_width(50),
		Field::make( 'rich_text', 'services_block2_description_1', __( 'Right Block', 'crb' ) )
			->set_width(50),
		Field::make( 'separator', 'description_separator2', __( 'Lower Block', 'crb' ) ),
		Field::make( 'rich_text', 'services_block2_description_2', __( 'Paragraph', 'crb' ) )
			->set_width(50),	
	) );

//Agency Description Block 3
Container::make( 'post_meta', __( 'Description Block 3', 'crb' ) )
	->or_where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(
		Field::make( 'text', 'services_block3_title', __( 'TItle', 'crb' ) )
			->set_width(50),
		Field::make( 'rich_text', 'services_block3_description_1', __( 'Right Block', 'crb' ) )
			->set_width(50),
		Field::make( 'separator', 'description_separator3', __( 'Flex Container', 'crb' ) ),
		Field::make( 'rich_text', 'services_block3_flex_1', __( 'Container 1', 'crb' ) )
			->set_width(33),
		Field::make( 'rich_text', 'services_block3_flex_2', __( 'Container 2', 'crb' ) )
			->set_width(33),
		Field::make( 'rich_text', 'services_block3_flex_3', __( 'Container 3', 'crb' ) )
			->set_width(33),			
	) );	

//Agency Page Full Width Image 2
Container::make( 'post_meta', __( 'Full Width Image - Bottom of Page', 'crb' ) )
	->where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(  
		Field::make( 'image', 'agency_fullwidth_2', __( 'Image', 'crb' ) ) 	   	  
	) );

//Agency Contact Section
Container::make( 'post_meta', __( 'Contact Section', 'crb' ) )
	->where( 'post_template', '=', 'templates/agency.php' )
	->add_fields( array(  
		Field::make( 'image', 'agency_contact_img', __( 'Image', 'crb' ) ),
		Field::make( 'rich_text', 'agency_contact_content', __( 'Text Block', 'crb' ) ), 	   	  
	) );
	
//Work Hero Image
Container::make( 'post_meta', __( 'Hero Image', 'crb' ) )
	->where( 'post_type', '=', 'work' )
	->add_fields( array(  
		Field::make( 'checkbox', 'work_hero_height', 'Image Height' )
			->set_option_value( 'yes' )
			->set_help_text( 'Leave checked for the shorter height, un-checked for the taller height' ),
		Field::make( 'image', 'work_hero_img', __( 'Image', 'crb' ) ),
	) );
	
//Work Hero Image
Container::make( 'post_meta', __( 'Ingredients Section', 'crb' ) )
	->where( 'post_type', '=', 'work' )
	->add_fields( array(  
		Field::make( 'text', 'work_ingredient_title', 'Key Ingredient' ),
		Field::make( 'rich_text', 'work_ingredient_content', __( 'Description', 'crb' ) )
			->set_width(50),
		Field::make( 'rich_text', 'work_ingredient_involvement', __( 'Involvement', 'crb' ) )
			->set_width(50),
		Field::make( 'text', 'work_ingredient_status', __( 'Status', 'crb' ) ),
	) );	

//Contact Content
Container::make( 'post_meta', __( 'Settings', 'crb' ) )
	->where( 'post_template', '=', 'templates/contact.php' )
	->add_fields( array(  
		Field::make( 'rich_text', 'contact_lower_left', __( 'Left Block', 'crb' ) ),
		Field::make( 'rich_text', 'contact_lower_right', __( 'Right Block', 'crb' ) ), 	   	  
	) );

//CTA Section
Container::make( 'post_meta', __( 'CTA', 'crb' ) )
	->where( 'post_type', '=', 'page' )
	->or_where( 'post_type', '=', 'work' )
	->add_fields( array(
		Field::make( 'text', 'cta_title', __( 'Title', 'crb' ) ) , 
		Field::make( 'text', 'cta_text', __( 'Text', 'crb' ) ),
		Field::make( 'text', 'cta_btn_text', __( 'Button Text', 'crb' ) ),
		Field::make( 'text', 'cta_btn_url', __( 'Button URL', 'crb' ) ), 	   	  
	) );	

// Email Signature
Container::make( 'post_meta', __( 'Details', 'crb' ) )
	->where( 'post_type', '=', 'signatures' )
	->add_fields( array(
		Field::make( 'text', 'sig_title', __( 'Title', 'crb' ) ) , 
		Field::make( 'text', 'sig_position', __( 'Position', 'crb' ) ),
		Field::make( 'text', 'sig_email', __( 'Email Address', 'crb' ) ),
		Field::make( 'text', 'sig_phone', __( 'Phone Number', 'crb' ) ), 
		Field::make( 'text', 'sig_address1', __( 'Address Line 1', 'crb' ) ), 
		Field::make( 'text', 'sig_address2', __( 'Address Line 2', 'crb' ) ), 
		Field::make( 'text', 'sig_book', __( 'Book Meeting URL', 'crb' ) ),  	   	  
	) );	

// Email Signature
Container::make( 'post_meta', __( 'Settings', 'crb' ) )
	->where( 'post_type', '=', 'note' )
	->add_fields( array(
		Field::make( 'checkbox', 'note_check', __( 'Video or Note', 'crb' ) ) 
			->set_help_text('If this is a video check this box, if not leave it unchecked.'), 
		Field::make( 'rich_text', 'note_text', __( 'Note Text', 'crb' ) )
			->set_conditional_logic( array(
        	array(
            	'field' => 'note_check',
            	'value' => false,
			) 
		) ),
		Field::make( 'file', 'note_video', __( 'Video', 'crb' ) )
			->set_conditional_logic( array(
        	array(
            	'field' => 'note_check',
            	'value' => true,
			)
		) ),	
	) );		

