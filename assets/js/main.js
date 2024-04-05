
// корзина

function allCost() {
    var item_price = $('.basket__item-num');
    var sum = 0;

    $(item_price).each(function() {
        var res = $(this).attr('data-value');
        sum += +res;
    });

    $('.basket__res-cost').text(sum);
}

function allNum() {
    var num = $('.basket__card').length;
    
    $('.basket__res-num').text(num);
}

$(document).ready(function() {
    var price = $('#total-price');

    if(price) {
        allCost();
        allNum();
    }

});

$('.basket__item-remove').on('click', function () {
    $(this).closest('.basket__card').remove();
    allCost();
    allNum();
});


$('.phone').mask('8 (0000) 00-00-00', {
    reverse: true
});

  
$('.money').mask('000 000 000 000', {
    reverse: true
});

// меню
$(document).ready(function() {
    var submenu = $('.menu__submenu');
    var sub_down = $('.submenu--sub');
    if(submenu) {
        $(submenu).each(function() {
            $(this).siblings('.menu__link').addClass('menu__link--dropdown');
        });
        
        $('.menu__link--dropdown').on('click', function (e) {
            e.preventDefault();
            $(this).siblings(".menu__submenu").toggleClass('is-show');
        });
    }

    if(sub_down) {
        $(sub_down).each(function() {
            $(this).closest('li').addClass('submenu__wrapper');
        });
        
        $('.submenu__link--dropdown').on('click', function (e) {
            e.preventDefault();
            $(this).siblings(".submenu").toggleClass('is-show');
        });
    }
});

$('#header-btn').on('click', function () {
    $(this).toggleClass('open');
    $('.nav__mobile').toggleClass('is-show');
    $('body').toggleClass('no-scroll');
});



// filter

$(document).ready(function () {
    var res = $(".filter__block-cat");
    $('[rel^="m"]').on("click", funk);

    $(document).click(function(e) {
        if ($(e.target).closest(res).length || $(e.target).closest('.filter__link').length) return;
        res.fadeOut(100);
    });

    function funk(){
        var link = $(this).attr('rel'),
            el = $('.filter__block-cat.' + link);

        if(el.css("display") == "none"){
            res.hide();
            el.fadeIn(100);
        }
        else{
            el.fadeOut(100);
        }
        return false;
    }
});

// заказ
function orderCost() {
    var item_price = $('.order-block__cost');
    var sum = 0;
    console.log(item_price);

    $(item_price).each(function() {
        var res = $(this).attr('data-value');
        sum += +res;
    });

    $('.result__cost').text(sum);
}

function orderNum() {
    var num = $('.order-block').length;
    $('.result__total-num').text(num);
}

$(document).ready(function() {
    var price = $('#total-price');

    if(price) {
        orderCost();
        orderNum();
    }

});

$('.product__slider').each(function (i, e) {

    var prev = $(this).find('.slider-product__nav--prev');
    var next = $(this).find('.slider-product__nav--next');
  
    var swiper_prod = new Swiper('.slider-product', {
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      loop: true,
      speed: 500,
      pagination: {
        el: '.slider-product__pagination',
        clickable: true,
      },
    });
  });

if($('.sizes').length) {
    $('.sizes__li').on('click', function (e) {
        e.preventDefault();

        $('.sizes__li').toggleClass('active-prop', false);
        $(this).toggleClass('active-prop', true);
    });
}
var mainswiper = new Swiper('#slider-main', {
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.slider-main__nav--next',
    prevEl: '.slider-main__nav--prev',
  },
  loop: true,
  autoplay: {
    delay: 2300,
  },
  speed: 800,
  pagination: {
    el: '.slider-main__pagination',
    clickable: true,
  },
});

var swiper = new Swiper('#slider-banner', {
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.slider-banner__nav--next',
    prevEl: '.slider-banner__nav--prev',
  },
  loop: true,
  autoplay: {
    delay: 2300,
  },
  speed: 800,
  pagination: {
    el: '.slider-banner__pagination',
    clickable: true,
  },
});


$(document).ready(function () {
  if ($(window).width() <= 1000) {

    if ($('.main__popular-wrapper').length) {
      $('.main__popular-container').addClass('swiper-container');
      $('.popular-card').addClass('swiper-slide');
      $('.main__popular-wrapper').removeClass('row');
      $('.main__popular-wrapper').addClass('swiper-wrapper');

      new Swiper('.main__popular-container', {
        slidesPerView: 'auto',
        loop: true,
      });
    }
  }
});