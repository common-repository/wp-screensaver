<?php
/*
Plugin Name: WP Screensaver
Plugin URI: http://wordpress.org/plugins/wp-screensaver/
Description: This plugin shows a screensaver on your website when there is no activity for some time.
Author: Satish Shamra
Version: 1.1
Author URI: http://sakush.com
*/


$saver1=get_option('saver_opt');


function secondx_pluginx_filesxx(){
wp_enqueue_script( 'jquery' );
wp_enqueue_script('media-upload');

wp_register_script( 'scndplg_snow-js', plugins_url( 'js/snowfall.jquery.js', __FILE__ ) );
wp_register_script( 'scndplg_cube-js', plugins_url( 'js/cube.js', __FILE__ ) );
wp_register_script( 'scndplg__circle_Vector2-js', plugins_url( 'js/Vector2.js', __FILE__ ) );
wp_register_script( 'scndplg__circle_particle-js', plugins_url( 'js/circle_particle.js', __FILE__ ) );
wp_register_script( 'scndplg__animated_tree-js', plugins_url( 'js/animated_tree.js', __FILE__ ) );
wp_register_style( 'scndplg-css', plugins_url( 'css/abstyle.css', __FILE__ ) );
wp_enqueue_style( 'scndplg-css' );
}
add_action('wp_enqueue_scripts','secondx_pluginx_filesxx');

function wp_scr_time_defined(){
echo'	<script>
	wp_scr_wait_time = "'.get_option('my_scr_timer').'";
	if(isNaN(parseInt(wp_scr_wait_time))){wp_scr_wait_time=10;} else { wp_scr_wait_time = parseInt(wp_scr_wait_time); }
	</script>';
}


add_action('wp_footer','wp_scr_time_defined');

function admin_includes_scr(){
wp_register_script( 'custom-scrjs', plugins_url( 'js/custom.js', __FILE__ ) );
wp_enqueue_script( 'custom-scrjs' );
}

add_action('admin_print_scripts','admin_includes_scr');

function register_mysettingsss() {

register_setting( 'opt_group', 'saver_opt');
register_setting( 'opt_group', 'ttl_str');
register_setting( 'opt_group', 'img_bg_path');
register_setting( 'opt_group', 'img_path1');
register_setting( 'opt_group', 'img_path2');
register_setting( 'opt_group', 'img_path3');
register_setting( 'opt_group', 'img_path4');
register_setting( 'opt_group', 'img_path5');
register_setting( 'opt_group', 'img_path6');
register_setting( 'opt_group', 'my_scr_timer');
}

add_action( 'admin_init', 'register_mysettingsss' );


add_action( 'admin_menu', 'register_my_custom_menu_page' );
function my_custom_menu_page(){
include('opt.php');
}

function register_my_custom_menu_page(){
add_options_page( 'Screen Saver style option', 'Screen Saver style option', 'manage_options', 'opt.php', 'my_custom_menu_page', plugins_url( '' ), 100 ); 
}


//============================================================================================================================================
//include effect 
//=================================================================================================================================

if($saver1== 'sel1' || $saver1==''){

	function snowfallxx(){
	wp_enqueue_script( 'scndplg_snow-js' );
	}
	add_action('wp_footer','snowfallxx');
	
}elseif($saver1== 'sel2'){

	function cube3deff(){
	wp_enqueue_script( 'scndplg_cube-js' );
	echo'
	<style>
	#cube div:nth-child(1) {
	background-image: url('.get_option('img_path1').');
	background-repeat : no-repeat;
	}
	#cube div:nth-child(2) {
	background-image: url('.get_option('img_path2').');
	background-repeat : no-repeat;
	}
	#cube div:nth-child(3) {
	background-image: url('.get_option('img_path3').');
	background-repeat : no-repeat;
	}
	#cube div:nth-child(4) {
	background-image  : url('.get_option('img_path4').');
	background-repeat : no-repeat;
	}
	#cube div:nth-child(5) {
	background-image  : url('.get_option('img_path5').');
	background-repeat :no-repeat;
	}
	#cube div:nth-child(6) {
	background-image: url('.get_option('img_path6').');
	background-repeat :no-repeat;
	}
	</style>
	';
	}
	add_action('wp_footer','cube3deff');
	
}elseif($saver1=='sel3'){
function particles_circle(){
	wp_enqueue_script( 'scndplg__circle_Vector2-js' );
	wp_enqueue_script( 'scndplg__circle_particle-js' );
	}
	add_action('wp_footer','particles_circle');

}elseif($saver1=='sel4'){
function animate_tree(){
	wp_enqueue_script( 'scndplg__animated_tree-js' );
	}
	add_action('wp_footer','animate_tree');

}elseif($saver1=='sel5'){
	function img_bg_saver(){
	echo'<div class="img_cont">
	<div class="img_view1">
	<h3>'.get_option('ttl_str').'</h3>
	<img class="img_view" src="'.get_option('img_bg_path').'">	
	</div>
	</div>
	
	<script>
	jQuery(document).ready(function(){
	img_bg_scr =setTimeout(function(){jQuery(".img_cont").show()},wp_scr_wait_time*1000);
	jQuery(document).on("mousemove click keypress",function(){

	jQuery(".img_cont").hide();
	clearTimeout(img_bg_scr);
	img_bg_scr =setTimeout(function(){jQuery(".img_cont").show()},wp_scr_wait_time*1000);
	});
	});
	</script>
	';
	}
	add_action('wp_footer','img_bg_saver');
	
}
?>