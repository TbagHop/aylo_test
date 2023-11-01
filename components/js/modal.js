const modal = document.querySelector('.modal');
const form = document.querySelector('.modal_content > form');

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

let inputs_ok = {
    username: false,
    email: false,
    password: false
};

const modalClose = () => {
    modal.classList.remove('active');
}

modal.addEventListener('click', () => {
    modalClose();  
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});

username.addEventListener('keyup', (e) => {
    const value = e.target.value;

    if(value === '') {
        usernameError.textContent = 'Username is required';
        username.classList.add('error');
    } else if (value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        username.classList.add('error');
    } else {
        usernameError.textContent = '';
        inputs_ok.username = true;
        username.classList.remove('error');
    }
})

email.addEventListener('keyup', (e) => {
    const value = e.target.value;

    if(value === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('error');
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        emailError.textContent = 'Email is invalid';
        email.classList.add('error');
    } else {
        emailError.textContent = '';
        inputs_ok.email = true;
        email.classList.remove('error');
    }
});

password.addEventListener('keyup', (e) => {
    const value = e.target.value;

    if(value === '') {
        passwordError.textContent = 'Password is required';
        password.classList.add('error');
    } else if (value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        password.classList.add('error');
    } else if (value.search(/[0-9]/) < 0) {
        passwordError.textContent = 'Password must contain at least one digit';
        password.classList.add('error');
    } else if (value.search(/[A-Z]/) < 0) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        password.classList.add('error');
    } else if (value.search(/[a-z]/i) < 0) {
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        password.classList.add('error');
    } else if (value.search(/[=\/`*\\.,?!:;'"()\[\]\-\/\\&@%#$]/) < 0) {
        passwordError.textContent = 'Password must contain at least one special character';
        password.classList.add('error');
    } else if (value.search(/\s/) >= 0) {
        passwordError.textContent = 'Password must not contain any whitespace';
        password.classList.add('error');
    } else { 
        passwordError.textContent = '';
        inputs_ok.password = true;
        password.classList.remove('error');
    }
});

const onRegister = () => {
    if(inputs_ok.username && inputs_ok.email && inputs_ok.password) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
    }

    return inputs_ok.username && inputs_ok.email && inputs_ok.password;
}