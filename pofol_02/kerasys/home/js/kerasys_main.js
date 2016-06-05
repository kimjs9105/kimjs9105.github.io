$(document).ready(function(){
    
    /* popup */
    $(".close_info").on("click",function(){
       $("#popIn").hide();
    });
            
    /* main menu jQuery */

    var gnb = $("#gnb"),
        gnbDl = gnb.find(".main"),
        gnbDt = gnbDl.children('.slide');
    
    $(".small_box").hide();
    
    gnbDt.on("mouseenter",function(){
        
        var thisH = $(this).height(),
            ul = $(this).children('ul'),
            ulH = ul.height();
        
        $(this).children('ul').stop().slideDown();
        $(this).stop().animate({height:ulH},500);
    })
    
    gnbDt.on("mouseleave",function(){
        
        $(this).children('ul').stop().slideUp();
        $(this).stop().animate({height:20});
        
    });
    
    
    /* banner jQuery */
    function slide(){
        
        var bannerLi = $(".banner_box").children('li'),
            bannerLiWidth = bannerLi.width();
        
        bannerLi.first().stop().animate({marginLeft:-bannerLiWidth},500,function(){
            bannerLi.css({marginLeft:0}).first().appendTo(".banner_box");
            
        });//bannerLi.first.animate.function
    
    }
    
    var timer;
    function startBtn(){ timer = setInterval(slide,2000)};
    startBtn();
    
    function stopBtn(){clearInterval(timer)};
    
    $("#banner").on({ 'mouseover' : stopBtn, 'mouseout': startBtn });

    
    
    /* section mousewheel */
    $('section').on('mousewheel',function(event,delta){
        
        if(delta > 0){
            var prev = $(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':prev},1000,"easeInSine");
        }else if(delta < 0){
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},1000,"easeInSine");
            
        }
        
    });//mousewheel plugin..
    
});