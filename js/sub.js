$(document).on("ready",function(){
    
    /*resume page pc version section, div height*/
    var resumeHeight = function(){
        
        var winH = $(window).height(),
            headerH = 100,
            divH = winH - headerH,
            resumeBox = $(".resume_box"),
            section_resume = $(".resume_section");
        
        resumeBox.css({height : divH - 60 });
        section_resume.css({height : divH * 6});
    };//resumeHeight()
    
    /*resume page pc version section Button*/
    var resume_btn = function(){
        
        var secbtn = $(".section_btn"),
            secbtn_W = $(".btn_color_W"),
            secbtn_B = $(".btn_color_B");
        
        secbtn_W.on("click",function(e){
            
            e.preventDefault();
            
            /*해당 section scrollTop 설정*/
            var btn = $(this).index() + 1,
                allBox = $('html, body'),
                resumeBoxH = $(".resume_box").height(),
                resumeCount = btn - 1,
                resumeH = resumeBoxH * resumeCount,
                headC = 60 * resumeCount;    
            
            allBox.stop().animate({'scrollTop': resumeH + headC}, 1500);
            
            /*전체 span/img 설정*/
            secbtn.children('span').css({display: "block", border : "3px solid #fff"});
            secbtn.children('img').css({display: "none"});
            
            
            /* 해당 li > span/img 설정 */
            var clickLink = $(this).children(".section_btn");
            
            clickLink.children('span').css({display: "none"});
            clickLink.children('img').css({display: "block"});
                        
        });
        
        secbtn_B.on("click",function(e){
                 
            e.preventDefault();
            
            /*해당 section scrollTop 설정*/
            var btn = $(this).index() + 1,
                allBox = $('html, body'),
                resumeBoxH = $(".resume_box").height(),
                resumeCount = btn - 1,
                resumeH = resumeBoxH * resumeCount,
                headC = 60 * resumeCount;
                        
            allBox.stop().animate({scrollTop: resumeH + headC}, 1500);
            
            
            /*전체 span/img 설정*/
            secbtn.children('span').css({display: "block", border : "3px solid #292929"});
            secbtn.children('img').css({display: "none"});
            
            
            /* 해당 li > span/img 설정 */
            var clickLink = $(this).children(".section_btn");
            
            clickLink.children('span').css({display: "none"});
            clickLink.children('img').css({display: "block"});
            
        });
        
    };//resume_btn()
    
    
    /* resume page pc version scroll up / down */
    var resume_scroll = function(){
        
        var sectionDiv = $(".resume_box");
        
        sectionDiv.on("mousewheel",function(event,scroll){
            
            if(scroll > 0){
                var prev = $(this).prev().offset().top,
                    prevValue = prev - 100;
                $('html,body').stop().animate({'scrollTop':prevValue},1000,"easeInSine");
                
            }else if(scroll < 0){
                
                var next = $(this).next().offset().top,
                    nextValue = next - 100;
                $('html,body').stop().animate({'scrollTop':nextValue},1000,"easeInSine");

            }
        });
        
    };//resume_scroll()
    

    /* resume page pc version scroll -> btn change css */
    var resume_change = function(){
        
        var div00 = $("#resumeDiv00"),
            div01 = $("#resumeDiv01"),
            div02 = $("#resumeDiv02"),
            div03 = $("#resumeDiv03"),
            div04 = $("#resumeDiv04"),
            div05 = $("#resumeDiv05");
        
        div00.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                //결과없음
                                
            }else if(D < 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(1);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #292929"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});

            }
            
        });//div00.scroll
        
        div01.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(0);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});
                                
            }else if(D < 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(2);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});

            }
            
        });//div01.scroll
        
        div02.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(1);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #292929"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});
                                
            }else if(D < 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(3);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});

            }
            
        });//div02.scroll
        
        div03.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(2);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});
                                
            }else if(D < 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(4);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #292929"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});

            }
            
        });//div03.scroll
        
        div04.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(3);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});
                                
            }else if(D < 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(5);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #fff"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});

            }
            
        });//div04.scroll
        
        div05.on("mousewheel",function(event,D){
            
            if(D > 0){
                
                var secbtn = $(".list_btn"),
                    thisBtn = secbtn.children('li').eq(4);
                
                /*전체 span/img 설정*/
                secbtn.find('span').css({display: "block", border : "3px solid #292929"});
                secbtn.find('img').css({display: "none"});
                
                thisBtn.find('span').css({display: "none"});
                thisBtn.find('img').css({display: "block"});
                                
            }else if(D < 0){
                
                //결과없음
            }
            
        });//div05.scroll
        
        
    };//resume_change()
    
    
    /* contact page height */
    var contactH_large = function(){
        
        var winH = $(window).height(),
            contactSec = $(".contact_section");
        
        contactSec.css({height : winH});
        
    };//contactH_large()
    
    var contactH_small = function(){
        
        var winH = $(window).height(),
            contactSec = $(".contact_section");
        
        contactSec.css({height : winH - 60, minHeight: 550});
        
    };//contactH_small();
    
    /* portfolio page gallery */
    var main_show_box = $('.workN_show'),
        img_list_box = $('.workN_list');

    var first_box = img_list_box.children('li').eq(0),
        first_img = first_box.find('img').attr('src'),
        first_title = first_box.find('dt').text(),
        first_text = first_box.find('dd').text();

        main_show_box.find('img').attr('src', first_img);
        main_show_box.find('dt').text(first_title);
        main_show_box.find('dd').text(first_text);
    
    //이미지 가운데 정렬    
    var mainboxW = main_show_box.width(),
        mainboxH = main_show_box.height(),
        imgW = first_box.find('img').width(),
        imgH = first_box.find('img').height();

    if(imgW > imgH){

        if(imgW >= mainboxW){

            main_show_box.find('img').css({width: "95%", height: 'auto'});
            
            var rebox = $('.workN_show').find('img'),
                newW = rebox.width(),
                newH = rebox.height();

            main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

        }

        var rebox_non = $('.workN_show').find('img'),
            newW_non = rebox_non.width(),
            newH_non = rebox_non.height();

        main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});

    }else if(imgH > imgW){

        if(imgH >= mainboxW){

            main_show_box.find('img').css({width: 'auto', height: "95%"});
            
            var rebox = $('.workN_show').find('img'),
                newW = rebox.width(),
                newH = rebox.height();

            main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

        }

        var rebox_non = $('.workN_show').find('img'),
            newW_non = rebox_non.width(),
            newH_non = rebox_non.height();

        main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});

    }else if(imgW === imgH){

        if(imgW >= mainboxW){

            main_show_box.find('img').css({width: "95%", height: 'auto'});
            
            var rebox = $('.workN_show').find('img'),
                newW = rebox.width(),
                newH = rebox.height();

            main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

        }

        var rebox_non = $('.workN_show').find('img'),
            newW_non = rebox_non.width(),
            newH_non = rebox_non.height();

        main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});

    }
        
    function gallery(){
        
        img_list_box.children('li').on('click',function(){
            
            var selec_img = $(this).find('img').attr('src'),
                selec_title = $(this).find('dt').text(),
                selec_text = $(this).find('dd').text();
            
            main_show_box.find('img').attr('src', selec_img);
            main_show_box.find('dt').text(selec_title);
            main_show_box.find('dd').text(selec_text);
            
            img_list_box.children('li').find('div').removeClass('checkShow');
            $(this).find('div').addClass('checkShow');
            
            //이미지 가운데 정렬    
            var mainboxW = main_show_box.width(),
                mainboxH = main_show_box.height(),
                imgW = $(this).find('img').width(),
                imgH = $(this).find('img').height();
            
            if(imgW > imgH){

                if(imgW >= mainboxW){

                    main_show_box.find('img').css({width: "95%", height: 'auto'});

                    var rebox = $('.workN_show').find('img'),
                        newW = rebox.width(),
                        newH = rebox.height();

                    main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

                }

                var rebox_non = $('.workN_show').find('img'),
                    newW_non = rebox_non.width(),
                    newH_non = rebox_non.height();

                main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});

            }else if(imgH > imgW){

                if(imgH >= mainboxW){

                    main_show_box.find('img').css({width: 'auto', height: "95%"});

                    var rebox = $('.workN_show').find('img'),
                        newW = rebox.width(),
                        newH = rebox.height();

                    main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

                }

                var rebox_non = $('.workN_show').find('img'),
                    newW_non = rebox_non.width(),
                    newH_non = rebox_non.height();

                main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});


            }else if(imgW === imgH){

                if(imgW >= mainboxW){

                    main_show_box.find('img').css({width: "95%", height: 'auto'});

                    var rebox = $('.workN_show').find('img'),
                        newW = rebox.width(),
                        newH = rebox.height();

                    main_show_box.find('img').css({marginTop: -newH /2, marginLeft: -newW / 2});

                }

                var rebox_non = $('.workN_show').find('img'),
                    newW_non = rebox_non.width(),
                    newH_non = rebox_non.height();

                main_show_box.find('img').css({marginTop: -newH_non /2, marginLeft: -newW_non / 2});


            }
            
        });
        
    }
    
    /* portfolio page popup */
    var link_popup = function(){
        
        var more_btn = $(".more_btn"),
            popup_section = $(".pf_de_popup"),
            popup_box = $(".popup_box");
        
        popup_section.hide();
        popup_box.css({height: 0});
        
        more_btn.on('click',function(){
            
            popup_section.show();
            popup_box.stop().animate({height: 340}, 500);
            
        });
        
        var pop_close = $(".pop_close");
        
        pop_close.on('click',function(){
            
            popup_section.animate({backbroundColor: "transparent"}, 500, function(){
                
                popup_section.stop().hide();
                
            });
            
            popup_box.stop().animate({height: 0}, 500);
            
        });
        
        popup_section.on('click',function(){
            
            popup_section.animate({backbroundColor: "transparent"}, 500, function(){
                
                popup_section.stop().hide();
                
            });
            
            popup_box.stop().animate({height: 0}, 500);
            
        });
        
    };//link_popup();
    
    //window width 로딩시 기준
    var winW = $(window).width();
    
    contactH_large();
    link_popup();
    gallery();
    
    if( winW > 1007 ){
        
        /* resume page */
        resumeHeight();
        resume_btn();
        resume_scroll();
        resume_change();       
        
    }
    
    if( 764 < winW <= 1007 ){
        
        contactH_large();
        
    }
    
    if( winW <= 764 ){
        
        contactH_small();
    }
    
    //window width 값 변경시 기준
    
    $(window).resize(function(){
        
        //공통 요소 
        link_popup();
        gallery();
        
        var winW = $(window).width();
    
        if( winW > 1008 ){
            
            /* resume page */
            resumeHeight();
            resume_btn();
            resume_scroll();
            resume_change();
            contactH_large();
            
        }

        if( 764 < winW <= 1007 ){
        
            contactH_large();

        }

        if( winW <= 764 ){

            contactH_small();
        }
        
    });
});