const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");
const tabActive =   document.querySelector(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
  console.log(tab)
});

// count characters length
function CountCharacters(character){
    const characterLength = document.querySelector(".characters")
     var char = 1500 - character.length;
    characterLength.innerHTML = '('+char+ ')'
    }
    
    const toggleComment = document.querySelector(".product-reviews__summary-comment")
    const toggleProductReview = document.querySelector(".product-reviews__content-form")
    toggleComment.onclick =() =>{
      toggleProductReview.classList.toggle("open")
    }