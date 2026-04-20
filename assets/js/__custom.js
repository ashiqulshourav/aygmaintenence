jQuery(function() {
    jQuery('#menu').slicknav({
        label: '',
        openedSymbol: "",
        closedSymbol: "",
        prependTo: '#menu_holder'
    });
    jQuery(".incremental-counter").incrementalCounter();
    new WOW().init();
});

(function($) {
    $('.counter').counterUp({
        time: 1500
    });

    var logo = $('.logo').html();
    $('.mobile_logo').html(logo);
    if ($('.text-animation').length > 0) {
        var i = 0;
        var txt = $('.text-animation').attr('data-text');
        var speed = 70;
        var llength = txt.length;
        window.onload = function typeWriter() {
            if (i < llength) {
                txt += $('.text-animation').append(txt.charAt(i));
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    }
})(jQuery);

jQuery(".menu_bar").click(function() {
    jQuery('.mobile_menu').addClass('mobile_menu_open');
    jQuery('.mobile_menu').slideDown('slow');
});
jQuery(".menu_close,.back_button a").click(function() {
    jQuery('.mobile_menu').removeClass('mobile_menu_open');
    jQuery('.mobile_menu').slideUp('slow');
});

jQuery(".toggle_view_item h4").click(function(e) {
    if (jQuery(this).hasClass('active')) {} else {
        jQuery(".toggle_view_item h4").each(function() {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).toggleClass('active');
                jQuery(this).next('.show_details').slideToggle('hide');
            }
        });
    }
    jQuery(this).toggleClass('active');
    jQuery(this).next('.show_details').slideToggle('slow');
    e.preventDefault();
});

(function($) {
    $('#menu li a').click(function() {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top - 130
        }, 1500);
        return false;
    });
})(jQuery);