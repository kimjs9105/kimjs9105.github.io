$(document).ready(function(){
  var $menu_btn = $('#btn-menu');
  var $menu_close_btn = $('#btn-menu-close');

  $menu_btn.on('click', function(){
    console.log('누름');

    $('.menu_bg').css({display: 'block'});
    $('nav').animate({marginRight: 0}, 500);
  });

  $menu_close_btn.on('click', function(){

    $('nav').animate({marginRight: -300}, 300,function(){
      $('.menu_bg').css({display: 'none'});
    });
  });
  
});
