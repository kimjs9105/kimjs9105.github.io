$(document).ready(function(){
    
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
        
        if( 960 <= winW ){

            /* main menu slideUp*/
            $('#mainBox').on("mouseenter",function(){
//                $('h1').stop().fadeOut(300);
                $(this).stop().animate({'margin-top': 0 }, 500).children('li').children('a').addClass("red");
            }).on('mouseleave', function(){
//                $('h1').stop().fadeIn(300);
                $(this).stop().animate({'margin-top': 80}, 500).children('li').children('a').removeClass("red");
            });//#mainBox.hover
            
            /* sitemebBox */
            var siteBtn = $("#sitemebBox").children('li').eq(2).children('button');
            siteBtn.on('click',function(){
                $(this).html('a').attr({"src":"./basic/dolcegusto_join/dolcegusto_join.html"});
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
            
        }// 960 <= winW
        
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