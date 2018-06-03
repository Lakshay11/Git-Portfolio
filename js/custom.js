// tabs right side
$(".scroll-to1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".scroll-to2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$(".scroll-to3").click(function() {
    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 1000);
});

$(".scroll-to4").click(function() {
    $('html, body').animate({
        scrollTop: $("#project").offset().top
    }, 1000);
});
