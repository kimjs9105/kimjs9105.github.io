$(document).on("ready",function(){
    
    /* window height에 따라 index height 설정 */
    var indexHeight = function(){
        
        var WinH = $(window).height();
    
        $("#section_pofol").css({height: WinH, overflow: "hidden"});
            
    };    
    
    
    /* main menu click 시 menu 나오기 - 560px 초과 */
    var mainMenuBig = function(){
        
        var menuIconPC = $(".nav_btn_pc"),
            closeIconPC = $(".close_btn_pc"),
            menuBoxPC = $(".menu_box_pc"),
            navBackPC = $(".nav_back_pc");

        var menuTitle_secPC = $(".menuList_pc").eq(1), 
            subMenuPC = $(".subMenuList_pc"),
            subTitlePC = subMenuPC.children('dt'),
            subListPC = subMenuPC.children('dd');

        subListPC.hide();

        menuIconPC.on("click",function(){

            $(this).css({zIndex: 600}).removeClass("nav_btn").addClass("cross_btn");
            menuBoxPC.stop().animate({marginRight:0}, 1000);
            closeIconPC.css({zIndex : 700});
            navBackPC.css({right: 0});
            
        });

        menuTitle_secPC.on("click",function(){

            $(this).stop().animate({height: 270}, 1000);
            subMenuPC.stop().animate({height: 270}, 1000);
            subTitlePC.children('.menuLine').addClass("lineBlock");
            subListPC.show();

        });

        menuTitle_secPC.on("mouseleave",function(){

            $(this).stop().animate({height: 80}, 1000);
            subMenuPC.stop().animate({height: 80}, 1000);
            subTitlePC.children('.menuLine').removeClass("lineBlock");
            subListPC.hide();
        });

        closeIconPC.on("click",function(){

            $(this).css({zIndex: 200});
            menuIconPC.removeClass("cross_btn").addClass("nav_btn");
            menuBoxPC.stop().animate({marginRight: -250}, 1000);
            navBackPC.css({right: "-100%"});
            menuTitle_secPC.css({height: 80});
            subMenuPC.css({height: 80});
            subTitlePC.children('.menuLine').removeClass("lineBlock");
            subListPC.hide();

        });
        
        navBackPC.on("click",function(){

            closeIconPC.css({zIndex: 200});
            menuIconPC.removeClass("cross_btn").addClass("nav_btn");
            menuBoxPC.stop().animate({marginRight: -250}, 1000);
            $(this).css({right: "-100%"});
            menuTitle_secPC.css({height: 80});
            subMenuPC.css({height: 80});
            subTitlePC.children('.menuLine').removeClass("lineBlock");
            subListPC.hide();

        });
    
    };
    
    
    /* main menu click 시 menu 나오기 - 560px 이하 */
    var mainMenuSmall = function(){
        
        var menuIconM = $(".nav_btn_mob"),
            closeIconM = $(".close_btn_mob"),
            menuBoxM = $(".menu_box_mob"),
            navBackM = $(".nav_back_mob");

        var menuTitle_secM = $(".menuList_mob").eq(1), 
            subMenuM = $(".subMenuList_mob"),
            subTitleM = subMenuM.children('dt'),
            subListM = subMenuM.children('dd');

        subListM.hide();

        menuIconM.on("click",function(){

            $(this).css({zIndex: 600}).removeClass("nav_btn").addClass("cross_btn");
            menuBoxM.stop().animate({marginRight:0}, 1000);
            closeIconM.css({zIndex : 700});
            navBackM.css({right: 0});

        });

        menuTitle_secM.on("click",function(){

            $(this).stop().animate({height: 220}, 1000);
            subMenuM.stop().animate({height: 220}, 1000);
            subListM.show();

        });

        menuTitle_secM.on("mouseleave",function(){

            $(this).stop().animate({height: 60}, 1000);
            subMenuM.stop().animate({height: 60}, 1000);
            subListM.hide();
        });

        closeIconM.on("click",function(){

            $(this).css({zIndex: 200});
            menuIconM.removeClass("cross_btn").addClass("nav_btn");
            menuBoxM.stop().animate({marginRight: -250}, 1000);
            navBackM.css({right: "-100%"});
            menuTitle_secM.css({height: 60});
            subMenuM.css({height: 60});
            subListM.hide();

        });
        
        navBackM.on("click",function(){

            closeIconM.css({zIndex: 200});
            menuIconM.removeClass("cross_btn").addClass("nav_btn");
            menuBoxM.stop().animate({marginRight: -250}, 1000);
            $(this).css({right: "-100%"});
            menuTitle_secM.css({height: 60});
            subMenuM.css({height: 60});
            subListM.hide();

        });
    
    };
    
    
    /* main menu restart */
    var menuRestart = function(){
        
        var menuIcon = $(".cross_btn"),
            closeIcon = $(".close_btn"),
            menuBox = $(".menu_box");
        
            closeIcon.css({zIndex: 200});
            menuIcon.removeClass("cross_btn").addClass("nav_btn");
            menuBox.stop().css({marginRight: -250}, 1000);
        
    };
    
    
    /* Portfolio btn click show portfolio */
    var port_btn_pub = function(){
        
        let publish = $(".pub_btn"),
            pub_back_line = $(".publ_line"),
            pub_mark_line = $(".mark_line"),
            publish_box = $(".publish_bg_box"),
            design = $(".des_btn"),
            des_back_box = $(".design_color"),
            des_mark_box = $(".mark_color"),
            design_box = $(".design_bg_box"),
            all = $(".allPF"),
            all_line = $(".all_line"),
            all_text = $(".all_text"),
            showSection = $("#section_pofol"),
            pofolSection = $(".portfolio_list"),
            pub_bg = $(".pub_bg"),
            des_bg = $(".des_bg"),
            all_bg = $(".all_bg"),
            pofol_title = $(".pofol_title"),
            title_box = $(".title_box"),
            p_title = $(".pub_title"),
            pofol_box = $(".pofol_list_box"),
            p_type = $(".pub_type"),
            d_type = $(".des_type"),
            pd_type = $(".PD_type"),
            header = $('header'),
            footer = $('footer');
        
        publish.on("click",function(){
            
            /*publish box*/
            $(this).find(".btn_line").animate({width : 0, height: 0}, 1000);
            $(this).find(".btn_text").hide(1000);
            pub_back_line.animate({width : 0, height: 0}, 1000);
            pub_mark_line.animate({width : 0, height: 0}, 1000);
                        
            /*design box*/
            design.hide();
            des_back_box.hide();
            des_mark_box.hide();   
            
            /*all box*/
            all.hide();
            all_line.hide();
            all_text.hide();   
            
            /*box width change*/
            publish_box.delay(1000).animate({width : 100 + "%"}, 1000, function(){
                
                header.css({backgroundColor : "#595959"});
                
                showSection.hide();
                pofol_title.css({opacity: 0});
                pofol_box.css({opacity: 0});
                p_type.css({opacity: 0});
                pd_type.css({opacity: 0});
                d_type.hide();
                
                pub_bg.css({opacity: 1});
                des_bg.hide();
                all_bg.hide();
                
                pofolSection.show(function(){
                    
                    title_box.css({display: "none"});
                    p_title.css({display: "block"});
                    
                    pofol_title.delay(300).animate({opacity: 1}, 500, function(){

                        pofol_box.animate({opacity: 1}, 500, function(){

                            p_type.animate({opacity: 1}, 500);
                            pd_type.animate({opacity: 1}, 500);
                            footer.css({display: "block"});

                        });
                    });
                });
                
            });
            
            design_box.delay(1000).animate({width : 0}, 1000);
            
        });//publish_btn click
        
    };//port_btn_pub()
    
    var port_btn_des_pc = function(){
        
        let publish = $(".pub_btn"),
            pub_back_line = $(".publ_line"),
            pub_mark_line = $(".mark_line"),
            publish_box = $(".publish_bg_box"),
            design = $(".des_btn"),
            des_back_box = $(".design_color"),
            des_mark_box_pc = $(".mark_color_pc"),
            design_box = $(".design_bg_box"),
            all = $(".allPF"),
            all_line = $(".all_line"),
            all_text = $(".all_text"),
            showSection = $("#section_pofol"),
            pofolSection = $(".portfolio_list"),
            pub_bg = $(".pub_bg"),
            des_bg = $(".des_bg"),
            all_bg = $(".all_bg"),
            pofol_title = $(".pofol_title"),
            title_box = $(".title_box"),
            d_title = $(".des_title"),
            pofol_box = $(".pofol_list_box"),
            p_type = $(".pub_type"),
            d_type = $(".des_type"),
            pd_type = $(".PD_type"),
            header = $('header'),
            footer = $('footer');
        
        
        design.on("click",function(){
            
            /*publish box*/
            $(this).find(".btn_line").animate({width : 0, height: 0}, 1000);
            $(this).find(".btn_text").hide(1000);
            des_back_box.animate({opacity: 0}, 1000);
            $(".MC_num_00").animate({opacity: 0}, 500);
            des_mark_box_pc.animate({width : 25, height: 25}, 500,function(){
                des_mark_box_pc.animate({width : 0, height: 0}, 500);
            });
            
                        
            /*publish box*/
            publish.hide();
            pub_back_line.hide();
            pub_mark_line.hide();   
            
            /*all box*/
            all.hide();
            all_line.hide();
            all_text.hide();   
            
            /*box width change*/
            design_box.delay(1000).animate({width : 100 + "%"}, 1000, function(){
                
                header.css({backgroundColor : "#595959"});
                
                showSection.hide();
                pofol_title.css({opacity: 0});
                pofol_box.css({opacity: 0});
                p_type.hide();
                pd_type.css({opacity: 0});
                d_type.css({opacity: 0});
                
                pub_bg.hide();
                des_bg.css({opacity: 1});
                all_bg.hide();
                
                pofolSection.show(function(){
                    
                    title_box.css({display: "none"});
                    d_title.css({display: "block"});                   
                    
                    pofol_title.delay(300).animate({opacity: 1}, 500, function(){

                        pofol_box.animate({opacity: 1}, 500, function(){

                            d_type.animate({opacity: 1}, 500);
                            pd_type.animate({opacity: 1}, 500);
                            footer.css({display: "block"});

                        });
                    });
                });
                
            });
            
            publish_box.delay(1000).animate({width : 0}, 1000);
            
        });//Dedign_btn click
        
    };//port_btn_des_pc()
    
    var port_btn_des_mob = function(){
        
        let publish = $(".pub_btn"),
            pub_back_line = $(".publ_line"),
            pub_mark_line = $(".mark_line"),
            publish_box = $(".publish_bg_box"),
            design = $(".des_btn"),
            des_back_box = $(".design_color"),
            des_mark_box_all = $(".mark_color"),
            des_mark_box_mob = $(".mark_color_mob"),
            design_box = $(".design_bg_box"),
            all = $(".allPF"),
            all_line = $(".all_line"),
            all_text = $(".all_text"),
            showSection = $("#section_pofol"),
            pofolSection = $(".portfolio_list"),
            pub_bg = $(".pub_bg"),
            des_bg = $(".des_bg"),
            all_bg = $(".all_bg"),
            pofol_title = $(".pofol_title"),
            title_box = $(".title_box"),
            d_title = $(".des_title"),
            pofol_box = $(".pofol_list_box"),
            p_type = $(".pub_type"),
            d_type = $(".des_type"),
            pd_type = $(".PD_type"),
            header = $('header'),
            footer = $('footer');
        
        des_mark_box_all.hide();
        des_mark_box_mob.show();
        $('.MC_num_00').show();
        
        design.on("click",function(){
            
            /*publish box*/
            $(this).find(".btn_line").animate({width : 0, height: 0}, 1000);
            $(this).find(".btn_text").hide(1000);
            des_back_box.animate({opacity: 0}, 1000);
            $(".MC_num_00").animate({opacity: 0}, 500);
            des_mark_box_all.hide();
            des_mark_box_mob.animate({width : 70, height: 70}, 500,function(){
                des_mark_box_mob.animate({width : 0, height: 0}, 500);
            });
            
                        
            /*publish box*/
            publish.hide();
            pub_back_line.hide();
            pub_mark_line.hide();   
            
            /*all box*/
            all.hide();
            all_line.hide();
            all_text.hide();   
            
            /*box width change*/
            design_box.delay(1000).animate({width : 100 + "%"}, 1000, function(){
                
                header.css({backgroundColor : "#595959"});
                
                showSection.hide();
                pofol_title.css({opacity: 0});
                pofol_box.css({opacity: 0});
                p_type.hide();
                pd_type.css({opacity: 0});
                d_type.css({opacity: 0});
                
                pub_bg.hide();
                des_bg.css({opacity: 1});
                all_bg.hide();
                
                pofolSection.show(function(){
                    
                    title_box.css({display: "none"});
                    d_title.css({display: "block"});                   
                    
                    pofol_title.delay(300).animate({opacity: 1}, 500, function(){

                        pofol_box.animate({opacity: 1}, 500, function(){

                            d_type.animate({opacity: 1}, 500);
                            pd_type.animate({opacity: 1}, 500);
                            footer.css({display: "block"});

                        });
                    });
                });
                
            });
            
            publish_box.delay(1000).animate({width : 0}, 1000);
            
        });//Dedign_btn click
        
    };//port_btn_des_mob()
    
    var port_btn_all = function(){
        
        let publish = $(".pub_btn"),
            pub_back_line = $(".publ_line"),
            pub_mark_line = $(".mark_line"),
            publish_box = $(".publish_bg_box"),
            design = $(".des_btn"),
            des_back_box = $(".design_color"),
            des_mark_box = $(".mark_color"),
            design_box = $(".design_bg_box"),
            all = $(".allPF"),
            all_line = $(".all_line"),
            all_text = $(".all_text"),
            showSection = $("#section_pofol"),
            pofolSection = $(".portfolio_list"),
            pub_bg = $(".pub_bg"),
            des_bg = $(".des_bg"),
            all_bg = $(".all_bg"),
            pofol_title = $(".pofol_title"),
            title_box = $(".title_box"),
            all_title = $(".all_title"),
            pofol_box = $(".pofol_list_box"),
            p_type = $(".pub_type"),
            d_type = $(".des_type"),
            pd_type = $(".PD_type"),
            header = $('header'),
            footer = $('footer');
        
        all.on("click",function(){
            
            /*publish box*/
            publish.hide();
            pub_back_line.animate({opacity : 0}, 1000);
            pub_mark_line.animate({opacity : 0}, 1000);
                        
            /*design box*/
            design.hide();
            des_back_box.animate({opacity : 0}, 1000);
            des_mark_box.animate({opacity : 0}, 1000);
            
            /*all box*/
            all.hide();
            all_line.hide();
            all_text.hide();   
            
            /*box width change*/
            publish_box.animate({opacity: 0}, 1000, function(){
                           
                pub_back_line.hide();
                pub_mark_line.hide();
                des_back_box.hide();
                des_mark_box.hide();
                
                header.css({backgroundColor : "#595959"});
                
                showSection.hide();
                pofol_title.css({opacity: 0});
                pofol_box.css({opacity: 0});
                p_type.css({opacity: 0});
                pd_type.css({opacity: 0});
                d_type.css({opacity: 0});
                
                pub_bg.hide();
                des_bg.hide();
                all_bg.css({opacity: 1});
                
                pofolSection.show(function(){
                    
                    title_box.css({display: "none"});
                    all_title.css({display: "block"});
                    
                    pofol_title.delay(300).animate({opacity: 1}, 500, function(){

                        pofol_box.animate({opacity: 1}, 500, function(){

                            p_type.animate({opacity: 1}, 500);
                            pd_type.animate({opacity: 1}, 500);
                            d_type.animate({opacity: 1}, 500);
                            footer.css({display: "block"});

                        });
                    });
                });
                
            });
            
            design_box.animate({opacity: 0}, 1000);
            
        });//All_btn click
        
    };//port_btn_all()
    
    
    /* Portfolio List click change group */
    var change_btn = function(){
        
        let pub_b = $(".other_pub"),
            des_b = $(".other_des"),
            all_b = $(".other_all"),
            p_type = $(".pub_type"),
            d_type = $(".des_type"),
            a_type = $(".PD_type"),
            pofol_bg = $(".pofol_bgc"),
            pub_bg = $(".pub_bg"),
            des_bg = $(".des_bg"),
            all_bg = $(".all_bg"),
            pofol_title = $(".pofol_title"),
            title_box = $(".title_box"),
            p_title = $(".pub_title"),
            d_title = $(".des_title"),
            all_title = $(".all_title"),
            pofol_box = $(".pofol_list_box");
        
        pub_b.on("click",function(){
            
            pofol_bg.animate({opacity: 0}, 500,function(){
                pofol_bg.css({display: "none"});
                pub_bg.css({display: "block"}).animate({opacity: 1}, 500);
            });

            pofol_box.animate({opacity: 0}, 500, function(){
                
                p_type.show().css({opacity: 0});
                a_type.show().css({opacity: 0});
                d_type.hide();
                
            });
            pofol_title.animate({opacity: 0}, 500,function(){
                
                title_box.css({display: "none"});
                p_title.css({display: "block"});
                
            });
            
            pofol_title.delay(500).animate({opacity: 1}, 500, function(){
                
                pofol_box.animate({opacity: 1}, 500, function(){

                    
                    p_type.animate({opacity: 1}, 500);
                    a_type.animate({opacity: 1}, 500);

                });
            });
            
        });//pubish list btn
        
        des_b.on("click",function(){
            
            pofol_bg.animate({opacity: 0}, 500,function(){
                pofol_bg.css({display: "none"});
                des_bg.css({display: "block"}).animate({opacity: 1}, 500);
            });

            pofol_box.animate({opacity: 0}, 500, function(){
                
                p_type.hide();
                a_type.show().css({opacity: 0});
                d_type.show().css({opacity: 0});
                
            });
            pofol_title.animate({opacity: 0}, 500,function(){
                
                title_box.css({display: "none"});
                d_title.css({display: "block"});
                
            });
            
            pofol_title.delay(500).animate({opacity: 1}, 500, function(){
                
                pofol_box.animate({opacity: 1}, 500, function(){

                    
                    d_type.animate({opacity: 1}, 500);
                    a_type.animate({opacity: 1}, 500);

                });
            });
            
        });//design list btn
        
        all_b.on("click",function(){
            
            pofol_bg.animate({opacity: 0}, 500,function(){
                pofol_bg.css({display: "none"});
                all_bg.css({display: "block"}).animate({opacity: 1}, 500);
            });
            

            pofol_box.animate({opacity: 0}, 500, function(){
                
                p_type.show().css({opacity: 0});
                a_type.show().css({opacity: 0});
                d_type.show().css({opacity: 0});
                
            });
            pofol_title.animate({opacity: 0}, 500,function(){
                
                title_box.css({display: "none"});
                all_title.css({display: "block"});
                
            });
            
            pofol_title.delay(500).animate({opacity: 1}, 500, function(){
                
                pofol_box.animate({opacity: 1}, 500, function(){

                    p_type.animate({opacity: 1}, 500);
                    d_type.animate({opacity: 1}, 500);
                    a_type.animate({opacity: 1}, 500);

                });
            });
            
        });//design list btn
        
    };//change_btn()
    
    
    //js responsive setting
    
    //window width 로딩시 기준
    var winW = $(window).width();
    
    //공통 요소 
    indexHeight();
    menuRestart();
    port_btn_pub();
    port_btn_all();
    change_btn();
//    scrollTop();
    
    if( winW >= 751 ){
            
        mainMenuBig();
        port_btn_des_pc();
            
    }
    
    if( 560 < winW <= 751 ){
        
        mainMenuBig();
        port_btn_des_pc();
        
    }
    
    if( winW <= 560 ){
        
        mainMenuSmall();
        port_btn_des_mob();
        
    }
    
    //window width 값 변경시 기준
    
    $(window).resize(function(){
        
        
        //공통 요소 
        menuRestart();
        indexHeight();
        port_btn();
        change_btn();
        
        var winW = $(window).width();
    
        if( winW > 751 ){

            mainMenuBig();

        }

        if( 560 < winW <= 751){

            mainMenuBig();

        }
        
        if( winW <= 560 ){
        
            mainMenuSmall();
        
        }
        
    });
    
});//document