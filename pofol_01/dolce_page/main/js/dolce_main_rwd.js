$(document).ready(function(){
    

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
    
    $("#searchPopup").hide();
    
    $(".search_button").on("click",function(){
        $("#searchPopup").show();
    })
    
    $(".close_box").on("click",function(){
        $("#searchPopup").hide();
    })
    
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
        startBtn();
        
        function stopBtn(){clearInterval(timer)};
        
        $("#banner").on({ 'mouseover' : stopBtn, 'mouseout': startBtn });
        
    };//function banner()
    
    banner();
    
    
    /* 반응형 부분 */
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
        
        if(winW <= 679){
            
            /* main menu icon click*/
            var gnb = $(".mos_gnb"),
                gnbH2 = gnb.children(".mos_h2"),
                gnbMainEndI = gnb.children(".mos_main").children(".mos_end").children(".mos_i");
            
            gnbH2.on('click',function(){
                
                $('h1').css({"z-index":"100"});
                $(this).siblings('ul').animate({left:0},1000);
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $(".mos_gnb"),
                    gnbUl = gnb.children('ul');
                
                $('h1').css({"z-index":"300"});
                gnbUl.animate({left:"-100%"},1000);
            });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".mos_subM").hide();
            $(".mos_main").children('li').on('click',function(){
                $(this).children(".mos_subM").stop().slideToggle(300);
            });
            
            /* login popup page */
            $(".mos_sitemap").children("li").eq(0).on("click",function(){
                window.open("../popup/popup.html","Login","width=340, height=100%, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });

        }//winW <= 679
        
        else if( winW >=680 && winW <= 959 ){
            
            /* main menu icon click*/
            var gnb = $(".tab_gnb"),
                gnbH2 = gnb.children(".tab_h2"),
                gnbMainEndI = gnb.children(".tab_main").children(".tab_end").children(".tab_i");
            
            gnbH2.on('click',function(){
                var snsB = $(".tab_sns"),
                    mainB = $(".tab_main");
                
                snsB.animate({left:0},1000);
                mainB.animate({left:0},1000);
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $(".tab_gnb"),
                    gnbsnsB = gnb.children(".tab_sns"),
                    gnbmainB = gnb.children(".tab_main");
                
                gnbsnsB.animate({left:"-100%"},1000);
                gnbmainB.animate({left:"-100%"},1000);
             });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".tab_subM").hide();
            $(".tab_main").children('li').on('click',function(){
                $(this).children(".tab_subM").stop().slideToggle(300);
            });
            
            
            /* login popup page */
            $(".tab_sitemap").children("li").eq(0).on("click",function(){
                window.open("../popup/popup.html","Login","width=540, height=350, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
            
            
        }//680 <= winW <= 959
    
        else {

            /* main menu slideUp*/
            $('.pc_main').on("mouseenter",function(){
//                $('h1').stop().fadeOut(300);
                $(this).stop().animate({'margin-top': 0 }, 500).children('li').children('a').addClass("red");
            }).on('mouseleave', function(){
//                $('h1').stop().fadeIn(300);
                $(this).stop().animate({'margin-top': 84}, 500).children('li').children('a').removeClass("red");
            });//#mainBox.hover
            
            
            /* login popup page */
            $(".pc_sitemap").children("li").eq(0).on("click",function(){
                window.open("../popup/popup.html","Login","width=540, height=350, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
        }// 960 <= winW
        
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
    
