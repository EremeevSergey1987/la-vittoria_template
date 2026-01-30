$(document).ready(function () {
        var res = $(".block_cat");
        $('[rel^="m"]').on("click", funk);

        $(document).click(function(e) {
            if ($(e.target).closest(res).length || $(e.target).closest('.knop').length) return;
            res.fadeOut(100);
        });

        function funk(){
            var link = $(this).attr('rel'),
                el = $('.block_cat.'+link);
            if(el.css("display") == "none"){
                res.hide();
                el.fadeIn(200);
                el.css('display', 'flex');
            }
            else{
                el.fadeOut(200);
            }
            return false;
        }
});

//Прилепающее меню
window.addEventListener('scroll', function(ev) {
    var someDiv = document.getElementById('someDiv');
    var filtertop = document.getElementById('filtertop');
    var distanceToTop = someDiv.getBoundingClientRect().top;
    console.log(distanceToTop);
    if(distanceToTop < -82){
        filtertop.classList.add('fixtop')
    }
    else{
        filtertop.classList.remove('fixtop')
    }
});


// выбор размера и отображение наличия в магазинах
$('.color-props li').click(function(){
    var id = $(this).data('id'),
        value = $(this).data('value'),
        price = $(this).data('price');
    price_discont = $(this).data('price-discount');

    $('.color-props li').removeClass('active-prop');
    $(this).addClass('active-prop');

    $('.color-props2').css('display','none');
    $('#idd_'+id+'').css('display','block');

    $(".id-offer").val(id);
    //$(this).closest('ul').find('.id-offer').val(id);

    if(price == price_discont){
        $(this).closest('ul').next('.price').text(price + ' руб.');
    }
    else{
        $(this).closest('ul').next('.price').html('<span class="through">'+price+' руб.</span><span class="disc_price"> '+price_discont+' руб.</span>');
    }
    return false;
});



//Открывашки фильтров
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
            el.css('display', 'flex');
        }
        else{
            el.fadeOut(100);
        }
        return false;
    }
});













