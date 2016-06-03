$(document).ready(function(){
    
    /* 반응형 부분 */
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
    
        if(winW <= 678 ){
            
            
            $("#gnb").css({display:"none"})/*.find('li').css({height:0})*/;
            
            $("#menu").on("click",function(){
                $(this).stop().animate({height:0},1000);
                $("#gnb").stop().css({display:"block"})
                $("#headBox").stop().slideDown().animate({height: "138.8vw"/*500*/},1000);
            });
            
            $(".menu_05").on("click",function(){
                $("#gnb").stop().css({display:"none"});    
                $("#headBox").stop().animate({height:"33.3vw"/*120*/},1000);
                $("#menu").stop().animate({height:"15.3vw"/*55*/},1000);
            });
        }//winW <= 679
        
        else if(winW >= 680 && winW <= 959){ }//680<= winW <=959
        
        else{ };// 960<= winW
    
    };
        winResize();
    
    var winWidth = $(window).width();
        
        win.on('resize',function(){
            if( $(window).width() != winWidth){
                location.reload();
            }
            winResize();
        });
        
    
        
    
    
});