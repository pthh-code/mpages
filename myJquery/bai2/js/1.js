$(function() {
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		 event.preventDefault();
		 //console.log($('.chapter1').offset().top);
		 //Trang 1 nay dung easing Jquery
		$('html, body').animate({scrollTop: $('.chapter1').offset().top},1400,'easeOutExpo');
	});

		$('.menutren ul li:nth-child(2) a').on('click', function(event) {
		 event.preventDefault();
		 //console.log($('.chapter1').offset().top);
		$('html, body').animate({scrollTop: $('.chapter2').offset().top},1400,'easeOutExpo');
	});

		$('.menutren ul li:nth-child(3) a').on('click', function(event) {
		 event.preventDefault();
		 //console.log($('.chapter1').offset().top);
		$('html, body').animate({scrollTop: $('.chapter3').offset().top},1400,'easeOutExpo');
	});
		$('.menutren ul li:nth-child(4) a').on('click', function(event) {
		 event.preventDefault();
		 //console.log($('.chapter1').offset().top);
		$('html, body').animate({scrollTop: $('.chapter4').offset().top},1400,'easeOutExpo');
	});


		$('.nutlentren').on('click', function(event) {
		 event.preventDefault();
		 //console.log($('.chapter1').offset().top);
		$('html, body').animate({scrollTop: 0},1400,'easeOutExpo');
	});
});

