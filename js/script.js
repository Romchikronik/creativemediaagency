$(document).ready(function () {
    new WOW().init();
    var onOff = true;
    var onOff2 = true;
    
    $('.nav-page, .btn-page').click(function(e){
        e.preventDefault();
        var navHeight = $('.header-nav').outerHeight();
        var href = $(this).attr('href');
        var target = $(href).offset().top - navHeight;
        $('html').animate({
           scrollTop: target
        }, 800)
        if($('.header-menu').hasClass('menu-open')){
            $('.header-nav').addClass('fixed-top');
            $('.header-menu').removeClass('menu-open');
            $('.header-menu__burger').removeClass('open');
        }
    })
    $('.header-menu__burger').click(function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $('.header-menu').addClass('menu-open');
            $('.header-nav').addClass('fixed-top');
            onOff2 = false;
        }
        else{
            $(this).removeClass('open');
            $('.header-menu').removeClass('menu-open');
            if(onOff == true){
                $('.header-nav').removeClass('fixed-top');
            }
            onOff2 = true;
        }
    })
    
    $(".dropdown").hover(
        function(e) {
            e.preventDefault();
            $('.header-services').stop(true).slideDown(100);
        },
        function(e) {
            e.preventDefault();
            $('.header-services').stop(true).slideUp(100);
        }
    );
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= $('.header-nav').outerHeight() && onOff == true && onOff2 == true){
            $('.header-nav').addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, 800)
            onOff = false;
        }
        else if($(this).scrollTop() < $('.header-nav').outerHeight() && onOff == false && onOff2 == true){
            $('.header-nav').animate({
                opacity: 0
            }, 800, function(){
                $('.header-nav').removeClass('fixed-top').css('opacity', 1);
            }) 
            onOff = true;
        }
        
        $('.nav-page').each(function(){
            var href = $(this).attr('href');
            var target = $(href).offset().top - $('.header-nav').outerHeight() - 10;
            if(target <=  $(window).scrollTop()){
                $('.nav-page').parent().removeClass('header-menu__item_active');
                $(this).parent().addClass('header-menu__item_active');
            }
            else{
                $(this).parent().removeClass('header-menu__item_active');
            }
        })
       
        
        
        if($(this).scrollTop() > 350){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    })
    $('#top').click(function(){
        $('html').animate({
          scrollTop: 0  
        }, 1200)
    })
   
   /*   $('.header-menu__wrap, .header-services').mouseover(function(){
        $('.header-services').slideDown();
        $('.fa-angle-down').addClass('fa-rotate-180');
     })
     $('.header-menu__wrap, .header-services').mouseleave(function () { 
        $('.header-services').slideUp();
        $('.fa-angle-down').removeClass('fa-rotate-180');
     }) */
       
     $('.company-fanfacts__number').counterUp({
        time: 2000
    });
     
   
   if ($('.thm__owl-carousel').length) {
    $('.thm__owl-carousel').each(function () {
        var Self = $(this);
        var carouselOptions = Self.data('options');
        var carouselPrevSelector = Self.data('carousel-prev-btn');
        var carouselNextSelector = Self.data('carousel-next-btn');
        var thmCarousel = Self.owlCarousel(carouselOptions);
        if (carouselPrevSelector !== undefined) {
            $(carouselPrevSelector).on('click', function () {
                thmCarousel.trigger('prev.owl.carousel');
                return false;
            });
        }
        if (carouselNextSelector !== undefined) {
            $(carouselNextSelector).on('click', function () {
                thmCarousel.trigger('next.owl.carousel');
                return false;
            });
        }
    });
}

$('.footer-contact-social__vacancy').click(function(e){
    e.preventDefault();
   $('.overlay').show().css('overflow-y', 'auto');
   $('body').css('overflow-y', 'hidden');
   $('.vacancy').animate({
      top: '50%'
   })
})
$('.content-form__close, .overlay').click(function(){
    $('.overlay').hide();
    $('body').css('overflow-y', 'scroll');
    $('.vacancy').animate({
        top: '-100%'
     })
 })
 $('.input_file input[type=file]').change(function() {
    var t = $(this).val();
    if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
    var e = $(this).next().find('.fake_file_input');
    e.val(t);
});

// services page

$('.payment-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true
});

$('.payment-tab__btn').click(function(e){
    e.preventDefault();
    $('.slider-open').removeClass('slider-open');
    $(this).addClass('slider-open');
    
    var href = $(this).attr('href');
    $(href).addClass('slider-open');
});

    
});