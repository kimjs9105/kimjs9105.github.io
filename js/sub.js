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
                allBox = $('body'),
                resumeBoxH = $(".resume_box").height(),
                resumeCount = btn - 1,
                resumeH = resumeBoxH * resumeCount,
                headC = 60 * resumeCount;    
            
            allBox.stop().animate({scrollTop: resumeH + headC}, 1500);
            
            
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
                allBox = $('body'),
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
    
    var galleryMainView = function(){
        
        for( c = 0; c < 5; c++ ){
            
            var showBox = $("#gallery_" + c),
                showImg = showBox.children('img'),
                listBox = $("#gallery_list_" + c),
                listImg = listBox.children('li'),
                firstImg = listImg.eq(0).children('img'),
                mainImg = firstImg.attr('src');
            
            showImg.attr('src',mainImg);
                
            var sendBox = listImg.eq(0).children('.send_sum'),
                sendFirTitle = sendBox.children('dt'),
                sendFirText = sendBox.children('dd'),
                showSumBox = showBox.children('.img_sum'),
                showTitle = showSumBox.children('dt'),
                showText = showSumBox.children('dd');

            var mainTitle = sendFirTitle.text(),
                mainText = sendFirText.text();

            showTitle.text(mainTitle);
            showText.text(mainText);
            
            var checkShow = listImg.children(".checkShow"),
                mainCheck = listImg.eq(0).children('.checkShow');
        
            checkShow.hide();
            mainCheck.show();

        }
        
    };//galleryMainView();
    
    
    var galleryClick = function(){
        
        var imgListBox = $(".gallery_list"),
            imgListImg = imgListBox.children('li');
        
        imgListImg.on('click',function(){
            
            var listSec = $(this).closest('section'),
                secGalleryBox = listSec.find(".gallery_show"),
                showGallery = secGalleryBox.children('img'),
                checkShow = $(".checkShow"),
                clickImg = $(this).children('img'),
                linkImg = clickImg.attr('src');
            
            checkShow.hide();
            showGallery.attr('src',linkImg);
            
            var checkShow = imgListImg.children(".checkShow"),
                selectCheck = $(this).children('.checkShow');
            
            checkShow.hide();
            selectCheck.show();
            
        });
        
    };//galleryClick();   
        
        
//        var showBox = $(".gallery_show"),
//            showImg = showBox.children('img'),
//            listBox = $(".gallery_list"),
//            listImg = listBox.children('li'),
//            firstImg = listImg.eq(0).children('img'),
//            mainImg = firstImg.attr('src');
//           
//        showImg.attr('src',mainImg);
//                
//        var sendBox = listImg.eq(0).children('.send_sum'),
//            sendFirTitle = sendBox.children('dt'),
//            sendFirText = sendBox.children('dd'),
//            showSumBox = showBox.children('.img_sum'),
//            showTitle = showSumBox.children('dt'),
//            showText = showSumBox.children('dd');
//        
//        var mainTitle = sendFirTitle.text(),
//            mainText = sendFirText.text();
//        
//        showTitle.text(mainTitle);
//        showText.text(mainText);
//            
//        var checkShow = $(".checkShow"),
//            mainCheck = listImg.eq(0).children('.checkShow');
//        
//        checkShow.hide();
//        mainCheck.show();
//        
//        listImg.on('click',function(){
//            
//            var clickImg = $(this).children('img'),
//                linkImg = clickImg.attr('src');
//            
//            showImg.attr('src',linkImg);
//            
//            var clickSendBox = $(this).children('.send_sum'),
//                clickTitle = clickSendBox.children('dt'),
//                clickText = clickSendBox.children('dd'),
//                sendTitle = clickTitle.text(),
//                sendText = clickText.text();
//            
//            showTitle.text(sendTitle);
//            showText.text(sendText);
//            
//            var checkShow = $(".checkShow"),
//                selectCheck = $(this).children('.checkShow');
//            
//            checkShow.hide();
//            selectCheck.show();
//                
//        });
    
    
    //window width 로딩시 기준
    var winW = $(window).width();
    
    contactH_large();
 //   galleryMainView();
    galleryClick();
    
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
        //galleryMainView();
        galleryClick();
        
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