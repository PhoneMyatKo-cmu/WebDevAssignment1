const hbgBtn = document.querySelector(".button-animate");

// Slowly appear animation
function appear(elm, i, step, speed) {
  var t_o;
  //initial opacity
  i = i || 0;
  //opacity increment
  step = step || 5;
  //time waited between two opacity increments in msec
  speed = speed || 50;

  t_o = setInterval(function () {
    //get opacity in decimals
    var opacity = i / 100;
    //set the next opacity step
    i = i + step;
    if (opacity > 1 || opacity < 0) {
      clearInterval(t_o);
      //if 1-opaque or 0-transparent, stop
      return;
    }
    //modern browsers
    elm.style.opacity = opacity;
    //older IE
    elm.style.filter = "alpha(opacity=" + opacity * 100 + ")";
  }, speed);
}

// Select the target element
const targetElement = document.querySelector("#portfolio");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        appear(document.querySelector(".portfolio", 0, 10, 100)); // Add class when in viewport
      } else {
        appear(document.querySelector(".portfolio", 0, -10, 100)); // Remove class when out of viewport
      }
    });
  },
  { threshold: 0.1 }
); // 50% of the element should be visible

// Observe the target element
observer.observe(targetElement);
const introString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab aut," +
  "natus molestias et asperiores quidem autem quisquam culpa modi amet optio dolorem quis omnis alias" +
  "sint quasi sit expedita.";
typed = new Typed("#element", {
  strings: [introString.trim()],
  typeSpeed: 10,
  loop: false,
  onComplete: (self) => {
    document.querySelector(".typed-cursor").style.display = "none";
    document.querySelector(".background").classList.add("show");
  },
});
