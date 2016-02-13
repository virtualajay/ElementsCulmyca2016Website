$(window).scroll(
    function() {
        $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }),
    $(function() {

        $("a.page-scroll").bind("click", function(e) {
            var t = $(this);
            $("html, body").stop().animate({
                scrollTop: $(t.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), e.preventDefault()
        })
    }),
    $(".navbar-collapse ul li a").click(
        function() {
            $(".navbar-toggle:visible").click()
        });
