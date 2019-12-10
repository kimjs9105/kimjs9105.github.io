$(document).ready(function(){

  // action
  var $menu_btn = $('#btn-menu');
  var $menu_close_btn = $('#btn-menu-close');

  $menu_btn.on('click', function(){

    $('.menu_bg').css({display: 'block'});
    $('nav').animate({marginRight: 0}, 500);
  });

  $menu_close_btn.on('click', function(){

    $('nav').animate({marginRight: -300}, 300,function(){
      $('.menu_bg').css({display: 'none'});
    });
  });

  // var $sectionTabs = $('section .sub-con-tabs a');
  var $sectionTit = $('section .mob_sub_tit');
  //
  // $sectionTabs.on('click', function(){
  //   var $selectTabs = $(this).attr('data-con');
  //   var $selectText = $(this).text();
  //   var sectionH = $('.' + $selectTabs).height();
  //
  //   $('.sub-content').removeClass("on");
  //   $('.' + $selectTabs).addClass("on");
  //   $('section .sub-con-tabs li').removeClass("on");
  //   $(this).parent().addClass("on");
  //
  //
  //   var winMob = $(window).width();
  //   var sectionBannerH = $('.sub-banner').height();
  //
  //   if($selectTabs === "sub-company-03"){
  //
  //     if( winMob >= 600 ){
  //
  //       $('section').css({height: 770 + sectionBannerH});
  //
  //     }else {
  //       $('section').css({height: 1000 });
  //
  //     }
  //   }else {
  //       $('section').css({ height: "auto"});
  //   }
  //
  //   if( winMob <= 600 ){
  //
  //     $('.sub-title > ul').slideToggle(500);
  //     $sectionTit.text($selectText);
  //   }
  // });

  $sectionTit.on('click', function(){

    $sectionTit.next('ul').slideToggle(500);

    if($sectionTit.hasClass("on")){
      $sectionTit.removeClass("on");
    }else{
      $sectionTit.addClass("on");
    }
  });


  // // mobile version
  // var winW = $(window).width();
  //
  // if(winW <= 600){
  //
  //   $('section').css({height: sectionBannerH + sectionTitH + sectionActiveH - 130});
  //
  // }

  var inquireBtn = $("#ready");

  inquireBtn.on('click', function(){

    alert("페이지 준비 중 입니다!");
  });


});
