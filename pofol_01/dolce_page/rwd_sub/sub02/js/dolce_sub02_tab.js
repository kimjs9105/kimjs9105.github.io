$(document).ready(function(){
    
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
        
        if( 680 <= winW <= 959 ){
            
            /* main menu icon click*/
             var gnb = $("#gnb"),
                gnbH2 = gnb.children('h2'),
                gnbMainEndI = gnb.children("#mainBox").children(".endBox").children('i');
            
            gnbH2.on('click',function(){
                var snsB = $("#snsBox"),
                    mainB = $("#mainBox");
                
                snsB.addClass("scroll")
                mainB.addClass("scroll");
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $("#gnb"),
                    gnbsnsB = gnb.children("#snsBox"),
                    gnbmainB = gnb.children("#mainBox");
                
                gnbsnsB.removeClass("scroll")
                gnbmainB.removeClass("scroll");
             });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".sub_menu").hide();
            $("#mainBox").children('li').on('click',function(){
                $(this).children(".sub_menu").stop().slideToggle(300);
            });
            
            
            /* banner slide */
            function banner(){
    
                $(".left_btn").on('click',function(){
                    
                var bannerLi = $(".ban_real").children('li'),
                    bannerLiWidth = bannerLi.width();
            
                    bannerLi.first().stop().animate({marginLeft:bannerLiWidth},500,function(){
                        bannerLi.css({marginLeft:0}).last().prependTo(".ban_real");
                    });//bannerLi.last.animate.function
                });//.left_btn.function
                
                $(".right_btn").on('click',function(){
                    
                    var bannerLi = $(".ban_real").children('li'),
                        bannerLiWidth = bannerLi.width();
                    
                    bannerLi.first().stop().animate({marginLeft:-bannerLiWidth},500,function(){
                        bannerLi.css({marginLeft:0}).first().appendTo(".ban_real");
                    });//bannerLi.first.animate.function
                });//.right_btn.function
            
                var timer;
                function startBtn(){ timer = setInterval('$(".right_btn").click()',3000)};
                // 일정 시간을 가지고 움직이게 하는 기능 : setInterval
                startBtn();
                
                function stopBtn(){clearInterval(timer)};
                // setInterval 멈추게 하는 기능
                
                $("#banner").on({ 'mouseover' : stopBtn, 'mouseout': startBtn });
                
            };//function banner()
            
            banner();
            
        }//680 <= winW <= 959
        
    };//winResize.function
    
    winResize();
    
    var winWidth = $(window).width();
        
        win.on('resize',function(){
            if( $(window).width() != winWidth){
                location.reload();
            }
            winResize();
        });
        
});