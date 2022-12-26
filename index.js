
$(function () {
    // fixed navbar changing collor when scrolled
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // smooth scrolling in href anchors
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


});
$(document).ready(function () {

    var intervalId = window.setInterval(function(){
        plusSlides()
      }, 6000);


    $("#next").click(function () {
        plusSlides()
    });
    $("#prev").click(function () {
        plusSlides()
    });
    function plusSlides() {
        if ($("#banner1").hasClass("active")) {
            $("#banner1").removeClass("active")
            $("#banner1").addClass("deactive")

            $("#banner2").removeClass("deactive")
            $("#banner2").addClass("active")

        }
        else {
            $("#banner2").removeClass("active")
            $("#banner2").addClass("deactive")

            $("#banner1").removeClass("deactive")
            $("#banner1").addClass("active")
        }

    }
}

);