
(function ( $ ) {
	'use strict';
   $.fn.heightFull = function() {
	var totalHeight = $('window').height();
	var heightMinus = totalHeight;
	$(this).css('height', heightMinus);
  };
}( jQuery ));

$(".main .item").heightFull();
$(window).resize(function() {
  $(".main .item").heightFull();
});

$(".main").onepage_scroll({
   sectionContainer: "section",
   easing: "cubic-bezier(0.175, 0.885, 0.420, 1.210)",
   animationTime: 1000,
   pagination: true, 
   updateURL: false,
   beforeMove: function(index) {}, 
   afterMove: function(index) {},
   loop: false, 
   responsiveFallback: 600
});