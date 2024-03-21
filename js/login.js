const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.item-close');
const iconvisibility = document.querySelector('.form-box.login .visibility');
const iconvisibilityoff = document.querySelector('.form-box.login .visibilityoff');
const iconrevisibility = document.querySelector('.form-box.register .visibility');
const iconrevisibilityoff = document.querySelector('.form-box.register .visibilityoff');
const buttonlogin = document.querySelector('.form-box.login .btn');
const buttonRegister = document.querySelector('.form-box.register .btn');
const homerecipebutton = document.querySelector('.navbar-list');
const saverecipebutton = document.querySelector('.btn.btn-primary.has-icon');

homerecipebutton.addEventListener("click", ()=> {
    alert("Please log in to use this website.");
});

saverecipebutton.addEventListener("click", ()=> {
    alert("Please log in to use this website.");
});

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove('active-popup');
});

iconvisibility.addEventListener("click", ()=> {
    wrapper.classList.add('active-open');

    let passwordInput = iconvisibility.parentElement.querySelector("input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
});

iconvisibilityoff.addEventListener("click", ()=> {
    wrapper.classList.remove('active-open');
    
    let passwordInput = iconvisibilityoff.parentElement.querySelector("input");
    if (passwordInput.type === "text") {
        passwordInput.type = "password";
    }
});

iconrevisibility.addEventListener("click", ()=> {
    wrapper.classList.add('active-open');

    let passwordInput = iconrevisibility.parentElement.querySelector("input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
});

iconrevisibilityoff.addEventListener("click", ()=> {
    wrapper.classList.remove('active-open');
    
    let passwordInput = iconrevisibilityoff.parentElement.querySelector("input");
    if (passwordInput.type === "text") {
        passwordInput.type = "password";
    }
});

buttonlogin.addEventListener("click", ()=> {
    event.preventDefault();
    let emailInput = document.getElementById('emailField');
    let passwordInput = document.getElementById('passwordField');
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (emailValue && passwordValue) {
        window.location.href = "home.html";
    }
});

buttonRegister.addEventListener("click", ()=> {
    event.preventDefault();
    let usernameInput = document.getElementById('textField');
    let emailInput = document.getElementById('secondEmailField');
    let passwordInput = document.getElementById('secondPasswordField');
    let usernameValue = usernameInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (usernameValue && emailValue && passwordValue) {
        wrapper.classList.add('active-register');
        wrapper.classList.remove('active');

        usernameInput.value = ''; 
        emailInput.value = ''; 
        passwordInput.value = ''; 
    }
});
