async function cancel(event) {
    event.preventDefault();
    document.location.replace('/dashboard');
}


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

async function postCatInfo(event) {
    event.preventDefault();

    const category_id = document.querySelector("#dropDown").value
    const product_name = document.querySelector('#itemName').value.trim()
    const description = document.querySelector('#Description').value.trim()
    const price = document.querySelector('#price').value.trim()
    const stock = document.querySelector('#stock').value.trim()

    // console.log(category_id)
    // console.log(product_name)
    // console.log(description)
    // console.log(price)
    // console.log(stock)

    if (product_name && description && price && stock && category_id) {
        const response = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify({
                product_name,
                description,
                price,
                stock,
                category_id
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/crud')
        } else {
            alert(response.statusText)
        }
    }

}

async function putCatInfo(event) {
    event.preventDefault()

    const category_id = document.querySelector("#dropDown").value
    const product_name = document.querySelector('#itemName').value.trim()
    const description = document.querySelector('#Description').value.trim()
    const price = document.querySelector('#price').value.trim()
    const stock = document.querySelector('#stock').value.trim()
    const id = document.querySelector('#tagNum').value.trim()

    console.log(id)

    if (id && product_name && description && price && stock && category_id) {
        const response = await fetch(`/api/products/${id}`, {
            method: 'put',
            body: JSON.stringify({
                id,
                product_name,
                description,
                price,
                stock,
                category_id
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/crud')
        } else {
            alert(response.statusText)
        }
    }


}

async function delData(event) {
    event.preventDefault()

    const id = document.querySelector('#tagNum').value.trim()

    if (id) {
        const response = await fetch(`/api/products/${id}`, {
            method: 'delete',
            body: JSON.stringify({
                id
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/crud')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector(".createForm").addEventListener('click', postCatInfo)
document.querySelector(".updateForm").addEventListener('click', putCatInfo)
document.querySelector(".delForm").addEventListener('click', delData);
document.querySelector('#cancel').addEventListener('click', cancel);
document.querySelector('#cancelCat').addEventListener('click', cancel);