let images = [{
  url: "./img/1.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "./img/3.png",
  title: "Sochi Thieves",
  city: "Sochi Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "./img/2.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider() {
  if (!images || !images.length) return

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTextUp = document.querySelector(".slider__textUp");
  let sliderTextLeftCity = document.querySelector(".slider__text-left1");
  let sliderTextLeftArea = document.querySelector(".slider__text-left2");
  let sliderTextLeftTime = document.querySelector(".slider__text-left3");
  let sliderTextLeftCost = document.querySelector(".slider__text-left4");

  initImages();
  initArrows();
  initDots();
  initTextUp();
  initTextLeft();

  function initImages() { //делает активным класс одной из картинки
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    })
  }

  function initTextUp() {
    images.forEach((item, index) => {
      let textUpDiv = `<div class="text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
      sliderTextUp.innerHTML += textUpDiv;
    });
    sliderTextUp.querySelectorAll(".text").forEach(textUpDiv => {
      textUpDiv.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        sliderTextUp.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }

  function initTextLeft() {
    images.forEach((item, index) => {
      let textLeftDivCity = `<div class="text-left n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}</div>`;
      sliderTextLeftCity.innerHTML += textLeftDivCity;

      let textLeftDivArea = `<div class="text-left n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</div>`;
      sliderTextLeftArea.innerHTML += textLeftDivArea;

      let textLeftDivTime = `<div class="text-left n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</div>`;
      sliderTextLeftTime.innerHTML += textLeftDivTime;

      let textLeftDivCost = `<div class="text-left n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].cost}</div>`;
      sliderTextLeftCost.innerHTML += textLeftDivCost;
    })
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTextUp.querySelector(".active").classList.remove("active");
    sliderTextUp.querySelector(".n" + num).classList.add("active");
    sliderTextLeftCity.querySelector(".active").classList.remove("active");
    sliderTextLeftCity.querySelector(".n" + num).classList.add("active");
    sliderTextLeftArea.querySelector(".active").classList.remove("active");
    sliderTextLeftArea.querySelector(".n" + num).classList.add("active");
    sliderTextLeftTime.querySelector(".active").classList.remove("active");
    sliderTextLeftTime.querySelector(".n" + num).classList.add("active");
    sliderTextLeftCost.querySelector(".active").classList.remove("active");
    sliderTextLeftCost.querySelector(".n" + num).classList.add("active");
  }

}

document.addEventListener("DOMContentLoaded", initSlider);