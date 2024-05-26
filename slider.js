const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
let length = image.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#fff";

const resetBG = () => {
  buttons.forEach((button) => (button.style.backgroundColor = "transparent"));
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBG();
    slider.style.transform = `translateX(-${i * 800}px)`;
    sliderNumber = i + 1;
    button.style.backgroundColor = "#fff";
  });
});

const changeColor = () => {
  resetBG();
  buttons[sliderNumber - 1].style.backgroundColor = "#fff";
};

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
  slider.style.transform = `translateX(-${length - 1 * 800}px)`;
  sliderNumber = length;
};
right.addEventListener("click", () => {
  sliderNumber < image.length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  sliderNumber < 1 ? getLastSlide() : prevSlide();
  changeColor();
});


