jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});

	jQuery(".incremental-counter").incrementalCounter();
});

(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	}
	
	AOS.init();
	var logo = jQuery( '.logo' ).html();
	jQuery( '.mobile_logo' ).html( logo );
	
	
})(jQuery);

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close,.back_button a").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});

$('.hero-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	items: 1,
	dots: false,

})
jQuery('.brand_carousel1').owlCarousel({
	loop:true,
	nav:true,
	margin: 10,
	items:3,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:2,
			dots:true,
			nav:false,
        },
		768:{
            items:3,
			dots:true,
			nav:false,
        },
    }
});

jQuery('.brand_carousel2').owlCarousel({
	loop:true,
	nav:true,
	margin: 0,
	items: 5,
	dots:false,
	responsiveClass:true,
	responsive:{
		0:{
            items:1,
			nav:true,
			dots:true,
			stagePadding: 40,
        },
        767:{
            items:1,
			nav:true,
			dots:true,
			stagePadding: 52,
        },
        992:{
            items:5,
			nav:true,
        }
    }
});		

jQuery('.testimonials_carousel').owlCarousel({
	loop:false,
	nav:false,
	margin:0,
	items:4,
	dots:false,
	responsiveClass:true,
	responsive:{
        0:{
            items:1,
			dots:true,
			nav:true,
        },
		768:{
            items:2,
			nav:true,
        },
		991:{
            items:3,
			nav:true,
        },
        1201:{
            items:4,
        }
    }
})			
jQuery( ".toggle_view_item h4" ).click(function(e) {
	if(jQuery(this).hasClass('active')) {
	} else {
		jQuery( ".toggle_view_item h4" ).each(function() {
			if(jQuery(this).hasClass('active')) {
				jQuery(this).toggleClass('active');
				jQuery(this).next('.show_details').slideToggle('hide');
			}
		});
	}
	jQuery(this).toggleClass('active');
	jQuery(this).next('.show_details').slideToggle('slow');
	e.preventDefault();
});

(function($){
	$(".privacy-pop-link").click(function() { 
		$('.privacy-popup-area').fadeToggle('fast'); 
	});
	$(".privacy-popup-close").click(function() { 
		$('.privacy-popup-area').fadeOut('fast'); 
	});	
	
	//window.onscroll = function() {myFunction()};
//	var header = document.getElementById("stickyheader");
//	var sticky = header.offsetTop;
//	function myFunction() {
//	  if (window.pageYOffset > sticky) {
//		header.classList.add("sticky");
//	  } else {
//		header.classList.remove("sticky");
//	  }
//	}
})(jQuery);

jQuery(function(){
	jQuery('#menu li a').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({ 
		scrollTop: jQuery(Lochref).offset().top-130
		}, 1500); 
		return false;
	});
});

jQuery(document).ready(function(){
    jQuery(".map_show_btn").click(function(){
        jQuery(".country_map_wrap").slideToggle("slow");
        jQuery(this).toggleClass('active');
    });
    
    jQuery(".select_dropdown_wrap").click(function(){
        jQuery(".select_dropdown_btn").slideToggle("slow");
        jQuery(this).toggleClass('active');
    });
});