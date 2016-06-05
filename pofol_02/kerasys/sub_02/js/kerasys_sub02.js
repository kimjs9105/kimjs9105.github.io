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
    
    
});