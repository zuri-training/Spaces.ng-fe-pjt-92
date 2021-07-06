// HEADER STYLES
// MOBILE NAV MENU
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');
const linksContainer = document.querySelector('#mobile-nav-links')
const links = document.querySelectorAll('#mobile-nav-links li');
const bar = document.getElementById('bars')

menuIcon.addEventListener('click', () => { 
    document.body.classList.toggle('lock-scroll');
    bar.classList.toggle('rotate')
    mobileNav.classList.toggle('open')
    if(mobileNav.classList.contains('bg-overlay')){
    mobileNav.classList.remove('bg-overlay')
    }else{ 
    mobileNav.classList.add('bg-overlay')
    }
    linksContainer.classList.toggle('nav-animation')
})

// function lockScroll() {
//     document.body.classList.toggle('lock-scroll');
// }

// ADD FACILITY

const checkboxWrap = document.querySelector('.checkbox-wrap')
const addFacility = document.getElementById('other-facilities')
const addBtn = document.querySelector('.add')

addBtn.addEventListener('click', (event) => {
    let facility = addFacility.value;
    let newDiv = document.createElement('div')
    newDiv.classList.add('checkbox-item')
    newDiv.innerHTML = '<input type="checkbox" checked>'
    newPTag = document.createElement('p')
    newPTag.innerText = facility
    newDiv.appendChild(newPTag)
    checkboxWrap.appendChild(newDiv)
    event.preventDefault()
    document.getElementById('other-facilities').value = ""
})

// STATE AND LGAs
function loadState() {
  let dropdown = document.getElementById("state-dropdown");
  dropdown.length = 0;

  let defaultOption = document.createElement("option");
  defaultOption.text = "Select State";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  fetch("NgStateAndLgaApi.txt")
    .then((response) => response.json())
    .then((data) => {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].state.name;
        option.value = data[i].state.id;
        dropdown.add(option);
      }
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
}
  
function loadLga(stateId) {
  let dropdown = document.getElementById("lga-dropdown");
  dropdown.length = 0;

  let defaultOption = document.createElement("option");
  defaultOption.text = "Select LGA";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  fetch("NgStateAndLgaApi.txt")
    .then((response) => response.json())
    .then((data) => {
      let option;

      for (let i = 0; i < data.length; i++) {
        if (parseInt(stateId) === data[i].state.id) {
          for (let j = 0; j < data[i].state.locals.length; j++) {
            option = document.createElement("option");
            option.text = data[i].state.locals[j].name;
            option.value = data[i].state.locals[j].id;
            dropdown.add(option);
          }
        }
      }
    })
    .catch((error) => {
      console.log("Fetch Error: ", error);
    });
}
  
document.addEventListener("DOMContentLoaded", loadState);
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#state-dropdown").onchange = function () {
    let stateId = this.value;
    loadLga(stateId);
  };
});

//  IMAGE STUFF
function previewImg(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output = document.getElementById('space-image');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0])
}