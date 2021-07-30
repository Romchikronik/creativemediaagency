$(document).ready(function () {
    new WOW().init();
    var onOff = true;
    var onOff2 = true;
    
    // фавиконка на сайте
    const setFavicon = (emoji) => {
        const canvas = document.createElement('canvas');
        canvas.height = 32;
        canvas.width = 32;
      
        const ctx = canvas.getContext('2d');
        ctx.font = '28px serif';
        ctx.fillText(emoji, -2, 24);
      
        const favicon = document.querySelector('link[rel=icon]');
        if (favicon) { favicon.href = canvas.toDataURL(); }
      }
      setFavicon('🚀');
      
       // курсор анимированный
      if ($(".pointer").length) {
        $(document).on("mousemove", function (e) {
            $(".pointer").css({
                top: e.pageY + "px",
                left: e.pageX + "px",
            });
        });
    }
      
    // навигация на сайте
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
    
    // кнопка навигации на сайте
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
    
    // выпадающий список
    $(".dropdown").hover(
        function(e) {
            e.preventDefault();
            $('.header-services').slideDown(150);
        },
        function(e) {
            e.preventDefault();
            $('.header-services').slideUp(150);
        }
    );
    if(window.matchMedia('(max-width: 992px)').matches){
        $('.dropdown').removeClass('dropdown');
        // do functionality on screens smaller than 991px
    }
    
    // секция с буквами на заднем плане
    if ($(".company") !== null) {
        $(".company").on("mousemove", function (event) {
            $(this).find(".bg-letters span").css({
                "animation-play-state": "running"
            });
        });
    }
    
    // навигация по странице
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
    
    // кнопка которая поднимает вверх страницы
    $('#top').click(function(){
        $('html').animate({
          scrollTop: 0  
        }, 1200)
    })
       
    // набор цифр
     $('.company-fanfacts__number').counterUp({
        time: 2000
    });
     
    // слайдер с отзывами 
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

// первая фоорма для отправки данных на заказ
$('.btn_open-form').click(function(e){
    e.preventDefault();
   $('.overlay').show().css('overflow-y', 'auto');
   $('body').css('overflow-y', 'hidden');
   $('.content-form').animate({
      top: '50%'
   })
})

$('.content-form__close, .overlay').click(function(){
    $('.overlay').hide();
    $('body').css('overflow-y', 'scroll');
    $('.content-form').animate({
        top: '-150%'
     })
 })

 // вторая форма для отправки формы на вакансию 
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
// слайдер на с иконками
$('.payment-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true
});

// табы
$('.payment-tab__btn').click(function(e){
    e.preventDefault();
    $('.slider-open').removeClass('slider-open');
    $(this).addClass('slider-open');
    
    var href = $(this).attr('href');
    $(href).addClass('slider-open');
});



    
});