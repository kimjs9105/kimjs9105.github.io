$(document).ready(function(){

  $('#navBtn').on('click', function(){

    if($(this).hasClass('act')){
      $(this).removeClass('act');
      $('#gnb').removeClass('on');
    }else{
      $(this).addClass('act');
      $('#gnb').addClass('on');
    }
  });

  slideShow();

  setInterval(function() {
    slideShow();
  },6000);
});

var bannerWid = [700,500,400,600,500];

function slideShow(){

  var bannerWrap = $('#banner .container_banner');
  var bannerContent = bannerWrap.children('.act_slide');

  var bannerIndex = bannerContent.index();

  console.log(bannerIndex);

  $('.container_title div').eq(bannerIndex).addClass('on');
  bannerContent.css({display: 'block', width: 0});
  bannerContent.find('.rightCover').css({width: bannerWid[bannerIndex]});
  bannerContent.find('.cover').css({display: 'block'});

  bannerContent.animate({width: bannerWid[bannerIndex]}, 1200, 'easeInOutCubic', function(){
    bannerContent.find('.cover').css({display: 'none'});
  });

  bannerContent.find('.rightCover').delay(3000).animate({width: 0}, 1200, 'easeInOutCubic', function(){

    bannerContent.css({display: 'none'});
    $('.container_title div').removeClass('on');
    if(bannerIndex === 4){
      bannerWrap.children('div').removeClass('act_slide').eq(0).addClass('act_slide');
    }else{
      bannerWrap.children('div').removeClass('act_slide').eq(bannerIndex + 1).addClass('act_slide');
    }
  });
}
