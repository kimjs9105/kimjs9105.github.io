$(document).ready(function(){
    
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
    });
        
    $(".close_info").on("click",function(){
        $("#popIn").hide();
    });
    
   
    /* article machine fn */
    $("#machineBox").tabs();
    
    var macCoBtn = $(".mac_color").find("dd");
            
    macCoBtn.on("click",function(){
        macCoBtn.children("button").addClass("remove_style").removeClass("add_style");
        $(this).children("button").addClass("add_style");
    });
    
    /* #picol img change */
    $(".mac_list_c01").on("click",function(){
        $("#picol").removeClass("picol_b");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".pi_rc").on("click",function(){$("#picol").removeClass("picol_b")});
    $(".pi_b").on("click",function(){$("#picol").addClass("picol_b")});
    
    /* #mini img change */
    $(".mac_list_c02").on("click",function(){
        $("#mini").removeClass("mini_r").removeClass("mini_b");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".mi_r").on("click",function(){$("#mini").removeClass("mini_b").addClass("mini_r")});
    $(".mi_b").on("click",function(){$("#mini").removeClass("mini_r").addClass("mini_b")});
    $(".mi_wb").on("click",function(){$("#mini").removeClass("mini_r").removeClass("mini_b")});
    
    /* #stell img change */
    $(".mac_list_c03").on("click",function(){
        $("#stell").removeClass("stell_gw").removeClass("stell_ds");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".st_gw").on("click",function(){$("#stell").removeClass("stell_ds").addClass("stell_gw")});
    $(".st_ds").on("click",function(){$("#stell").removeClass("stell_gw").addClass("stell_ds")});
    $(".st_pb").on("click",function(){$("#stell").removeClass("stell_gw").removeClass("stell_ds")});
    
    /* #jobia img change */
    $(".mac_list_c04").on("click",function(){
        $("#jobia").removeClass("jobia_b");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".jo_r").on("click",function(){$("#jobia").removeClass("jobia_b")});
    $(".jo_b").on("click",function(){$("#jobia").addClass("jobia_b")});
    
    /* #drop img change */
    $(".mac_list_c05").on("click",function(){
        $("#drop").removeClass("drop_rm");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".dr_ds").on("click",function(){$("#drop").removeClass("drop_rm")});
    $(".dr_rm").on("click",function(){$("#drop").addClass("drop_rm")});
    
    /* #jinio img change */
    $(".mac_list_c06").on("click",function(){
        $("#jinio").removeClass("jinio_b").removeClass("jinio_s");
        macCoBtn.children("button").removeClass("remove_style").removeClass("add_style");
    });
    $(".ji_r").on("click",function(){$("#jinio").removeClass("jinio_b").removeClass("jinio_s")});
    $(".ji_b").on("click",function(){$("#jinio").removeClass("jinio_s").addClass("jinio_b")});
    $(".ji_s").on("click",function(){$("#jinio").removeClass("jinio_b").addClass("jinio_s")});
    
      
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
                window.open("../popup/popup.html","Login","width=340, height=100%, left=250, top= 250, scrollbars=no, toolbars=no, location=no")
            });
            
            /* article machine fn */
            var macLi = $(".machine_box_mos").find(".mac_list").children("li");
            
            macLi.on("click",function(){
                macLi.children("a").css({ backgroundColor : "transparent" , fontSize : 0 });
                $(this).children("a").css({ backgroundColor : "#ba1822" , fontSize : "3.2vw",  color : "#ffffff" , 
                    textAlign : "center" , lineHeight : "700%" });
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
            
            /* article machine fn */
            var macLi = $(".machine_box_tab").find(".mac_list").children("li");
            
            macLi.on("click",function(){
                macLi.children("a").css({ backgroundColor : "transparent" , fontSize : 0 });
                $(this).children("a").css({ backgroundColor : "#ba1822" , fontSize : "1rem",  color : "#ffffff" , 
                    textAlign : "center" , lineHeight : "600%" });
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
            
            /* article machine fn */
            var macLi = $(".machine_box_pc").find(".mac_list").children("li");
            
            macLi.on("click",function(){
                macLi.children("a").css({ backgroundColor : "transparent" , fontSize : 0 });
                $(this).children("a").css({ backgroundColor : "#ba1822" , fontSize : "1.5rem",  color : "#ffffff" , 
                    textAlign : "center" , lineHeight : "500%" });
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
    
