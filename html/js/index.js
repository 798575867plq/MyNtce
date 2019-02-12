$(function() {
  var fisrtMenu = $($('#menu li')[0]);
  $('#divsjx').css('left', fisrtMenu.offset().left);
  $('#divsjx').css('top', fisrtMenu.offset().top);
  $('#divsjx').show();
  
  $('#menu li').mouseover(function() {
    $('#divsjx').css('left', $(this).offset().left);
    $('#divsjx').css('top', $(this).offset().top);
  });

  $('#menu').mouseout(function() {
    $('#divsjx').css('left', fisrtMenu.offset().left);
    $('#divsjx').css('top', fisrtMenu.offset().top);
  });
});
