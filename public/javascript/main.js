$(document).ready(function () {
    function scrollToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']");
        $('html,body').animate({
            scrollTop: aTag.offset().top
        }, 'slow');
    }

    scrollToAnchor('jumpto');

    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        mousewheel: true,
        rtl: true
      });
          

});