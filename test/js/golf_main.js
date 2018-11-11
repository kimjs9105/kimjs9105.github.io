(function($){

    // 게이트 마우스 오버 시 효과
    var gateEle = $('.gate_con').children('li');

    gateEle.on({

        'mouseenter':function(){
            var thisI = $(this).index();

            gateEle.eq(thisI).addClass('golf_main_act');
            $('.bgi_con').find('img').eq(thisI + 1).stop().animate({opacity: 1}, 1000);
        },
        'mouseleave': function(){
            var thisI = $(this).index();

            gateEle.eq(thisI).removeClass('golf_main_act');
            $('.bgi_con').find('img').eq(thisI + 1).stop().animate({opacity: 0}, 1000);
        }

    });

    // 게이트에서 넘어가는 효과
    // - 게이트 엘리먼트 선언
    var gallGateCon = $('.gallery_gate'),
        gateEleBtn = gateEle.find('a');

    gateEleBtn.on('click', function(){

        // intro 화면 제거
        var thisP = $(this).parent('div'),
            gateElement = thisP.parent('li'),
            gateI = gateElement.index();

        if(gateI === 0){

            gateEle.eq(0).delay(1000).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(1).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(2).delay(300).animate({ marginTop: 300, opacity: 0 }, 2000);


        } else if (gateI === 1) {

            gateEle.eq(0).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(1).delay(1000).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(2).delay(300).animate({ marginTop: 300, opacity: 0 }, 2000);

        } else if (gateI === 2) {

            gateEle.eq(0).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(1).delay(300).animate({ marginTop: 300, opacity: 0 }, 2000);
            gateEle.eq(2).delay(1000).animate({ marginTop: 300, opacity: 0 }, 2000);

        }

        $('.gallery_gate').css({zIndex: 300});
        gateTextAniOff();

        $('#golf_intro_wrap').delay(2000).animate({height: 0}, 1500, function(){

            $('#golf_intro_wrap').delay(3000).hide();

            // Gallery 화면 시작
            galleryGateOn();

            // - gallery 슬라이드 이미지 엘리먼트 선언
            var winH = $(window).height(),
                stylePhotoCon = $('.style_photo_con'),
                stylePhotoEle = stylePhotoCon.find('img'),
                styleActEle = stylePhotoCon.eq(gateI).find('.act_full_PT'),
                styleImgLeng = stylePhotoCon.eq(gateI).find('img').length;

            stylePhotoCon.eq(gateI).css({zIndex: 1});
            stylePhotoEle.css({marginTop: winH});
            styleActEle.css({ marginTop: 0 });

            if (styleImgLeng<10){

                $('.style_indi_con').find('.all_text').text('0' + styleImgLeng);
            }else{

                $('.style_indi_con').find('.all_text').text(styleImgLeng);
            }

            // 이미지에 따른 요소 색상 설정
            if (styleActEle.hasClass('white_set')){
                $('#golf_gallery_wrap').addClass('gallery_white_wrap');

            } else if (styleActEle.hasClass('double_set')){
                $('#golf_gallery_wrap').addClass('gallery_mix_wrap');
            }

            // 스크롤 알림 마크 초기 설정
            $('.scroll_mark').css({display: 'block', opacity: 1});

            $('.scroll_mark').delay(5000).animate({opacity: 0}, 500, function(){
                $('.scroll_mark').hide();
            })

        });

    });

    // 이미지 슬라이드에서 다시 메인으로 넘어가기
    var backToBtn = $('#golf_gallery_wrap').find('.back_to_link');

    backToBtn.on('click', function (){

        galleryGateOff();

        $('#golf_intro_wrap').css({display: 'block'});

        $('#golf_intro_wrap').delay(3500).animate({ height: '100%'}, 1000, function(){


            $('.gallery_gate').css({zIndex: -10}, 100);
            $('#golf_gallery_wrap').removeClass('gallery_white_wrap');
            $('#golf_gallery_wrap').removeClass('gallery_mix_wrap');

            $('.bgi_text').find('img').eq(0).animate({ marginLeft: -92, opacity: 1 }, 1500);
            $('.bgi_text').find('img').eq(1).animate({ marginRight: -98, opacity: 1 }, 1500);

            gateEleAniOn();

            $('.style_photo_con').css({ zIndex: -10 });
        });

    });

    // 스크롤 시 이미지 슬라이드
    function scrollingImg(){

        console.log('스크롤 함수 선언!!');

        var galleryWrap = $('#golf_gallery_wrap');

        galleryWrap.on("mousewheel", function (e, delta){

            e.preventDefault();

            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {

                delta = event.wheelDelta / 120;

                if (window.opera) delta = -delta;

            } else if (event.detail) delta = -event.detail / 3;

            if (delta < 0) {

                console.log('스크롤 다다다다운!');

            } else {

                console.log('스크롤 어어어어프!');

            }
        });

    }

    function gateTextAniOn() {

        $('.bgi_text').find('img').eq(0).animate({ marginLeft: -92, opacity: 1 }, 1500);
        $('.bgi_text').find('img').eq(1).delay(500).animate({ marginRight: -98, opacity: 1 }, 1500);
    }

    function gateTextAniOff() {

        $('.bgi_text').find('img').eq(0).animate({ marginLeft: -400, opacity: 0 }, 1500);
        $('.bgi_text').find('img').eq(1).animate({ marginRight: -400, opacity: 0 }, 1500);
    }

    function gateEleAniOn() {
        gateEle.css({marginTop: 300, opacity: 0 }, 200);

        for(i=0; i<gateEle.length; i++){

            var deT = 2000 + (i*500);

            gateEle.eq(i).delay(deT).animate({ marginTop: 0, opacity: 1 }, 2000);
        }
    }

    function gateEleAniOff() {

        for (i = 0; i < gateEle.length; i++) {

            var deT = 2000 + (i * 500);

            gateEle.eq(i).delay(deT).animate({ marginTop: 300, opacity: 0 }, 2000);
        }
    }

    function galleryGateOn(){

        $('.gallery_gate').find('.deco_dash').css({width: 0, opacity: 1});
        $('.gallery_gate').find('.top_pn').css({top: 0});
        $('.gallery_gate').find('.bottom_pn').css({bottom: 0});

        $('.gallery_gate').find('.deco_dash').animate({width: '100%', marginLeft: 0}, 2500, function(){
            $('.gallery_gate').find('.deco_dash').css({opacity: 0});
        });

        $('.gallery_gate').find('.top_pn').delay(2500).animate({marginTop: '-100%'}, 2000);
        $('.gallery_gate').find('.bottom_pn').delay(2500).animate({marginBottom: '-100%'}, 2000, function(){
            $('.gallery_gate').css({zIndex: -10}, 100);
        });
    }

    function galleryGateOff(){

        $('.gallery_gate').css({ zIndex: 300 });


        $('.gallery_gate').find('.top_pn').css({marginTop: '-100%'});
        $('.gallery_gate').find('.bottom_pn').css({marginBottom: '-100%'});

        $('.gallery_gate').find('.top_pn').animate({marginTop: 0}, 2000);
        $('.gallery_gate').find('.bottom_pn').animate({marginBottom: 0}, 2000, function(){

          $('.gallery_gate').find('.deco_dash').css({ width: '100%', opacity: 1 });
        });

        $('.gallery_gate').find('.deco_dash').delay(1000).animate({ width: 0 }, 2000);
    }


    $(window).on('load', function () {

        // 초기 로드시 window 높이에 contens 높이 맞춤 & 게이트 차례로 올라오기
        var winH = $(window).height(),
            headerH = $('#header-20160315').height(),
            gateCon = $('.gate_con');

        $('#container_r').css({ height: winH - headerH, overflow: "hidden" });
        $('#container_r').children().css({ height: winH - headerH });

        gateTextAniOn();

        gateCon.animate({ zIndex: 10 }, 100, function () {
            gateEleAniOn();
        });

        // gallery content 마우스 스크롤시
        scrollingImg();

    });



})(jQuery)
