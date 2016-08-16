$(document).ready(function(){

    
    
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
                $(".mos_sns").css({"margin-top":"97.2vw"});
                $(".mos_sitemap").css({"margin-top":"111.1vw"});
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $(".mos_gnb"),
                    gnbUl = gnb.children('ul');
                
                $('h1').animate({"z-index":"300"},400);
                gnbUl.animate({left:"-100%"},1000);
            });//.endBox>i.on'click'
            
            /* main menu slide down*/
            $(".mos_subM").hide();
            $(".mos_main").children('li').on('click',function(){
                $(".sub_menu").stop().slideUp(300);
                $(this).children(".mos_subM").stop().slideDown(300);
                $(".mos_sns").animate({"margin-top":"111.1vw"},500);
                $(".mos_sitemap").animate({"margin-top":"125vw"},500);
            });
            
            /* login popup page */
            $(".mos_sitemap").children("li").eq(0).on("click",function(){
                window.open("./login_pop.html","Login","width=340, height=100%, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
            
            /* map list */
            $("#selectBox").tabs();
            $(".select_list").children("li").stop().hide();
            $(".select_list").children("li").eq(0).stop().show();
            $(".point_btn").on("click",function(){
                $(".select_list").css({height: "auto" , position : "absolute" , "z-index" : "500", left: 25 + "vw"});
                $(this).css({position : "absolute" , "z-index" : "500", left: 80.5 + "vw"})
                $(".select_list").children("li").stop().show();
                $(".select_list").children("li").on("click",function(){
                    $(".select_list").children("li").stop().hide();
                    $(this).stop().show();
                })
            });
            
            /* info click */
            var btnDT = $(".click_mos").children('dt'),
                DD = $(".click_mos").children('dd');
    
            DD.hide();
            
            btnDT.on("click",function(){
                var parDL = $(this).parent('dl');
                
                DD.stop().hide();
                $('fieldset').stop().removeClass('field_mos');
                $('.ask_mos').stop().removeClass('arti_mos');
                $('.right_mos').stop().removeClass('div_mos');
                btnDT.stop().css({"border-radius": 8 });
                
                $(this).stop().css({"border-bottom-left-radius":0 , "border-bottom-right-radius":0 });
                $(this).next('dd').stop().slideDown(600);
                parDL.parent('fieldset').stop().addClass('field_mos');
                $('.ask_mos').stop().addClass('arti_mos');
                $('.right_mos').stop().addClass('div_mos').css({"margin-top":0});
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
                window.open("./login_pop.html","Login","width=540, height=350, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
            
            /* info click */
            var btnDT = $(".click_tab").children('dt'),
                DD = $(".click_tab").children('dd');
    
            DD.hide();
            
            btnDT.on("click",function(){
                var parDL = $(this).parent('dl');
                
                DD.stop().hide();
                $('fieldset').stop().removeClass('field_tab');
                $('.ask_tab').stop().removeClass('arti_tab');
                $('.right_tab').stop().removeClass('div_tab');
                btnDT.stop().css({"border-radius": 8 });
                
                $(this).stop().css({"border-bottom-left-radius":0 , "border-bottom-right-radius":0 });
                $(this).next('dd').stop().slideDown(600);
                parDL.parent('fieldset').stop().addClass('field_tab');
                $('.ask_tab').stop().addClass('arti_tab');
                $('.right_tab').stop().addClass('div_tab').css({"margin-top":0});
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
                window.open("./login_pop.html","Login","width=540, height=350, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
            
            
            /* info click */
            var btnDT = $(".click_pc").children('dt'),
                DD = $(".click_pc").children('dd');
    
            DD.hide();
            
            btnDT.on("click",function(){
                var parDL = $(this).parent('dl');
                
                DD.stop().hide();
                $('fieldset').stop().height(80);
                $('.ask_pc').stop().height(600);
                $('.right_pc').stop().height(160);
                btnDT.stop().css({"border-radius": 8 });
                
                $(this).stop().css({"border-bottom-left-radius":0 , "border-bottom-right-radius":0 });
                $(this).next('dd').stop().slideDown(600);
                parDL.parent('fieldset').stop().height(720);
                $('.ask_pc').stop().height(900);
                $('.right_pc').stop().height(820).css({"margin-top":0});
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
    
