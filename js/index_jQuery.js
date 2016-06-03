$(document).ready(function(){
    
    /* 반응형 부분 */
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
    
        if(winW <= 678 ){
            
            
            $("#info").hide();
            $("#pofol01").hide();
            $("#pofol02").hide();
            $("#mine").hide();
            $("#info").show(1500);
            $("#pofol01").show(1800);
            $("#pofol02").show(2000);
            $("#mine").show(2200);
            
            
        }//winW <= 679
        
        else if(winW >= 680 && winW <= 959){
            
            var button = $('button'),
                bA = button.children('a'),
                bT = button.children(".title");
    
            bT.hide();
            bT.show(2000);
/*            bT.hide(2000);*/

            bA.on('mouseenter',function(){
                $(this).prev(bT).stop().slideDown();
            });
            bA.on('mouseleave',function(){
                $(this).prev(bT).stop().slideUp();
            });
            
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
        

            
            var button = $('button'),
                bA = button.children('a'),
                bT = button.children(".title");
    
            bT.hide();
            bT.show(2000);
            bT.hide(2000);

            bA.on('mouseenter',function(){
                $(this).prev(bT).stop().slideDown();
            });
            bA.on('mouseleave',function(){
                $(this).prev(bT).stop().slideUp();
            });
            
            
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