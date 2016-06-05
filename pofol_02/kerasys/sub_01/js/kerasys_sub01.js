$(document).ready(function(){
            
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
    
    
    /* article slide */
    $(".in_box").hide();
    
    $("#photo").children('ul').children('li').on('click',function(e){
        e.preventDefault();
        $(".in_box").stop().slideUp(500);
//        $(this).find('span').css({border:"5px solid #f8c6dc", boxSizing:"border-box"});
        $(this).find(".in_box").stop().slideDown(500);
        
    })
    
    $("#video").children('ul').children('li').on('click',function(e){
        e.preventDefault();
        $(".in_box").stop().slideUp(500);
//        $(this).find('span').css({border:"5px solid #f8c6dc", boxSizing:"border-box"});
        $(this).find(".in_box").stop().slideDown(500);
        
    })
    
});