const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);
const menuBottomBar = $$("#bottom-bar");
const menuMobileBtn = $$(".bottom-bar__mobile");
const menuMobile = $$('.bottom-bar__list')


//open menu
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
//tab product
const tabs = $$$(".tab-item");
const panes = $$$(".tab-pane");
const tabActive = $$(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function() {
    $$(".tab-item.active").classList.remove("active");
    $$(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };

});

// gallery thumb 
function choiceImg(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
   expandImg.alt = imgs.src;
}


 //rating star
function startRating(item){
  var count = 0;
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="yellow";
      document.getElementById((i+1)).classList.remove("bi-star");
      document.getElementById((i+1)).classList.add("bi-star-fill");
      
		}
		else{
			document.getElementById((i+1)).style.color="black";
      document.getElementById((i+1)).classList.remove("bi-star-fill");
      document.getElementById((i+1)).classList.add("bi-star");
		}
	}
}
// count characters length
function CountCharacters(character){
const characterLength = $$(".characters")
 var char = 1500 - character.length;
characterLength.innerHTML = '('+char+ ')'
}

const toggleComment = $$(".product-reviews__summary-comment")
const toggleProductReview = $$(".product-reviews__content-form")
toggleComment.onclick =() =>{
  toggleProductReview.classList.toggle("open")
}