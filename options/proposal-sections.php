<?php
use Carbon_Fields\Container\Container;
use Carbon_Fields\Field\Field;

//Proposal Intro
Container::make( 'post_meta', __( 'Intro', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
		Field::make( 'rich_text', 'proposal_ingredients', __( 'Ingredients', 'crb' ) )
      		->set_width(50),
		Field::make( 'rich_text', 'proposal_instructions', __( 'Instructions', 'crb' ) )
      		->set_width(50),
		Field::make( 'separator', 'btn_separator', __( 'Valid Through Date', 'crb' ) ),
		Field::make( 'text', 'proposal_valid_month', __( 'Proposal Month', 'crb' ) )
      		->set_width(33),
		Field::make( 'text', 'proposal_valid_day', __( 'Proposal Day', 'crb' ) )
			->set_width(33),
		Field::make( 'text', 'proposal_valid_year', __( 'Proposal Year', 'crb' ) )
			->set_width(33),
        Field::make( 'text', 'proposal_start_btn_url', __( 'Start Project Btn URL', 'crb' ) )
        ->set_width(100),
	) );

//Proposal Full Width 1
Container::make( 'post_meta', __( 'Full Width Section', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
		Field::make( 'image', 'proposal_full_1', __( 'Image', 'crb' ) )
      		->set_width(50),
		Field::make( 'rich_text', 'proposal_small_text', __( 'Small Text Below Image', 'crb' ) )
      		->set_width(50),
		Field::make( 'rich_text', 'proposal_large_text', __( 'Large Text Below Image', 'crb' ) )
      		->set_width(100),
	) );

//Proposal Problems/Solutions Section
Container::make( 'post_meta', __( 'Problems/Solutions Section', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
		Field::make( 'rich_text', 'ps_intro', __( 'Left Text Block', 'crb' ) )
      		->set_width(100),
        Field::make( 'complex', 'crb_ps', __( 'Problems/Solutions', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Problem', 'crb' ),
				'plural_name'   => __( 'Problems', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'rich_text', 'ps_problem', __( 'Problem', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'ps_solution', __( 'Solution', 'crb' ) )
					->set_width( 100 ),

			) ),
			//->set_header_template( '<%- service_title %>' ),
	) );

//Proposal Full Width 2
Container::make( 'post_meta', __( 'Full Width Section 2', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
		Field::make( 'image', 'proposal_full_2', __( 'Image', 'crb' ) )
      		->set_width(50),
		Field::make( 'rich_text', 'proposal_small_text_2', __( 'Small Text Below Image', 'crb' ) )
      		->set_width(50),
		Field::make( 'rich_text', 'proposal_large_text_2', __( 'Large Text Below Image', 'crb' ) )
      		->set_width(100),
	) );

//Proposal Ingredients Section
Container::make( 'post_meta', __( 'Ingredients Section', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
        Field::make( 'complex', 'crb_ingredients', __( 'Ingredients', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Ingredient', 'crb' ),
				'plural_name'   => __( 'Ingredients', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'text', 'ingredient_title', __( 'Title', 'crb' ) )
					->set_width( 100 ),
                Field::make( 'text', 'ingredient_content', __( 'Description', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'text', 'ingredient_price', __( 'Price', 'crb' ) )
					->help_text( 'Do not use commas for the price or $ symbol before it, the code will do everything for you.' )
					->set_attribute( 'placeholder', '10500' )
					->set_width( 100 ),
				Field::make( 'text', 'ingredient_time', __( 'Timeline', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'ingredient_includes', __( 'Includes', 'crb' ) )
					->set_width( 100 ),
			) )
			->set_header_template( '<%- ingredient_title %>' ),
		Field::make( 'separator', 'description_ingredients', __( 'Total', 'crb' ) ),
		Field::make( 'text', 'ingredients_total', __( 'Overall Price', 'crb' ) )
      		->set_width(100),
		Field::make( 'text', 'ingredients_time', __( 'Overall Time', 'crb' ) )
      		->set_width(100),
	) );

//Proposal Links Section
Container::make( 'post_meta', __( 'Links Section', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
        Field::make( 'complex', 'crb_links', __( 'Links', 'crb' ) )
			->set_width( 100 )
			->set_layout( 'tabbed-vertical' )
			->setup_labels( array(
				'singular_name' => __( 'Link', 'crb' ),
				'plural_name'   => __( 'Links', 'crb' ),
			) )
			->add_fields( array(
				Field::make( 'text', 'link_item', __( 'Item', 'crb' ) )
					->set_width( 100 ),
                Field::make( 'rich_text', 'link_what', __( 'What This Is', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'rich_text', 'link_why', __( 'Why Were sharing this', 'crb' ) )
					->set_width( 100 ),
				Field::make( 'text', 'link_url', __( 'The Link', 'crb' ) )
					->set_width( 100 ),
			) )
			->set_header_template( '<%- link_item %>' ),
	) );

//CTA Section
Container::make( 'post_meta', __( 'CTA', 'crb' ) )
	->where( 'post_type', '=', 'proposal' )
	->add_fields( array(
		Field::make( 'text', 'proposal_cta_title', __( 'Title', 'crb' ) ) ,
		Field::make( 'text', 'proposal_cta_text', __( 'Text', 'crb' ) ),
		Field::make( 'text', 'proposal_cta_btn_text', __( 'Button Text', 'crb' ) ),
		Field::make( 'text', 'proposal_cta_btn_url', __( 'Button URL', 'crb' ) ),
	) );
