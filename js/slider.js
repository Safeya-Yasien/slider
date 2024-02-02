// put imgs into array
let imgs = Array.from(document.querySelectorAll(".slider-container img"));

// current slide of number of slides 1 / 4
let slideNumber = document.querySelector(".slide-number");

let currentSlide = 1;

let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

// bulltes
let bullets = document.querySelector(".indicators");

// create bulltes
let bulletsUl = document.createElement("ul");
bulletsUl.setAttribute("class", "bullets-ul");

for (let i = 1; i <= imgs.length; i++) {
  let bulletsLi = document.createElement("li");
  bulletsLi.setAttribute("data-index", i);
  bulletsLi.textContent = i;

  bulletsUl.appendChild(bulletsLi);
}

bullets.appendChild(bulletsUl);

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    sliderCounter();
  }
}

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    sliderCounter();
  }
}

function sliderCounter() {
  slideNumber.textContent = `${currentSlide} / ${imgs.length}`;

  removeActive();
  imgs[currentSlide - 1].classList.add("active");

  bulletsArray = Array.from(document.querySelectorAll(".bullets-ul li"));

  for (let i = 0; i < imgs.length; i++) {
    bulletsArray[i].onclick = () => {
      currentSlide = parseInt(bulletsArray[i].textContent);
      sliderCounter();
    };
  }

  bulletsArray.forEach((bullet) => bullet.classList.remove("active"));
  bulletsArray[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide === imgs.length) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

sliderCounter();

function removeActive() {
  imgs.forEach((img) => img.classList.remove("active"));
}
