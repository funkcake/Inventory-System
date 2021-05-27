async function logout(event) {
    event.preventDefault();
    document.location.replace('/');
}

document.querySelector('#logout').addEventListener('click', logout);
