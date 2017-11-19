$(function(){
    
    
    $('.non_detail').on('click',function(){
        
        $('.renew_box').css({display: 'block'});
        $('#renew_close').css({display: 'block'});
    });
    
    $('#renew_close').on('click',function(){
        
        $('.renew_box').css({display: 'none'});
        $(this).css({display: 'none'});
        
    })
    
});