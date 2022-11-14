const left = () => {
  const tl = new TimelineMax();
  const lineL = document.querySelector("#left path");
  // console.log(lineL);
  tl.set(lineL, { attr: { d: "M9,35L9,35" } }).to(lineL, 0.2, {
    ease: Power0.easeNone,
    attr: { d: "M9,35L25,50" },
  });

  return tl;
};
const right = () => {
  const tl = new TimelineMax();
  const lineR = document.querySelector("#right path");

  tl.set(lineR, { attr: { d: "M22.2,50L22.2,50" } }).to(
    lineR,
    0.2,

    {
      ease: Power0.easeNone,
      attr: { d: "M22.2,50L50,25" },
    },
    0.2
  );

  return tl;
};
const link = document.querySelector(".content__link");
// console.log(link);

const master = new TimelineMax({ paused: true });
master.add("start");
master.add(left(), "start");

master.add(right(), "start");
// console.log(master);

link.addEventListener("mouseover", () => {
  if (master._paused) {
    master.resume();
  }
});
const width = $(window).width();
// console.log(width);
const height = $(window).height();
// console.log(height);

function where() {
  const scrollValue = $(window).scrollTop();
  console.log(scrollValue);
  const heightlink = $(".content__link").offset().top;
  // console.log(heightlink);
  if (scrollValue > heightlink - height / 2 && width < 1024) {
    master.resume();
  }
}

$(window).on("scroll", where);
