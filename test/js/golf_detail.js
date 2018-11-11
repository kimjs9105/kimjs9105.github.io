$(function(){

    var winH = $(window).height();

    $('#wrap').css({height: winH, overflow: 'hidden'});


    var imgLength = $('.img-wrap').find('li').length,
        numBox = $('.number-wrap').find('ul'),
        imgBox = $('.img-wrap').find('ul');

    for(i=0; i<imgLength; i++){

        if(i < 9){

            numBox.prepend('<li>0' + (i+1) + '</li>');
        }else{

            numBox.prepend('<li>' + (i+1) + '</li>');
        }
    }

    function list_setting(){

        numBox.css({width: 480 * imgLength});
        imgBox.css({width: 580 * imgLength});
    }

    list_setting();

    // mouse cursor custom
    $('html').on('mousemove', function(event){

        var mouseX = event.pageX,
            mouseY = event.pageY;

        $('.mouse-deco').css({marginTop: mouseY - 80, marginLeft: mouseX});
    });

    // mouse moving -> img box/ number box effect
    var mouseDragStartX = 0,
        mouseDragEndX = 0,
        mouseMovingX = 0;

    $('body').on('mousedown', function(event){

        mouseDragStartX = event.pageX;

        $('.mouse-deco').children('.ms-round').animate({width: 20, height: 20, marginTop: -10, marginLeft: -10}, 300, function(){

            $('.ms-dir').animate({opacity: 1}, 100);
        });

        mouse_drag(event);

        return mouseDragStartX;

    });

    $('body').on('mouseup', function(event){

        $('body').off('mousemove');

        mouseDragEndX = event.pageX;

        $('.mouse-deco').children('.ms-round').animate({width: 10, height: 10, marginTop: -5, marginLeft: -5}, 300, function(){

            $('.ms-dir').animate({opacity: 0}, 100);
        });

        // mouse_drag_fin();

        return mouseDragEndX;
    });

    // 초기값 셋팅

    var moving = 0,
        sN = 0,
        sI = 0;

    var nBP = 0,
        iBP = 0;

    function mouse_drag_fin(){
    
        console.log(mouseDragStartX, mouseDragEndX);
    
        if(mouseDragStartX > mouseDragEndX){
            console.log("오른쪽에서 왼쪽으로 이동");
    
            moving = mouseDragStartX - mouseDragEndX;
            sN = Math.floor(moving / 480);
            sI = Math.floor(moving / 580);
    
            if(sN === 0){
                return;
            }else{
    
                nBP = nBP + (-480 * sN);
                iBP = iBP + (-580 * sN);
    
                numBox.animate({marginRight: nBP}, 300);
                imgBox.animate({marginLeft: iBP}, 300);
    
                console.log(nBP, iBP);
            }
    
    
        }else{
            console.log("왼쪽에서 오른쪽으로 이동");
    
            moving = mouseDragStartX - mouseDragEndX;
            sN = Math.floor(moving / 480);
            sI = Math.floor(moving / 580);
    
            if(sN === imgLength - 1){
                return;
            }else{
    
                nBP = nBP + (480 * sN);
                iBP = iBP + (580 * sN);
    
                numBox.animate({marginRight: nBP}, 300);
                imgBox.animate({marginLeft: iBP}, 300);
            }
    
            console.log(nBP, iBP);
        }
    
        return nBP, iBP;
    }

    var dM = 0,
        nM = 0,
        iM = 0;

    // function mouse_drag(event){

    //     var winW = $(window).width();

    //     $('body').on('mousemove', function(event){



    //         // if(mouseDragStartX > mouseMovingX){

    //             if(dM === winW){
    //                 $('body').off('mousemove');
    //             }else{
    //                 mouseMovingX = event.pageX;
    //                 console.log("왼쪽으로");

    //                 dM = dM + (mouseMovingX / 392);
    //                 nM = nM + (mouseMovingX / 121);
    //                 iM = iM + (mouseMovingX / 100);

    //                 $('.list-load-dash').css({width: dM});
    //                 numBox.css({marginRight: -nM});
    //                 imgBox.css({marginLeft: -iM});
    //             }

    //         // }else{
    //         //     console.log("오른쪽으로");
    //         //
    //         //     dM = dM + (mouseMovingX / 400);
    //         //     nM = nM + (mouseMovingX / 150);
    //         //     iM = iM + (mouseMovingX / 100);
    //         //
    //         //     $('.list-load-dash').css({width: -dM});
    //         //     numBox.css({marginRight: nM});
    //         //     imgBox.css({marginLeft: iM});
    //         // }
    //         //
    //         // return dM, nM, iM;
    //     });

    // }
});
