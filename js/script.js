jQuery(document).ready(function($){
    if( $(window).width() > 768 ){
        $('ul.nav li a.dropdown-toggle').parent().hover(function() {
          $(this).parent().find('.dropdown-menu').stop(true, true).fadeIn(300);
        }, function() {
          $(this).parent().find('.dropdown-menu').stop(true, true).fadeOut(300);
        });
    } else {
        $('body.service #Approach .col-md-10 .row .col-md-3').queue(function(){
            $(this).prependTo( $(this).parent() ).dequeue();
        });
    }
    $(window).load(function(){
        $("body").css('opacity', 1).addClass('active');
        var elem = $('#Slider .slider-h span:first-child');
        function typing(el){
            if( !el.prev().is(':last-child') ){ el = el.css('opacity', 1).next(); }
            var t = setTimeout(function() {typing(el)}, 100);
        }
        var t = setTimeout(function() {typing(elem)}, 500);
    });
    var owl = $(".owl-carousel");
    $(".owl-carousel").owlCarousel({
        center: true,
        nav: true,
        navText: ["<img src='http://thelaunch.co/img/arrow-previous.svg'>","<img src='http://thelaunch.co/img/arrow-next.svg'>"],
        loop: true,
        dots: false,
        responsive: {
            0:   { items: 1 },
            768: { items: 3 }
        }
    });
    $('<div class="owlnumber">1</div>').insertAfter(".owl-prev");
    owl.on('changed.owl.carousel',function(property){
        var el = property.item.index;
        if (el == 2) el=3;
        else if (el==6) el=1;
        else el=el-2;
        $(".owlnumber").html(el);
    });
    $('section#CaseStudy .owl-item a.btn-default').click(function(e) {
        e.preventDefault();
        var data = $(this).attr('data-study');
        $(".case-study-content").stop(true, true).slideUp();
        $("#" + data).stop(true, true).slideDown();
    });
    $(".button-close").click(function(e){
        e.preventDefault();
        $(this).parent().slideUp();
    });
    $("section#Ready a.ready-btn, .subscribe-form .sf-close-btn, .contact-btn").click(function(e){
        e.preventDefault();
        $(".subscribe-form").toggleClass("active");
    });
});
