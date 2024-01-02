const submit = document.querySelector('button');
submit.addEventListener('click', validate);

function validate (e) {
    e.preventDefault();
    const pwd = document.querySelector('#pwd');
    const confirmPwd = document.querySelector('#confirm-pwd');
    const error = document.querySelector('.error');

    if (pwd.value !== confirmPwd.value) {
        error.innerHTML = '*Password do not match';
        pwd.setAttribute('style', 'border-color: rgb(201, 3, 3)')
        confirmPwd.setAttribute('style', 'border-color: rgb(201, 3, 3)')
    };
};