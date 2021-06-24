const navToggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.nav-links-container');

navToggler.addEventListener('click', () => {
 navLinks.classList.toggle('active');
 
});

var checkP = function(){
    if (document.getElementById('password').value=== document.getElementById('confirm').value){
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML ='matching';
    }else{
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML ='not matching';
    }
}

