$(document).ready(function(){
  $('#blog-post').owlCarousel({
    center: true,
  loop:true,
  autoplay: true,
  autoplaySpeed:3000,
  autoplayHoverPause:true,
  dots:false,
  items:3,
  nav:false,
  margin:30,
  })
  $('.owl-carousel ').owlCarousel({
      center: true,
  loop:true,
autoplay: true,
autoplaySpeed:3000,
autoplayHoverPause:true,
  dots:false,
  items:1,
  nav:false,
})


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});