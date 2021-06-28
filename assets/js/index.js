// MOBILE NAV MENU
const menuIcon = document.getElementById("menu-icon");
const mobileNav = document.getElementById("mobile-nav");
const linksContainer = document.querySelector("#mobile-nav-links");
const links = document.querySelectorAll("#mobile-nav-links li");
const bar = document.getElementById("bars");

menuIcon.addEventListener("click", () => {
  bar.classList.toggle("rotate");
  mobileNav.classList.toggle("open");
  if (mobileNav.classList.contains("bg-overlay")) {
    mobileNav.classList.remove("bg-overlay");
  } else {
    mobileNav.classList.add("bg-overlay");
  }
  linksContainer.classList.toggle("nav-animation");
});
function lockScroll() {
  document.body.classList.toggle("lock-scroll");
}

// SLIDERS

$(function () {
  $(".testimonies__details").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow:
      '<span class="prev act-btn"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="next act-btn"><i class="fas fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $(".featured__spaces__wrap").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    prevArrow:
      '<span class="f-prev f-act-btn"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="f-next f-act-btn"><i class="fas fa-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// END

// POPULATING THE FORM WITH STATES AND LGAS

function loadState() {
  let dropdown = document.getElementById("state");
  dropdown.length = 0;

  let defaultOption = document.createElement("option");
  defaultOption.text = "Select State";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  fetch("http://locationsng-api.herokuapp.com/api/v1/states")
    .then((response) => response.json())
    .then((data) => {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].name;
        if (option.text !== "Federal Capital Territory") {
          option.value = data[i].name;
        } else {
          option.value = "Abuja";
        }
        dropdown.add(option);
      }
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
}

function loadLga(state) {
  let dropdown = document.getElementById("lga");
  dropdown.length = 0;

  let defaultOption = document.createElement("option");
  defaultOption.text = "Select LGA";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  fetch(`http://locationsng-api.herokuapp.com/api/v1/states/${state}/lgas`)
    .then((response) => response.json())
    .then((data) => {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i];
        option.value = data[i];
        dropdown.add(option);
      }
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
}

document.addEventListener("DOMContentLoaded", loadState);
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#state").onchange = function () {
    let state = this.value;
    loadLga(state);
  };
});
