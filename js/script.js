jQuery(document).ready(function($){
    owl = $(".owl-carousel");
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
