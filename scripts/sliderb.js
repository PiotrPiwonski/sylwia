// Slider

const slideListBig = [
  {
    img: "img/sliderb/1.jpg",
    text:
      "Twórcze rozwiązywanie problemów to umiejętność, której można się nauczyć"
  },
  {
    img: "img/sliderb/2.jpg",
    text: "Zmieniaj nawyki i utarte drogi myślenia i działania, łam schematy "
  },
  {
    img: "img/sliderb/3.jpg",
    text: "Zdolność do bycia kreatywnym jest kluczowa w każdej dziedzinie"
  },
  {
    img: "img/sliderb/4.jpg",
    text: "Myślenie równoległe opóźnia starzenie "
  },
  {
    img: "img/sliderb/5.jpg",
    text:
      "Kreatywność to inteligencja, która dobrze się bawi  - Albert Einstein "
  }
];

const imageBig = document.querySelector("img.sliderb");
const h1Big = document.querySelector("h1.sliderb");
// const dotsBig = [...document.querySelectorAll(".dots span")];

// Interfejs
const timeBig = 4000;
let activeBig = 0;

// Implementacje

// const changeDotBig = () => {
//   const activeDotBig = dotsBig.findIndex(dot =>
//     dot.classListBig.contains("active")
//   );
//   dotsBig[activeDotBig].classList.remove("active");
//   dotsBig[activeBig].classList.add("active");
// };

const changeSlideBig = () => {
  activeBig++;
  if (activeBig === slideListBig.length) {
    activeBig = 0;
  }
  imageBig.src = slideListBig[activeBig].img;
  h1Big.textContent = slideListBig[activeBig].text;
  // changeDotBig();
};
let indexIntervalBig = setInterval(changeSlideBig, timeBig);

// Klawisze
// const keyChangeSlideBig = e => {
//   console.log(e.keyCode);
//   if (e.keyCode == 37 || e.keyCode == 39) {
//     clearInterval(indexIntervalBig);
//     e.keyCode == 37 ? activeBig-- : activeBig++;
//     if (activeBig === slideListBig.length) {
//       activeBig = 0;
//     } else if (activeBig < 0) {
//       activeBig = slideListBig.length - 1;
//     }
//     imageBig.src = slideListBig[activeBig].img;
//     h1Big.textContent = slideListBig[activeBig].text;
//     changeDotBig();
//     indexIntervalBig = setInterval(changeSlideNig, timeBig);
//   }
// };

// kropki

// const changeDotOnClickBig = e => {
//   console.log(e.target.id);
//   if (e.target.id === "one") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 0;
//     image.src = slideListBig[active].img;
//     h1.textContent = slideListBig[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
//   if (e.target.id === "two") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 1;
//     image.src = slideListBig[active].img;
//     h1.textContent = slideListBig[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
//   if (e.target.id === "three") {
//     clearInterval(indexInterval);
//     // console.log("działa");
//     active = 2;
//     image.src = slideListBig[active].img;
//     h1.textContent = slideListBig[active].text;
//     changeDot();
//     indexInterval = setInterval(changeSlide, time);
//   }
// };

// window.addEventListener("click", changeDotOnClick);
// window.addEventListener("keydown", keyChangeSlide);
