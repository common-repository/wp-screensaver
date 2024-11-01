jQuery(document).ready(function($){
 
 
    var custom_uploader;
	var custom_uploader1;
	var custom_uploader2;
	var custom_uploader3;
	var custom_uploader4;
	var custom_uploader5;
	var custom_uploader6;
 
 
    $('#img_bg_path_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {
            custom_uploader.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            attachment = custom_uploader.state().get('selection').first().toJSON();
            $('#img_bg_path').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader.open();
 
    });
 
     $('#img_path1_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader1) {
            custom_uploader1.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader1 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader1.on('select', function() {
            attachment = custom_uploader1.state().get('selection').first().toJSON();
            $('#img_path1').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader1.open();

    });
 
      $('#img_path2_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader2) {
            custom_uploader2.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader2 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader2.on('select', function() {
            attachment = custom_uploader2.state().get('selection').first().toJSON();
            $('#img_path2').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader2.open();
 
    });		
	
 
      $('#img_path3_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader3) {
            custom_uploader3.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader3 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader3.on('select', function() {
            attachment = custom_uploader3.state().get('selection').first().toJSON();
            $('#img_path3').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader3.open();
 
    });
	
	     $('#img_path4_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader4) {
            custom_uploader4.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader4 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader4.on('select', function() {
            attachment = custom_uploader4.state().get('selection').first().toJSON();
            $('#img_path4').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader4.open();
 
    });
	
	     $('#img_path5_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader5) {
            custom_uploader5.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader5 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader5.on('select', function() {
            attachment = custom_uploader5.state().get('selection').first().toJSON();
            $('#img_path5').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader5.open();
 
    });
	

	
	     $('#img_path6_button').click(function(e) {
 
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader6) {
            custom_uploader6.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader6 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader6.on('select', function() {
            attachment = custom_uploader6.state().get('selection').first().toJSON();
            $('#img_path6').val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader6.open();
 
    });
 
});