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
    document.querySelector(".carousel-description").innerText = description;
  });
