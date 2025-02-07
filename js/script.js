const hbgBtn = document.querySelector(".button-animate");

// Select the target element
const targetElement = document.querySelector("#portfolio");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //appear(document.querySelector(".portfolio", 0, 10, 100)); // Add class when in viewport
        document.querySelector(".top-portfolio").classList.toggle("show");
      } else {
        //appear(document.querySelector(".portfolio", 0, -10, 100)); // Remove class when out of viewport\
        document.querySelector(".top-portfolio").classList.toggle("show");
      }
    });
  },
  { threshold: 0.2 }
); // 50% of the element should be visible

// Observe the target element
observer.observe(targetElement);

// Use typed.js for showing my brief introduction section

//intro paragraph
const introString = `I am a second-year Software Engineering student at CAMT, Chiang Mai University. I enjoy solving problems, building efficient systems, and continuously expanding my knowledge. I am eager to apply my skills in real-world projects and contribute to innovative solutions in the tech industry.`;

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

// Skill Typing
let toggleJava = false;
let togglePython = false;
let toggleJS = false;
let toggleSql = false;
const toggles = [toggleJava, togglePython, toggleJS, toggleSql];

const javaBtn = document.querySelector(".java-btn");
const pythonBtn = document.querySelector(".python-btn");
const jsBtn = document.querySelector(".js-btn");
const sqlBtn = document.querySelector(".sql-btn");
const btns = [javaBtn, pythonBtn, jsBtn, sqlBtn];

let typedJava;
let typedPython;
let typedJs;
let typedSql;
const types = [typedJava, typedPython, typedJs, typedSql];

let javaString = "<i> System.out.println(javaSkill());</i>";
let pythonString = "<i> print(show_python_skill()) </i>";
let jsString = "<i> console.log(showJsSkill()); </i>";
let sqlString = "<i> select sql_skill from skills; </i>";
const stringArray = [javaString, pythonString, jsString, sqlString];

btns.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    if (!toggles[i]) {
      document.querySelector(".console-" + i).classList.toggle("show");
      if (!types[i]) {
        types[i] = new Typed("#element-" + i, {
          strings: [stringArray[i]],
          typeSpeed: 20,
          cursorChar: "█",
          loop: false,
          onComplete: (self) => {
            document.querySelector(".skillset-" + i).classList.toggle("show");
          },
        });
      } else {
        document.querySelector(".skillset-" + i).classList.toggle("show");
      }
      toggles[i] = !toggles[i];
    } else {
      document.querySelector(".console-" + i).classList.toggle("show");
      document.querySelector(".skillset-" + i).classList.toggle("show");
      toggles[i] = !toggles[i];
    }
  });
});

// javaBtn.addEventListener("click", (e) => {
// if (!toggleJava) {
// document.querySelector(".java-console").classList.toggle("show");
//document.querySelector("#element").innerHTML = "";
// if (!typedJava) {
// typedJava = new Typed("#elementJava", {
// strings: [],
// typeSpeed: 20,
// cursorChar: "█",
// loop: false,
// onComplete: (self) => {
// document.querySelector(".skillset").classList.add("show");
// console.log("Oncomplete Called in java");
// },
// });
// }
// toggleJava = !toggleJava;
// } else {
// document.querySelector(".java-console").classList.toggle("show");
// document.querySelector("#java").classList.toggle("show");
// toggle = !toggle;
// }
// });
// Update description when carousel changes
document
  .getElementById("carouselExample")
  .addEventListener("slid.bs.carousel", function (event) {
    let activeItem = event.relatedTarget;
    let description = activeItem.getAttribute("data-description");
    document.querySelector(".carousel-description").style.opacity = "0";
    document.querySelector(".carousel-description").innerText = description;
    document.querySelector(".carousel-description").style.transform =
      " translateY(-10px)";
    setTimeout(() => {
      document.querySelector(".carousel-description").style.transform =
        "translateY(0)";
      document.querySelector(".carousel-description").style.opacity = "100%";
    }, 500);
  });
// For scroll up btn
const scrollBtn = document.querySelector(".scroll-up");
// Button will appear when 30% scroll down and disappear else
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".top-scroll-up").style.display = "block";
  } else {
    document.querySelector(".top-scroll-up").style.display = "none";
  }
};
scrollBtn.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
});
