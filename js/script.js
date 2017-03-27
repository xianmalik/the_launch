jQuery(document).ready(function($){
    $("body").css('opacity', 1).addClass('active');
    var elem = $('#Slider .slider-h span:first-child');
    function typing(el){
        if( !el.prev().is(':last-child') ){ el = el.css('opacity', 1).next(); }
        var t = setTimeout(function() {typing(el)}, 100);
    }
    var t = setTimeout(function() {typing(elem)}, 500);
    var owl = $(".owl-carousel");
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 3,
        nav: true,
        navText: ["<img src='img/arrow-previous.svg'>","<img src='img/arrow-next.svg'>"],
        loop: true,
        dots: false
    });
    $('<div class="owlnumber">1</div>').insertAfter(".owl-prev");
    owl.on('changed.owl.carousel',function(property){
        var el = property.item.index;
        if (el == 2) el=3;
        else if (el==6) el=1;
        else el=el-2;
        $(".owlnumber").html(el);
    });
});
