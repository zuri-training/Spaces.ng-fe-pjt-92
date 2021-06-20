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

// END 

//  ASIDE ITEMS FOR SMALLER SCREENS
const asideItem = document.querySelectorAll('.aside-item-title')
const filterWrap = document.querySelectorAll('.filter-wrap')

for (i = 0; i < asideItem.length; i++){
    if(document.documentElement.clientWidth < 1150) {
        let openFilter = asideItem[i];
        openFilter.addEventListener('click', () => {
            if(openFilter.nextElementSibling.classList.contains('close-filter')){
                openFilter.nextElementSibling.classList.add ('open-filter')
                openFilter.nextElementSibling.classList.remove ('close-filter')
            }else if(openFilter.nextElementSibling.classList.contains('open-filter')) {
                openFilter.nextElementSibling.classList.remove ('open-filter')
                openFilter.nextElementSibling.classList.add ('close-filter')
            }
        })
    }
}

// SPACE-ITEM LIKE ICON

const spacesItem = document.querySelectorAll('.spaces-item')

function likeBtn (){
    [...spacesItem].forEach((item) => {
        let like = item.children[2]
        like.addEventListener('click', () => {
            if (like.innerHTML === '<i class="far fa-heart"></i>'){
                like.innerHTML = '<i class="fas fa-heart liked"></i>';
            }
            else if (like.innerHTML === '<i class="fas fa-heart liked"></i>'){
                like.innerHTML = '<i class="far fa-heart"></i>';
            }

        })
    })    
}
likeBtn();



