$(document).ready(function(){
    
    /* 반응형 부분 */
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
    
        if(winW <= 678 ){
            
            
            $(".mos_info").hide();
            $(".mos_pofol01").hide();
            $(".mos_pofol02").hide();
            $(".mos_mine").hide();
            $(".mos_info").show(1500);
            $(".mos_pofol01").show(1800);
            $(".mos_pofol02").show(2000);
            $(".mos_mine").show(2200);
            
            
        }//winW <= 679
        
        else if(winW >= 680 && winW <= 959){
            
            var aLink = $('.tab_a'),
                bT = aLink.children(".tab_title");
    
            bT.hide();
            bT.show(2000);
            
        }//680<= winW <=959
        
        else{
            
            /* galaxy.plugin setting*/
        var winH = $(window).height(),
            winW = $(window).width(),
            arcW = winW /2;
        var settings = {
            //height of sphere container
            height: winH,
            //width of sphere container
            width: winW,
            //radius of sphere
            radius: arcW,
            //rotation speed
            speed: 0.5,
            //sphere rotations slower
            slower: 0.9,
            //delay between update position
            timer: 8,
            //dependence of a font size on axis Z
/*            fontMultiplier: 15,*/
            //tag css stylies on mouse over
            hoverStyle: {
                border: 'none',
                color: 'none'
            },
            //tag css stylies on mouse out
            mouseOutStyle: {
                border: '',
                color: ''
            }
        };

        
        $("#galaxy").galaxy(settings);
        

            
            var aLink = $('.pc_a'),
                bT = aLink.children(".pc_title");
    
            bT.hide();
            bT.show(2000);
            bT.hide(2000);

            aLink.on('mouseenter',function(){
                $(this).children(".pc_title").stop().slideDown();
            });
            aLink.on('mouseleave',function(){
                $(this).children(".pc_title").stop().slideUp();
            });
            
            $("#logo").show();
        };// 960<= winW
    
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