$(document).ready(function () {

    $(window).scroll(function () {

        var distance = $(window).scrollTop();
        //console.log(distance);

        //var dimension = $(".picture").width();
        //var dimension = $(".picture").height();
        //console.log(dimension);

        var dimension = $(".picture").outerHeight();
        //console.log(dimension);

        if (distance >= dimension) {
            //$(".menu").addClass("fixed");

            $(".menu").addClass("fixed").slideDown(500);
        }
        else {
            $(".menu").removeClass("fixed");
            $(".menu").removeAttr("style");
        };

    });

});