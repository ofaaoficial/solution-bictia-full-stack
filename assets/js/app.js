const el = e => document.querySelector(e);
const on = (event, callback, element = document) => element.addEventListener(event, callback);

if (el('.form-login')) {
    on('submit', (e) => {
        e.preventDefault();
        if (el('#email').value && el('#password').value) {
            localStorage.email = el('#email').value;
            window.location = 'profile.html';
        } else {
            alert("Datos vacios.");
        }
    }, el('.form-login'));
}

if (el('#username-welcome')) {
    el('#username-welcome').innerText = localStorage.email;
}
