
/* ================ Check If There's Local Storage Color Option ================ */

let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // document.documentElement.style.setProperty("--main-color", localStorage.getItem("color_option"));
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class Form All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Itrm
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

/* ================ Settings Toggle Spin Class On Icon  ================ */
// Create Dark And Light

let checkBox = document.getElementById("check");
let bgLink = document.querySelectorAll(".nav-link");

checkBox.addEventListener("change", () => {

  document.body.classList.toggle("dark");

  document.querySelectorAll(".nav-link").forEach((li) => {
    li.classList.toggle("color-link");
  });
});

// Add Class Open Settings
document.querySelector(".toggle-settings").onclick = function () {
  document.querySelector(".gear").classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

// Create clock
setInterval(() => {
  const time = document.getElementById("clock");
  // const nowDate = document.getElementById('date');

  let date = new Date();

  // let year = date.getFullYear();
  // let month = date.getMonth();
  // let day = date.getDay();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";

  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
  // nowDate.textContent = day + '-' + month + '-' + year;
});

/* ================ Switch Colors ================ */

const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

      // Remove Active Class Form All Cgildrens
    //   e.target.parentElement.querySelectorAll(".active").forEach(element => {
    //   element.classList.remove("active");
    // });
    // // Add Active Class On Self
    // e.target.classList.add('active');

    handelActive(e);
  });
});

/* ================ Add Class Active For Link ================ */

// toggler Nav Bar
document.querySelector('.nav-toggle').onclick = function () {
  document.querySelector('.open-nav').classList.toggle('show-open-icon');
  document.querySelector('.nav-close').classList.toggle('show-close-icon');
};

let navCollapse = document.querySelectorAll(".nav-link");
let popupProjects = document.querySelectorAll(".name-projects");
navCollapse.forEach((li) => {
    li.addEventListener("click", () => {
      document.querySelector(".navbar-collapse").classList.remove("show");
      document.querySelector('.open-nav').classList.remove('show-open-icon');
      document.querySelector('.nav-close').classList.remove('show-close-icon');
      // Remove Class Show The Popup Projects
      popupProjects.forEach((e) => {
        e.parentElement.querySelectorAll(".show").forEach(element => {
        element.classList.remove("show");
        });
      });
    });
  });

/* ================ Typed ================ */

let typed = new Typed(".multiple-text", {
  strings: ["Front-end Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* ================ Swiper js ================ */
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ================ Skiils Progress ================ */

// Select Skills Selector
let ourSkills = document.querySelector(".skills");
let about = document.querySelector(".about");

//  Scroll sections active Link
let scrollNav = document.querySelectorAll(".nav-link");
let section = document.querySelectorAll("section");

window.onscroll =  () => {
  // Skill Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills  Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //  Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTOp = this.pageYOffset;

  if (windowScrollTOp > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }

  //  Scroll sections active Link
  let navBar = document.querySelector(".navbar");
  navBar.classList.toggle("bg-nav", window.scrollY > 50);

  //  Scroll sections active Buttn UP
  let btnUp = document.querySelector(".btn-up");
  btnUp.classList.toggle("active", window.scrollY > 700);

  //  Scroll sections active Link
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset -200 && top < offset + height) {
      scrollNav.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`.nav-link[href="#${id}"]`)
          .classList.add("active");
      });
    }
  });
};

/* ================ Buttons The Projects ================ */

let all = document.querySelector('.all');
let htmlCss = document.querySelector('.html-css');
let sass = document.querySelector('.sass');
let js = document.querySelector('.js');
let vue = document.querySelector('.vue');

all.onclick =  () => {
  document.querySelector('.css-projects').classList.remove('not-show');
  document.querySelector('.js-projects').classList.remove('not-show');
}
htmlCss.onclick =  () => {
  document.querySelector('.css-projects').classList.remove('not-show');
  document.querySelector('.js-projects').classList.add('not-show');
}
js.onclick =  () => {
  document.querySelector('.js-projects').classList.remove('not-show');
  document.querySelector('.css-projects').classList.add('not-show');
}
vue.onclick =  () => {
  document.querySelector('.css-projects').classList.add('not-show');
  document.querySelector('.js-projects').classList.add('not-show');
}
sass.onclick =  () => {
  document.querySelector('.css-projects').classList.add('not-show');
  document.querySelector('.js-projects').classList.add('not-show');
}

/* ================ Create Popup With Image The Projects ================ */

let btnProjects = document.querySelectorAll('.btn-projct span');

// Add Class Active at The Buttn
btnProjects.forEach((sp) => {
  sp.addEventListener("click", (e) => {
  //   document.querySelectorAll(".active").forEach((element) => {
  //     element.classList.remove("active");
  //   });
  //   e.target.classList.add('active');
  handelActive(e);
  });
});

// Add classList The projects Show The Popup
document.querySelector(".crds-btn").onclick = () => {
  document.querySelector(".crds").classList.toggle("show");
};

document.querySelector(".iphone-btn").onclick = () => {
  document.querySelector(".iphone").classList.toggle("show");
};

document.querySelector(".scroll-btn").onclick = () => {
  document.querySelector(".scroll").classList.toggle("show");
};

document.querySelector(".login-btn").onclick = () => {
  document.querySelector(".login").classList.toggle("show");
};

document.querySelector(".dashboard-btn").onclick = () => {
  document.querySelector(".dashboard").classList.toggle("show");
};

document.querySelector(".we-btn").onclick = () => {
  document.querySelector(".we").classList.toggle("show");
};

document.querySelector(".mnfaa-btn").onclick = () => {
  document.querySelector(".mnfaa").classList.toggle("show");
};

document.querySelector(".special-design-btn").onclick = () => {
  document.querySelector(".special-design").classList.toggle("show");
};

document.querySelector(".project-one-btn").onclick = () => {
  document.querySelector(".project-one").classList.toggle("show");
};

document.querySelector(".adidas-btn").onclick = () => {
  document.querySelector(".adidas").classList.toggle("show");
};

document.querySelector(".eslam-btn").onclick = () => {
  document.querySelector(".eslam").classList.toggle("show");
};

document.querySelector(".kasper-btn").onclick = () => {
  document.querySelector(".kasper").classList.toggle("show");
};

/* ================ Remov Class Show The Popup ================ */

let closePopup = document.querySelectorAll(".close");

closePopup.forEach((li) => {
  li.addEventListener("click", () => {
    document.querySelectorAll(".show").forEach((element) => {
      element.classList.remove("show");
    });
  });
});

/* ================ Reset Button ================ */
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  // localStorage.removeItem('color_option');
  // localStorage.removeItem('mode_option');

  // Reload Window
  window.location.reload();
}

/* ================ Creat Loading ================ */
let loader = document.querySelector('.bg-loading');

window.addEventListener('load', () => {
  loader.style.display = "none";
});

/* ================ Function Handel Active State ================ */
function handelActive(ev) {
  // Remove Active Class From All
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Self
    ev.target.classList.add("active");
  });
}

/* ================ Scroll Reveal ================ */

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".home .text,.text h1, .skill-box, .testimonial, .card-body, .my-projects .bg-projects, .about-text h2, .services-box",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".home-img, .about-text,.bg-img img, form, .profession-container .image,",
  { origin: "bottom" }
);