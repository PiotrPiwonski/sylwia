// Slider

const slideList = [
  {
    img: "img/sliders/1.jpg",
    text:
      "Twórcze rozwiązywanie problemów to umiejętność, której można się nauczyć"
  },
  {
    img: "img/sliders/2.jpg",
    text: "Zmieniaj nawyki i utarte drogi myślenia i działania, łam schematy "
  },
  {
    img: "img/sliders/3.jpg",
    text: "Zdolność do bycia kreatywnym jest kluczowa w każdej dziedzinie"
  },
  {
    img: "img/sliders/4.jpg",
    text: "Myślenie równoległe opóźnia starzenie "
  },
  {
    img: "img/sliders/5.jpg",
    text:
      "Kreatywność to inteligencja, która dobrze się bawi  - Albert Einstein "
  }
];

const image = document.querySelector("img.sliders");
const h1 = document.querySelector("h1.sliders");
// const dots = [...document.querySelectorAll(".dots span")];

// Interfejs
const time = 4000;
let active = 0;

// Implementacje

// const changeDot = () => {
//   const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
//   dots[activeDot].classList.remove("active");
//   dots[active].classList.add("active");
// };

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  // changeDot();
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
// const keyChangeSlide = e => {
//   console.log(e.keyCode);
//   if (e.keyCode == 37 || e.keyCode == 39) {
//     clearInterval(indexInterval);
//     e.keyCode == 37 ? active-- : active++;
//     if (active === slideList.length) {
//       active = 0;
//     } else if (active < 0) {
//       active = slideList.length - 1;
//     }
//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
// };

// kropki

// const changeDotOnClick = e => {
//   console.log(e.target.id);
//   if (e.target.id === "one") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 0;
//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
//   if (e.target.id === "two") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 1;
//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
//   if (e.target.id === "three") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 2;
//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
// };

// window.addEventListener("click", changeDotOnClick);
// window.addEventListener("keydown", keyChangeSlide);
