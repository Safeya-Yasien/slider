// make array of images
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of imges
let slideCount = sliderImages.length;

// current img
let currentSlide = 1;

// get slide number
let slideNumber = document.querySelector(".slider-number");

// get previous button
let prevButton = document.querySelector(".prev");

// get next button
let nextButton = document.querySelector(".next");

// get bulltes
let bullets = document.querySelector(".bulltes");

// create bulltes

function createBulltes() {
  let bulltesUl = document.createElement("ul");
  bulltesUl.setAttribute("class", "bullets-ul");

  for (let i = 0; i < slideCount; i++) {
    let bulltesUlLi = document.createElement("li");
    bulltesUlLi.setAttribute("data-index", i + 1);
    bulltesUlLi.textContent = i + 1;
    bulltesUl.appendChild(bulltesUlLi);
  }

  bullets.appendChild(bulltesUl);
}

createBulltes();

let bulltesUlArray = Array.from(document.querySelectorAll(".bullets-ul li"));

for (let i = 0; i < slideCount; i++) {
  bulltesUlArray[i].onclick = (event) => {
    currentSlide = parseInt(event.target.getAttribute("data-index"));
    currnetSlideNumber();
  };
}

// go to previous slide
prevButton.onclick = prevSlide;
function prevSlide() {
  if (prevButton.classList.contains("disabled")) return false;
  else {
    currentSlide--;
    currnetSlideNumber();
  }
}

// go to next slide
nextButton.onclick = nextSlide;
function nextSlide() {
  if (nextButton.classList.contains("disabled")) return false;
  else {
    currentSlide++;
    currnetSlideNumber();
  }
}

// add current slide number at top of img
function currnetSlideNumber() {
  slideNumber.textContent = `${currentSlide} / ${slideCount}`;

  removeActive();

  sliderImages[currentSlide - 1].classList.add("active");

  bulltesUlArray.forEach((bullet) => bullet.classList.remove("active"));

  bulltesUlArray[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide === slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

currnetSlideNumber();

function removeActive() {
  sliderImages.forEach((img) => img.classList.remove("active"));
}
