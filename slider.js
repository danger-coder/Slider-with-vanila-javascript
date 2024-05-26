const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");

let sliderNumber = 1;
let length = image.length;

let nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  sliderNumber++;
};
let prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
  sliderNumber--;
};

let getFirstSlide = () => {
  sliderNumber = 1;
  slider.style.transform = `translateX(0px)`;
};
let getLastSlide = () => {
  sliderNumber = 1;
  slider.style.transform = `translateX(${length - 1 * 800}px)`;
};
right.addEventListener("click", () => {
  sliderNumber < image.length ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? getLastSlide() : prevSlide();
});
