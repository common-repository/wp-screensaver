<?php
wp_enqueue_media();
?><form method="post" action="options.php">

<?php settings_fields( 'opt_group' );	//pass slug name of page, also referred
                                        //to in Settings API as option group name
do_settings_sections( 'opt_group' ); 	//pass slug name of page

?>

<h1>WP Screensaver settings</h1>
<br /><h3>Wait time to begin screensaver(for all types of screensavers)</h3>
<input type="text" id="my_scr_timer" name="my_scr_timer" value="<?php echo get_option('my_scr_timer'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;


<br /><br />

<h2>Screen Saver Type:</h2>
<select name="saver_opt" id="saver_opt">
<option value="">select any one</option>
<option value="sel1">Snow fall</option>
<option value="sel2">3D cube</option>
<option value="sel3">Particles Collision</option>
<option value="sel4">Animated_tree</option>
<option value="sel5">Image Background</option>
</select>
<script>
jQuery('#saver_opt').val('<?php echo get_option('saver_opt'); ?>');
</script>


<h3>Settings for &quot;Image Background&quot; saver...</h3>
<br />
<textarea rows="6" id="ttl_str" name="ttl_str"><?php echo get_option('ttl_str'); ?></textarea>

<br />
<div class="upload_img_box">
<input type="text" id="img_bg_path" class="choose_img" name="img_bg_path" value="<?php echo get_option('img_bg_path'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_bg_path_button" name="img_bg_path" class="upload_image_button" type="button" value="Select Image" />
&lt;- Background Image
</div>
<br />
<h3>Settings for &quot;3D Cube&quot; saver...</h3>

<input type="text" id="img_path1" name="img_path1" value="<?php echo get_option('img_path1'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path1_button" name="img_path1_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 1

<br />
<input type="text" id="img_path2" name="img_path2" value="<?php echo get_option('img_path2'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path2_button" name="img_path2_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 2

<br />
<input type="text" id="img_path3" name="img_path3" value="<?php echo get_option('img_path3'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path3_button" name="img_path3_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 3

<br />
<input type="text" id="img_path4" name="img_path4" value="<?php echo get_option('img_path4'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path4_button" name="img_path4_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 4

<br />
<input type="text" id="img_path5" name="img_path5" value="<?php echo get_option('img_path5'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path5_button" name="img_path5_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 5

<br />
<input type="text" id="img_path6" name="img_path6" value="<?php echo get_option('img_path6'); ?>">&nbsp;&nbsp;&nbsp;&nbsp;
<input id="img_path6_button" name="img_path6_button" class="upload_image_button" type="button" value="Select Image" />
&lt;- Image 6


<?php submit_button(); ?>
</form>