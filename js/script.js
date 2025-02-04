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
        //appear(document.querySelector(".portfolio", 0, 10, 100)); // Add class when in viewport
        document.querySelector(".top-portfolio").style.opacity = "100%";
      } else {
        //appear(document.querySelector(".portfolio", 0, -10, 100)); // Remove class when out of viewport
      }
    });
  },
  { threshold: 0.2 }
); // 50% of the element should be visible

// Observe the target element
observer.observe(targetElement);

// Use typed.js for showing my brief introduction section

//intro paragraph
const introString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab aut," +
  "natus molestias et asperiores quidem autem quisquam culpa modi amet optio dolorem quis omnis alias" +
  "sint quasi sit expedita.";

// Typing Obj
let typed = new Typed("#element", {
  strings: [introString.trim()],
  typeSpeed: 10,
  loop: false,
  onComplete: (self) => {
    //Callbacks for after typing finished

    //Hide blinking cursor
    document.querySelector(".typed-cursor").style.display = "none";
    //Make hidden section appear
    document.querySelector(".profile-hide").style.opacity = "100%";
  },
});

const seeMoreBtn = document.querySelector(".see-more-btn");
seeMoreBtn.addEventListener("click", (e) => {
  document.querySelector(".background").classList.add("show");
  document.querySelector(".personal-details").style.left = "0";
  document.querySelector(".see-more").style.display = "none";
  document.querySelector(".see-less-btn").style.display = "block";
});

const seeLessBtn = document.querySelector(".see-less-btn");
seeLessBtn.addEventListener("click", (e) => {
  document.querySelector(".background").classList.toggle("show");
  setTimeout(() => {
    document.querySelector(".personal-details").style.left = "35%";
  }, 900);
  seeLessBtn.style.display = "none";
  seeMoreBtn.parentElement.style.display = "block";
});
