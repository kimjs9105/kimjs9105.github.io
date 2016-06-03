$(document).ready(function(){
            
    /* main menu jQuery */
    var gnb = $("#gnb"),
        gnbDl = gnb.find(".main"),
        gnbDt = gnbDl.children('dt'),
        gnbDd = gnbDl.children('dd');
    //var gnbDd = gnb.find("dd");
    
    
    gnbDd.hide();
    gnbDt.on("click",function(){
        /*var $this = $(this);*/
        
//        gnbOl.stop().slideUp();
        $(this).next('dd').stop().slideToggle();
    });
    
    
    /* article slide */
    $(".in_box").hide();
    
    $("#photo").children('ul').children('li').on('click',function(e){
        e.preventDefault();
        $(".in_box").stop().slideUp(500);
//        $(this).find('span').css({border:"5px solid #f8c6dc", boxSizing:"border-box"});
        $(this).find(".in_box").stop().slideDown(500);
        
    })
    
    $("#video").children('ul').children('li').on('click',function(e){
        e.preventDefault();
        $(".in_box").stop().slideUp(500);
//        $(this).find('span').css({border:"5px solid #f8c6dc", boxSizing:"border-box"});
        $(this).find(".in_box").stop().slideDown(500);
        
    })
    
});