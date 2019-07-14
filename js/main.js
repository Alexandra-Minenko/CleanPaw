/*menu*/
jQuery(document).ready(function($){
$(".menu-icon").on("click", function(){
$(".nav").slideToggle();	
$(this).toggleClass("active");
});

});
/*scrollup*/
$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});

/*bx-slider*/
$(document).ready(function(){
	$('.bxslider').bxSlider({
		adaptiveHeight: true,
 	    mode: 'fade',
 	    pagerCustom: '#bx-pager'
		});
	$('#bx-pager').bxSlider({
		slideWidth: 60,
		minSlides:5,
		maxSlides: 6,
		slideMargin: 10,
		moveSlides: 3
		});
	});

/*sloiler*/
$(function() {
	var test = $('#test1'),
    down = $('#down'),
    up = $('#up'),
    toggle = $('#toggle1');
	toggle.click(function() {
    test.slideToggle(1000, function() {
    });
});

});

$(function() {
	var test = $('#test2'),
    down = $('#down'),
    up = $('#up'),
    toggle = $('#toggle2');
	toggle.click(function() {
    test.slideToggle(1000, function() {
    });
});

});

$(function() {
	var test = $('#test3'),
    down = $('#down'),
    up = $('#up'),
    toggle = $('#toggle3');
	toggle.click(function() {
    test.slideToggle(1000, function() {
    });
});

});

$(function() {
	var test = $('#test4'),
    down = $('#down'),
    up = $('#up'),
    toggle = $('#toggle4');
	toggle.click(function() {
    test.slideToggle(1000, function() {
    });
});

});
