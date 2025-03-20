//Form focus to information input area
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Carousel slide script 
const carouselSlide = document.querySelectorAll(".img-container img");

const timeDelay = 6000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// carouselSlide[currentImageCounter].style.display = "block";
carouselSlide[currentImageCounter].style.opacity = 1;

setInterval(nextImage, timeDelay);

function nextImage() {
  // carouselSlide[currentImageCounter].style.display = "none";
  carouselSlide[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % carouselSlide.length;

  // carouselSlide[currentImageCounter].style.display = "block";
  carouselSlide[currentImageCounter].style.opacity = 1;
}

//recent work image galery function
let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

	thumbnails[i].addEventListener('mouseover', function(){
		console.log(activeImages)		
			if (activeImages.length > 0){
				activeImages[0].classList.remove('active')
		}	

		this.classList.add('active')
			document.getElementById('featured').src = this.src
		})
	}
	
	let buttonRight = document.getElementById('slideRight');
	let buttonLeft = document.getElementById('slideLeft');

	buttonLeft.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft -= 180
	})

	buttonRight.addEventListener('click', function(){
		document.getElementById('slider').scrollLeft += 180
	})