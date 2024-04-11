const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
const buttons = carousel.querySelectorAll(".button");
let currentIndex = 0;
let autoplayInterval;

function showImage (index){
    images[currentIndex].classList.remove("active","entering","leaving");
    images[index].classList.add("active","entering");

    setTimeout(() => {
        images[currentIndex].classList.remove("entering");},500);
        currentIndex = index;
        updateButtons();
    }

function nextImage (){
    showImage((currentIndex + 1) % images.length);
}
function previousImage(){
    showImage((currentIndex - 1 + images.length) % images.length);
}

function updateButtons(){
    buttons.forEach((button) => {button.classList.remove("active");});
    buttons[currentIndex].classList.add("active");
}

buttons.forEach((button,index) => {button.addEventListener("click",() => {showImage(index);});});

document.querySelector(".right-arrow").addEventListener("click", nextImage);
document.querySelector(".left-arrow").addEventListener("click", previousImage);

function startAutoplay(){
    autoplayInterval = setInterval(nextImage, 5000);
}

function stopAutoplay(){ clearInterval(autoplayInterval);
}

carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

buttons.forEach((button, index) => {
    button.addEventListener("click",() => {
        showImage(index);
        stopAutoplay();
    });
});

startAutoplay();