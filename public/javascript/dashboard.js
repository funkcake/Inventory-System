


async function create(event) {
    event.preventDefault();
    document.location.replace('/crud');
}

async function update(event) {
    event.preventDefault();
    document.location.replace('/crud');
}

async function deleted(event) {
    event.preventDefault();
    document.location.replace('/crud');
}




document.querySelector('#createData').addEventListener('click', create);

document.querySelector('#updateData').addEventListener('click', create);

document.querySelector('#delData').addEventListener('click', create);

