//舊IE提醒
// var userAgent = window.navigator.userAgent;  
// if  (userAgent.indexOf("MSIE 7.0")>0 || userAgent.indexOf("MSIE 8.0")>0 ) {
//   	var url = "http://aurora.begonia.tw/browser.html";  
//   	setTimeout(
// 	  function(){
// 	    $(location).attr('href',url);
// 	  }, 0);
// }
var WHAT = navigator.userAgent;
if(WHAT.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0)/)){
	window.location="browser.html";
}

$(window).load(function(){
	$("#loding").fadeOut();
	$(document).foundation('orbit', 'reflow');
	//跑馬燈
	$('.news-list').show().marquee({
		duration: 15000,
		gap: 100,
		delayBeforeStart: 0,
		pauseOnHover: true,
		duplicated: true
	});
})
$(window).on("resize orientationchange",function(){
	$(document).foundation('orbit', 'reflow');
})
$(window).on("scroll touchmove",function(){
      if ($(this).scrollTop() > 40) {
          $('.contain-to-grid').addClass('gosticky');
      } else {
          $('.contain-to-grid').removeClass('gosticky');
      }
 });

$(function(){
	$('.news-list').hide();
	$(document).foundation({
	  orbit: {
	    animation: 'fade',
	    timer_speed: 5000,
	    slide_number: false,
	    pause_on_hover: false,
	    animation_speed: 500,
	    navigation_arrows: true,
	    bullets: true,
	    swipe: true

	    //orbit_transition_class: 'orbit-transitioning'
	  }
	});


	/*$('.news-list').slick({
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  autoplay: true,
	  autoplaySpeed: 0,
	  arrows: false,
	  infinite: true,
	  speed: 10000,
	  responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});*/


	var $win = $(window),
		$width = $(window).width();
		if($width < 641){

			$(".footer-map h6").on("click touchstart",function(){
				$(this).next().slideToggle(200);
				return false;
			})

		}

	$(".tab-mobile-in a").on("click touchstart",function(){
		$(".tab-now").html($(this).text())
	})

})

/////////////////////////////0820嘉鎂新增
$(function(){
          // $('body').on('click', '.f-dropdown.open li',function() {
          //        // console.info("Im HERE"+$(this).html());
          //         $('.f-dropdown.open').fadeOut(0);

          // });

		//gotop
		$('#gotop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});
		
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
			  $('#gotop').fadeIn(400);
			 } else {
			  $('#gotop').fadeOut(400);
			 }
		});

		//心得開關
		 $('.reviews_block_li').click(
                 function(){      
                 	 //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的加樣式
                      $(".reviews_block_li").eq(NOW1).toggleClass('open');
                      //自己的拿掉樣式
                      $(".reviews_block_li").eq(NOW1).siblings().removeClass('open');
                      // return false;
                 }
         );


		
  //結束
});
