async function cancel(event) {
    // event.preventDefault();

    // const prodName = document.querySelector().value.trim();
    // const desc = document.querySelector().value.trim();
    // const price = document.querySelector().value.trim();
    // const stock = document.querySelector().value.trim();

    document.location.replace('/dashboard');
}

document.querySelector('#cancel').addEventListener('click', cancel);
document.querySelector('#cancelCat').addEventListener('click', cancel);


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});