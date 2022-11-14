class Slider {
  constructor(selector, customOptions) {
    const defaultOptions = {
      timePause: 5000
    };
    // this.options = Object.assign({}, defaultOptions, customOptions);
    this.options = { ...defaultOptions, ...customOptions };
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slide");
    this.currentIndex = 0;
    this.time = null;
    this.prevButton = this.slider.querySelector(".buttons__prev");
    this.nextButton = this.slider.querySelector(".buttons__next");
    this.dots = this.slider.querySelectorAll(".dots__button");
    this.indicatorElement = this.slider.querySelector(".dots__time-indicator");
    this.indicatorTime = null;
    this.titles = this.slider.querySelectorAll(".slide__title");
    this.divider_lefts = this.slider.querySelectorAll(".divider_left");
    this.divider_rights = this.slider.querySelectorAll(".divider_right");
    this.contents = this.slider.querySelectorAll(".slide__content");
    // console.log(this.divider_lefts, this.divider_rights);

    this.generateSlider();
  }

  generateSlider() {
    this.nextSlide(this.currentIndex);
    this.prevButton.addEventListener("click", this.prevSlide.bind(this));
    this.nextButton.addEventListener("click", e => this.nextSlide(e));
    this.changeDot();
  }

  changeSlide(index) {
    this.slides.forEach(slide => {
      slide.classList.remove("active");
    });

    this.slides[index].classList.add("active");

    this.dots.forEach(dot => {
      dot.classList.remove("active");
    });
    this.dots[index].classList.add("active");

    clearInterval(this.time);
    this.time = setInterval(() => {
      this.nextSlide();
    }, this.options.timePause);

    this.showTitlesAndContents(index);
  }

  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex > this.slides.length - 1) {
      this.currentIndex = 0;
    }
    this.changeSlide(this.currentIndex);
    clearInterval(this.indicatorTime);
    this.indicatorTime = this.changeIndicator();
  }

  prevSlide() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.slides.length - 1;
    }
    this.changeSlide(this.currentIndex);
    clearInterval(this.indicatorTime);
    this.indicatorTime = this.changeIndicator();
  }

  changeDot() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.changeSlide(index);
        clearInterval(this.indicatorTime);
        this.indicatorTime = this.changeIndicator();
      });
    });
  }

  changeIndicator() {
    let width = 0;
    const interval = setInterval(() => {
      if (width === 100) {
        clearInterval(interval);
      } else {
        width++;
        this.indicatorElement.style.width = `${width}%`;
      }
    }, this.options.timePause / 100);
    return interval;
  }

  showTitlesAndContents(index) {
    this.titles.forEach(title => {
      title.classList.remove("active");
    });
    this.titles[index].classList.add("active");

    this.contents.forEach(content => {
      content.classList.remove("active");
    });
    this.contents[index].classList.add("active");
    //nowe
    // console.log(this.divider_lefts, this.divider_rights);
    this.divider_lefts.forEach(divider_left => {
      divider_left.classList.remove("active");
    });
    this.divider_lefts[index].classList.add("active");

    this.divider_rights.forEach(divider_right => {
      divider_right.classList.remove("active");
    });
    this.divider_rights[index].classList.add("active");
  }
}
