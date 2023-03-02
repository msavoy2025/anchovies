<?php
/* Login Page Changes */
function my_login_logo() { ?>
    <style type="text/css">
        body {
          background: #B7B6A5 !important;
        }

        .login form {
          background: #B7B6A5 !important;
          border:none !important;
          box-shadow: none !important;
        }

        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/dist/images/logo.svg);
            margin-top:100px;
		        width:436.75px;
		        background-size: contain;
		        background-repeat: no-repeat;
        	  padding-bottom: 30px;
        }

        #login {
            width: 436.75px !important;
            padding: 2% 0 0 !important;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

/* Script/CSS addons */
function style_scripts() {
    wp_enqueue_style( 'stylish', get_stylesheet_directory_uri() . '/style.css', false, 1.0, null);
    wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/dist/css/bundle.css', array(), 1.0, 'all' );
    wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), 1.0, true );
    wp_enqueue_script( 'header_scripts', get_template_directory_uri() . '/dist/js/Hbundle.js', false, 1.0, false );
}
add_action( 'wp_enqueue_scripts', 'style_scripts' );

//Script Deferring
add_filter( 'script_loader_tag', 'wsds_defer_scripts', 10, 3 );
function wsds_defer_scripts( $tag, $handle, $src ) {

	// The handles of the enqueued scripts we want to defer
	$defer_scripts = array( 
		'stylish',
		'_themename-stylesheet',
		'_themename-scripts',
		'header_scripts',

	);

    if ( in_array( $handle, $defer_scripts ) ) {
        return '<script src="' . $src . '" defer="defer" type="text/javascript"></script>' . "\n";
    }
    
    return $tag;
} 


//CSS Deferring
function custom_use_print_block_library( $html, $handle ) {
  $handles = array( 'stylish', 'wp-block-library' );
  if ( in_array( $handle, $handles ) ) {
    $html = str_replace( 'media=\'all\'', 'media=\'print\' onload="this.onload=null;this.media=\'all\'"', $html );
  }
  return $html;
}
add_filter( 'style_loader_tag', 'custom_use_print_block_library', 10, 2 );


// featured image for posts/pages
add_theme_support( 'post-thumbnails' );

//add SVG to allowed file uploads
function add_file_types_to_uploads($file_types){

     $new_filetypes = array();
     $new_filetypes['svg'] = 'image/svg';
     $file_types = array_merge($file_types, $new_filetypes );

     return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');

add_filter( 'gform_confirmation_anchor', '__return_false' );

//navigation Header menu

function header_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'header_menu' );

//carbon fields setup
use Carbon_Fields\Container;
use Carbon_Fields\Field;

function crb_attach_theme_options() {
  # Attach fields
  include_once( 'options/theme-options.php' );
  include_once( 'options/post-meta.php' );
  include_once( 'options/proposal-sections.php' );
}

add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );

//password protection form
function my_password_form() {
    global $post;
    $label = 'pwbox-' . ( empty($post->ID) ? rand() : $post->ID );
    $o = '<form class="protected-post-form" action="' . esc_url(site_url('wp-login.php?action=postpass', 'login_post')) . '" method="post">';
    $o .=' <label class="proposal_password_label" for="' . $label . '">' . __("") . ' </label>';
    $o .= '<input class="proposal_password_input" name="post_password" id="' . $label . '" type="password" size="20" maxlength="20" placeholder="Enter Your Password" />';
    $o .= '<input class="proposal_password_submit" type="submit" name="Submit" value="' . esc_attr__("") . '" />';
    $o .= '</form>';
    return $o;
}

add_filter('the_password_form', 'my_password_form');

//the title trim for password protected pages
function the_title_trim($title) {

	$title = attribute_escape($title);

	$findthese = array(
		'#Protected:#',
		'#Private:#'
	);

	$replacewith = array(
		'', // What to replace "Protected:" with
		'' // What to replace "Private:" with
	);

	$title = preg_replace($findthese, $replacewith, $title);
	return $title;
}
add_filter('the_title', 'the_title_trim');
