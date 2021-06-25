const submitBtn= document.querySelector('.login__btn');
const email= document.querySelector('.email');
const password= document.querySelector('.password');
const emailError= document.querySelector('.email__error');
const passwordError=document.querySelector('.password__error');
const emailCheck= document.querySelector('.email_check');
const emailExclamation= document.querySelector('.email_exclamation');
const passwordCheck= document.querySelector('.password_check');
const passwordExclamation= document.querySelector('.password_exclamation');
const form=document.querySelector('.login__form')

//VERIFICATION FOR EACH INPUT
const emailInput=document.forms['form']['email'];
const passwordInput=document.forms['form']['password'];

emailInput.addEventListener('textInput',verifyEmail());

function verifyEmail(){
    if(email.value.length>=8){
        setSuccessMessage(emailValue)
    }
}

passwordInput.addEventListener('textInput',verifyPassword());

function verifyPassword(){
    if(password.value.length>5){
        setPasswordSuccess();
    }
}
//ENDS HERE

//SUBMIT VERIFICATION
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputElements();
})

function checkInputElements(){
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    if(emailValue===''){
        setErrorMessage();
    }
    else if(!emailValue.includes('@gmail.com')){
        setErrorMessage();
        emailError.textContent='Incorrect email address'
    }
    else{
        setSuccessMessage(emailValue);
        
    }
    if(passwordValue===''){
        const parent= document.querySelector('.input__section');
        setPasswordError()

    }
    else if(passwordValue.length<5){
        setPasswordError()
        passwordError.textContent='Incorrect password'
    }else if(passwordValue.includes()){

    }
    else{
        setPasswordSuccess();
    }


}






//EMAIL ERROR FUNCTION
function setErrorMessage(){
    emailError.style.display='block'
    email.style.borderColor= 'red';
    emailExclamation.style.display='block';
    emailCheck.style.display='none';
}
//EMAIL SUCCESS MESSAGE
function setSuccessMessage(email){
    if(email.includes('@gmail.com')){
        const email= document.querySelector('.email');
        emailError.style.display='none';
        email.style.borderColor= 'green';
        emailExclamation.style.display='none';
        emailCheck.style.display='block';
    }
        
}


//PASSWORD ERROR MESSAGE
function setPasswordError(){
    passwordError.style.display='';
    password.style.borderColor= 'red';
    passwordError.style.display='block'
    password.style.borderColor= 'red';
    passwordExclamation.style.display='block';
    passwordCheck.style.display='none';
}
//PASSWORD SUCCESS
function setPasswordSuccess(){
    passwordError.style.display='';
    password.style.borderColor= 'green';
    passwordCheck.style.display='block';
    passwordExclamation.style.display='none';
}
