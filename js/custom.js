// tabs right side
$(".scroll-to1").click(function () {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$(".scroll-to2").click(function () {
  $('html, body').animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
});

$(".scroll-to3").click(function () {
  $('html, body').animate({
    scrollTop: $("#education").offset().top
  }, 1000);
});

$(".scroll-to4").click(function () {
  $('html, body').animate({
    scrollTop: $("#project").offset().top
  }, 1000);
});
$('.sidenav').sidenav();

instance.open();
instance.close();
instance.destroy();
$('.sidenav').sidenav();
$('.sidenav').sideNav({
    menuWidth: 300,
    // / closeOnClick: true,
    edge: 'right', // <--- CHECK THIS OUT
  }
);
$('.collapsible').collapsible();

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery



/* Check the location of each element */
$('.content').each( function(i){

  var bottom_of_object= $(this).offset().top + $(this).outerHeight();
  var bottom_of_window = $(window).height();

  if( bottom_of_object > bottom_of_window){
    $(this).addClass('hidden');
  }
});


$(window).scroll( function(){
    /* Check the location of each element hidden */
    $('.hidden').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fadeIn it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},700);
        }
    });
});
