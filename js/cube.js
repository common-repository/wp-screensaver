saver_cube = '<div id="cube_container" class="xxsaver">\
  <div id="cube" class="animate">\
    <div></div>\
    <div></div>\
    <div></div>\
    <div></div>\
    <div></div>\
    <div></div>\
  </div>\
</div>';



jQuery(document).ready(function(){
cube_time=1000*wp_scr_wait_time;
cube_sleeper='';
cube_sleeper =setTimeout(function(){jQuery('body').append(saver_cube)},cube_time);

jQuery(document).on('mousemove click keypress',function(){

jQuery('.xxsaver').remove();
clearTimeout(cube_sleeper);

cube_sleeper=setTimeout(function(){jQuery('body').append(saver_cube)},cube_time);
});

});
