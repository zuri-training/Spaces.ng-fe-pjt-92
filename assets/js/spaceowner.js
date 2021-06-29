// HEADER STYLES
// MOBILE NAV MENU
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');
const linksContainer = document.querySelector('#mobile-nav-links')
const links = document.querySelectorAll('#mobile-nav-links li');
const bar = document.getElementById('bars')

menuIcon.addEventListener('click', () => { 
    bar.classList.toggle('rotate')
    mobileNav.classList.toggle('open')
    if(mobileNav.classList.contains('bg-overlay')){
    mobileNav.classList.remove('bg-overlay')
    }else{ 
    mobileNav.classList.add('bg-overlay')
    }
    linksContainer.classList.toggle('nav-animation')
})
function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

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