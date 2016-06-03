$(document).ready(function(){
    
    var onePage = function(){
        var gnb_a = $("#nav_box").find('a');
        gnb_a.on("click",function(e){
            e.preventDefault();
            var a_hash = $(this.hash),
                offset_top = a_hash.offset().top,
                bodyBox = $("html,body");
            bodyBox.animate({scrollTop:offset_top + 220},1000);
        });
    };

    onePage();

    
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
                
                $(this).siblings('ul').addClass("scroll");
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $(".mos_gnb"),
                    gnbUl = gnb.children('ul');
                
                gnbUl.removeClass("scroll");
            });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".mos_subM").hide();
            $(".mos_main").children('li').on('click',function(){
                $(this).children(".mos_subM").stop().slideToggle(300);
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
                
                snsB.addClass("scroll")
                mainB.addClass("scroll");
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $(".tab_gnb"),
                    gnbsnsB = gnb.children(".tab_sns"),
                    gnbmainB = gnb.children(".tab_main");
                
                gnbsnsB.removeClass("scroll")
                gnbmainB.removeClass("scroll");
             });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".tab_subM").hide();
            $(".tab_main").children('li').on('click',function(){
                $(this).children(".tab_subM").stop().slideToggle(300);
            });
            
            
            
            
        }//680 <= winW <= 959
    
        else {

            /* main menu slideUp*/
            $('.pc_main').on("mouseenter",function(){
//                $('h1').stop().fadeOut(300);
                $(this).stop().animate({'margin-top': 0 }, 500).children('li').children('a').addClass("red");
            }).on('mouseleave', function(){
//                $('h1').stop().fadeIn(300);
                $(this).stop().animate({'margin-top': 80}, 500).children('li').children('a').removeClass("red");
            });//#mainBox.hover
            
            /* sitemebBox */
//            var siteBtn = $("#sitemebBox").children('li').eq(2).children('button');
//            siteBtn.on('click',function(){
//                $(this).html('a').attr({"src":"./basic/dolcegusto_join/dolcegusto_join.html"});
//            });
//           
            
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
    
