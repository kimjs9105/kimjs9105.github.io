$(document).ready(function(){
    
    
    /* top button */
    
    $("#topButton").hide();
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $("#topButton").fadeIn();
        } else {
            $("#topButton").fadeOut();
        }
    });
    
    $("#topButton").on("click",function(){
        $('html,body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    
    
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
            
            /* article show */
            $(".slide_mos").hide();
            
            $(".plus_mos").on("click",function(){
                $(this).hide();
                $(this).next(".slide_mos").stop().fadeIn(1500);
            });
            
            $(".close_mos").on("click",function(){
                $(".plus_mos").show();
                $(".slide_mos").stop().fadeOut(1500);
            });
            
        }//winW <= 679
        
        else if(winW >= 680 && winW <= 959){ 
            
            $(".slide_tab").hide();
            $(".slide_img").hide();
            
            $(".plus_tab").on("click",function(){
                $(this).hide();
                $(this).next(".slide_tab").stop().fadeIn(1500);
            });
            
            $(".close_tab").on("click",function(){
                $(".plus_tab").show();
                $(".slide_tab").stop().fadeOut(1500);
            });
            
             $(".plus_add").on("click",function(){
                 
                 var imgH = $(this).next(".slide_img").height();
                 
                $(this).hide();
                $(this).next(".slide_img").stop().fadeIn(1500);
                $(this).parent().css({height : imgH + 60});
            });
            
            $(".close_add").on("click",function(){
                $(".plus_box").show();
                $(".slide_img").stop().fadeOut(1500);
                $(".sec_box").css({height:460})
            });
            
        }//680<= winW <=959
        
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