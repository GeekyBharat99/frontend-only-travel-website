

jQuery(function($) {

	"use strict";
	
	
	
	/**
	 * introLoader - Preloader
	 */
	$("#introLoader").introLoader({
		animation: {
				name: 'gifLoader',
				options: {
						ease: "easeInOutCirc",
						style: 'dark bubble',
						delayBefore: 500,
						delayAfter: 0,
						exitTime: 300
				}
		}
	});	
	
	
	
	/**
	 * Sticky Header
	 */
	$(".container-wrapper").waypoint(function() {
		$(".navbar").toggleClass("navbar-sticky-function");
		$(".navbar").toggleClass("navbar-sticky");
		return false;
	}, { offset: "-20px" });
	
	
	
	/**
	 * Main Menu Slide Down Effect
	 */
	// Mouse-enter dropdown
	$('#navbar li').on("mouseenter", function() {
			$(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
	});
	// Mouse-leave dropdown
	$('#navbar li').on("mouseleave", function() {
			$(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
	});
	
	
	
	/**
	 * Slicknav - a Mobile Menu
	 */
	var $slicknav_label;
	$('#responsive-menu').slicknav({
		duration: 300,
		easingOpen: 'easeInExpo',
		easingClose: 'easeOutExpo',
		closedSymbol: '<i class="fa fa-plus"></i>',
		openedSymbol: '<i class="fa fa-minus"></i>',
		prependTo: '#slicknav-mobile',
		allowParentLinks: true,
		label:"" 
	});
	
	
	
	/**
	 * Select2 -  replacement for select boxes
	 */
	$(".select2-single").select2({allowClear: true});
	$(".select2-single-no-live-search").select2({allowClear: true,minimumResultsForSearch: Infinity});
	$(".select2-multi").select2({});
	
	
	
	/**
	 * responsivegrid - layout grid
	 */
	$('.grid').responsivegrid({
		gutter : '0',
		itemSelector : '.grid-item',
		'breakpoints': {
			'desktop' : {
				'range' : '1200-',
				'options' : {
					'column' : 20,
				}
			},
			'tablet-landscape' : {
				'range' : '1000-1200',
				'options' : {
					'column' : 20,
				}
			},
			'tablet-portrate' : {
				'range' : '767-1000',
				'options' : {
					'column' : 20,
				}
			},
			'mobile-landscape' : {
				'range' : '-767',
				'options' : {
					'column' : 20,
				}
			},
			'mobile-portrate' : {
				'range' : '-479',
				'options' : {
					'column' : 10,
				}
			},
		}
	});

	
	
	/**
	 * Date Picker
	 */
	var date = new Date();
	date.setDate(date.getDate());
	$('.input-daterange').datepicker({
			autoclose: true,
			startDate: date,
			forceParse: false
	});
	var checkInDate = new Date();
	var checkOutDate = new Date();
	var checkin = $('#checkIn').datepicker({}).on('show', function() {
	}).on('changeDate', function(ev) {
			var UserDate = new Date(ev.date);
			checkInDate = UserDate;
			checkInDate.setDate(UserDate.getDate() + 1);
	}).on('hide', function() {
			$('#checkOut').datepicker('update', checkInDate);
			$('#checkOut').datepicker('show', function() {
					$('.dropdown-menu').addClass('checkout_box');
			});
			$('#checkOut').prop('disabled', false);
			$('#checkOut')[0].focus();
			var a = $(this);
			setTimeout(function() {
					a.show();
			}, 1);
	});

	$('.single-date-picker').datepicker({
			autoclose: true
	});
	
	
	
	/**
	 * Smooth scroll to anchor
	 */
	$('a.anchor[href*=#]:not([href=#])').on("click",function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 95) // offset for navbar menu
				}, 1000);
				return false;
			}
		}
	});
	
	
	
	/**
	 * Effect to Bootstrap Dropdown
	 */
	$('.bt-dropdown-click').on('show.bs.dropdown', function(e) {   
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(500, 'easeInOutQuad'); 
	}); 
	$('.bt-dropdown-click').on('hide.bs.dropdown', function(e) { 
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(250, 'easeInOutQuad'); 
	});
	
	
	
	/**
	 * Icon Change on Collapse
	 */
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('.bootstarp-accordion, .bootstarp-toggle').on('show.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').removeClass('active');
	});
	
	

	/**
	 *  Arrow for Menu has sub-menu
	 */
	$(".navbar-arrow > ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-down'></i>");
	$(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
	
	
	
	/**
	 *  Placeholder
	 */
	$("input, textarea").placeholder();


	
	/**
	 * Tooltip
	 */
	 $('[data-toggle="tooltip"]').tooltip();
	 
	 
	 
	 /**
	 * Back To Top
	 */
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}
	});
	$('#back-to-top').on("click",function() {
			$('html, body').animate({ scrollTop:0 }, '800');
			return false;
	});
	
	
	
	/**
	 * jQuery ClassyLightbox
	 */
	$('.box').lightbox();
	
	
	
	/**
	 * Responsive tab
	 */
	$('.responsive-tab').tabCollapse({
		tabsClass: 'hidden-xs',
		accordionClass: 'visible-xs'
	});
	
	
	
	/**
	 * Gallery by Isotope
	 */
	var $container = $('.portfolio-item-wrapper');
	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});
	});

	$('.isotope-filter ul li a').click(function () {

	$('.isotope-filter ul li a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector
	});

	return false;
	});
	
	
	
	/**
	 * Gallery Slider by Slicl
	 */
	$('.gallery-slideshow').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		fade: true,
		asNavFor: '.gallery-nav'
	});
	$('.gallery-nav').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.gallery-slideshow',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
			breakpoint: 1199,
			settings: {
				slidesToShow: 7,
				}
			}, 
			{
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
				}
			}, 
			{
			breakpoint: 767,
			settings: {
				slidesToShow: 5,
				}
			}, 
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				}
			}
		]
	});
	
	
	
	/**
	 * Instagram
	 */
	function createPhotoElement(photo) {
		var innerHtml = $('<img>')
		.addClass('instagram-image')
		.attr('src', photo.images.thumbnail.url);

		innerHtml = $('<a>')
		.attr('target', '_blank')
		.attr('href', photo.link)
		.append(innerHtml);

		return $('<div>')
		.addClass('instagram-placeholder')
		.attr('id', photo.id)
		.append(innerHtml);
	}

	function didLoadInstagram(event, response) {
		var that = this;

		$.each(response.data, function(i, photo) {
		$(that).append(createPhotoElement(photo));
		});
	}

	$(document).ready(function() {
		
		$('#instagram').on('didLoadInstagram', didLoadInstagram);
		$('#instagram').instagram({
		count: 20,
		userId: 302604202,
		accessToken: '735306460.4814dd1.03c1d131c1df4bfea491b3d7006be5e0'
		});

	});
	 
	
})(jQuery);




/**
 * Wow plugin bottom offset calculation
 */

jQuery(document).ready(function () {
	wow = new WOW(
			{
				animateClass: 'animated',
				offset: 120,
				mobile: true
			}
	);
	wow.init();
});
