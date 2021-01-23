let btns = document.querySelectorAll(".btn");
let slides = document.querySelectorAll(".slide");

let manualSlideShow = (manualIndex) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manualIndex].classList.add("active");
  btns[manualIndex].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.onclick = () => {
    manualSlideShow(i);
  };
});

// AutoPlay Navigation

var repeat = function () {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 3000);
  };
  repeater();
};
repeat();
