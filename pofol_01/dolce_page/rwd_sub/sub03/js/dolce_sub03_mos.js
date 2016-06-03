$(document).ready(function(){
    
    var win = $(window),
        winW = win.width();
    
    var winResize = function(){
        
        var win = $(window),
            winW = win.width();
        
        if(winW <= 679){
            
            /* main menu icon click*/
            var gnb = $("#gnb"),
                gnbH2 = gnb.children('h2'),
                gnbMainEndI = gnb.children("#mainBox").children(".endBox").children('i');
            
            gnbH2.on('click',function(){
                
                $(this).siblings('ul').addClass("scroll");
                
            });//gnbH2.on'click'
            
            gnbMainEndI.on('click',function(){
                var gnb = $("#gnb"),
                    gnbUl = gnb.children('ul');
                
                gnbUl.removeClass("scroll");
            });//.endBox>i.on'click'
            

        }//winW <= 679
        
    };//winResize.function
    
    winResize();
    
    var winWidth = $(window).width();
        
        win.on('resize',function(){
            if( $(window).width() != winWidth){
                location.reload();
            }
            winResize();
        });
        
});