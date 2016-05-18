$(document).ready(function(){
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
        
        if(winW <= 679){
            
            /* main menu icon click*/
            var gnb = $("#gnb"),
                gnbH2 = gnb.children('h2'),
                gnbMainEndI = gnb.children("#mainBox").children(".endBox").children('i');
            
            gnbH2.on('click',function(){
                
                $(this).siblings('ul').addClass("scroll");
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $("#gnb"),
                    gnbUl = gnb.children('ul');
                
                gnbUl.removeClass("scroll");
            });//.endBox>i.on'click'
            
            /* article tabs fn */
            $("#tabs").tabs();
            
            var tabsB = $(".best_box"),
                tabsN = $(".new_box");
            
            tabsN.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().addClass("tabs_best");
                    tabsB.addClass("click_best");
                    tabsN.parent().addClass("tabs_new");
                    tabsN.addClass("click_new");
               });
            
            tabsB.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().removeClass("tabs_best");
                    tabsB.removeClass("click_best");
                    tabsN.parent().removeClass("tabs_new");
                    tabsN.removeClass("click_new");
               });
            
            
            
        }//winW <= 679
        
        
        else if( 680 <= winW <= 959 ){
            
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
            
            /* article tabs fn */
            $("#tabs").tabs();
            
            var tabsB = $(".best_box"),
                tabsN = $(".new_box");
            
            tabsN.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().addClass("tabs_best");
                    tabsB.addClass("click_best");
                    tabsN.parent().addClass("tabs_new");
                    tabsN.addClass("click_new");
               });
            
            tabsB.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().removeClass("tabs_best");
                    tabsB.removeClass("click_best");
                    tabsN.parent().removeClass("tabs_new");
                    tabsN.removeClass("click_new");
               });
            
        }//680 <= winW <= 959
        
        
        else if( 960 <= winW ){

            /* main menu slideUp*/
            $('#mainBox').on("mouseenter",function(){
                $(this).stop().animate({'margin-top': 0}, 500);
            });//h1.mouseenter
            
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
            
            
            /* article tabs fn */
            $("#tabs").tabs();
            
            var tabsB = $(".best_box"),
                tabsN = $(".new_box");
            
            tabsN.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().addClass("tabs_best");
                    tabsB.addClass("click_best");
                    tabsN.parent().addClass("tabs_new");
                    tabsN.addClass("click_new");
               });
            
            tabsB.on("click",function(){
                    var tabsB = $(".best_box"),
                        tabsN = $(".new_box");
                    
                    tabsB.parent().removeClass("tabs_best");
                    tabsB.removeClass("click_best");
                    tabsN.parent().removeClass("tabs_new");
                    tabsN.removeClass("click_new");
               });
            
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