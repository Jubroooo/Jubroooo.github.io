 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		// 스크롤할 때만 waypoint 트리거
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
		
				// class "grade"가 있는 요소만 선택
				$('.grade').each(function() {
					var $this = $(this);
					
					// 이미 애니메이션이 실행된 경우 스킵
					if ($this.hasClass('animated')) {
						return;
					}
		
					var num = $this.data('number'); // 목표 숫자 (소수점 포함)
		
					// 소수점을 포함한 숫자 애니메이션
					$this.animateNumber({
						number: num,
						numberStep: function(now, tween) {
							var floored_number = Math.ceil(now * 100) / 100; // 소수점 2자리까지 유지
							var target = $(tween.elem);
							// 소수점 두 자리 및 콤마 형식으로 출력
							target.text(floored_number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
						}
					}, 1700, function() {
						// 애니메이션이 완료되면 클래스 추가
						$this.addClass('animated');
					});
				});
		
				// 다른 숫자 요소 (소수점 없이)
				$('.number').not('.grade').each(function() {
					var $this = $(this);
		
					// 이미 애니메이션이 실행된 경우 스킵
					if ($this.hasClass('animated')) {
						return;
					}
		
					var num = $this.data('number');
		
					$this.animateNumber({
						number: num,
						numberStep: $.animateNumber.numberStepFactories.separator(',')
					}, 5000, function() {
						// 애니메이션이 완료되면 클래스 추가
						$this.addClass('animated');
					});
				});
		
				// 이 요소에도 애니메이션이 완료되었다는 표시로 클래스를 추가
				$(this.element).addClass('ftco-animated');
			}
		}, { offset: '95%' });
	
		// 페이지가 로드될 때 강제 스크롤 이벤트 삭제
		$(window).on('load', function() {
			// 만약 강제로 트리거하는 부분이 필요하다면, 특정 조건에서만 실행
		});
	};
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {
	
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;
	
				$(this.element).addClass('item-animate');
				setTimeout(function(){
	
					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}
	
		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
  $(window).scroll(function(e){
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then 
      if (scrollTop > section.offset().top){
        var scrolled_id = section.attr('id');
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

// custum
$(document).ready(function() {
    // 이미지 팝업을 위한 magnificPopup 설정
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});

$(document).ready(function() {
    // 여러 이미지를 갤러리로 보여주는 magnificPopup 설정
    $('.image-popup-gallery1',).magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // 갤러리 기능 활성화
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});
$(document).ready(function() {
    // 여러 이미지를 갤러리로 보여주는 magnificPopup 설정
    $('.image-popup-gallery2',).magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // 갤러리 기능 활성화
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});
$(document).ready(function() {
    // 여러 이미지를 갤러리로 보여주는 magnificPopup 설정
    $('.image-popup-gallery3',).magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // 갤러리 기능 활성화
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});
$(document).ready(function() {
    // 여러 이미지를 갤러리로 보여주는 magnificPopup 설정
    $('.image-popup-gallery4',).magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // 갤러리 기능 활성화
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});
$(document).ready(function() {
    // 여러 이미지를 갤러리로 보여주는 magnificPopup 설정
    $('.image-popup-gallery5',).magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // 갤러리 기능 활성화
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Don't forget to change the duration also in CSS
        }
    });
});

var blogImage = document.querySelector('.blog-entry img');

blogImage.addEventListener('mousemove', function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    
    // X, Y축에 따라 회전 각도 계산
    var rotateY = (x / blogImage.offsetWidth - 0.5) * 10; // X축 기울기 (좌우 이동)
    var rotateX = -(y / blogImage.offsetHeight - 0.5) * 10; // Y축 기울기 (위아래 이동)

    // 이미지에 기울기 및 확대 효과 적용
    blogImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

blogImage.addEventListener('mouseout', function() {
    // 마우스를 떼면 원래 상태로 복귀
    blogImage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
});