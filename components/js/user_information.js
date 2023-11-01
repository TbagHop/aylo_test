const displayUserInformation = () => {
    const UINFO_username = document.querySelector('#UINFO_username');
    const UINFO_email = document.querySelector('#UINFO_email');
    const UINFO_password = document.querySelector('#UINFO_password');

    if(localStorage.getItem('username')) {
        UINFO_username.innerHTML = 'Username: ' + localStorage.getItem('username');
    }

    if(localStorage.getItem('email')) {
        UINFO_email.innerHTML = 'Email: ' + localStorage.getItem('email');
    }

    if(localStorage.getItem('password')) {
        UINFO_password.innerHTML = 'Password: ' + localStorage.getItem('password');
    }
};

displayUserInformation();