


async function create(event) {
    event.preventDefault();
    document.location.replace('/crud');
}

async function update(event) {
    event.preventDefault();
    document.location.replace('/crud');
}

document.addEventListener('click', function (e) {
    let checked = e.target.id
    // console.log(checked)

})


$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    Materialize.updateTextFields();
});
/* 
Dynamic creation of table is not the best practice...
Better way to clone existing table and fill it with data.
*/
// $(data).each(function (i, elem) {
//     $('.table').append('<tr><td>' + elem['Name'] +
//         '</td><td>' + elem['Phone'] + '</td><td>' +
//         elem['DTMF'] + '</td><td>' +
//         '\
//   <a href="#edit=' + elem['id'] + '"data-target="modal1" class="btn-floating waves-effect waves-light orange btn modal-trigger hoverable"><i class="material-icons">edit</i>\
//       </a> \
//   <a href="#delete=' + elem['id'] + '" class="btn-floating waves-effect waves-light red hoverable"><i class="material-icons">delete</i>\
//       </a> \
//                        </td></tr>')
// });

$('.btn-floating.orange').on('click', function () {
    // document.location.replace('/')
    // console.log('Orange');
    $('#modal1').modal('open');
    // Get all TD from the cliked Button
    const td = $(this).parents('tr').find('td:lt(6)');
    // $td.each(function(i){
    // Only the $() makes this td Object of DOM
    const tag = $('#tag').val($(td[0]).text());
    const prodName = $('#prodName').val($(td[1]).text());
    const desc = $('#desc').val($(td[2]).text());
    const up = $('#unitPrice').val($(td[3]).text());
    const inS = $('#inStock').val($(td[4]).text());
    const cat = $('#category').val($(td[5]).text());
    // })
    // document.querySelector('.formInput').addEventListener('submit', inputData())
    // console.log("test")


});

$('.modal-action').on('click', function () {

    console.log("test")
})

// function inputData(event) {
//         event.preventDefault();

//         if (tag && prodName && desc && up && inS && cat) {
//             const response = await fetch('/api/products', {
//                 method: 'put',
//                 body: JSON.stringify({
//                     tag,
//                     prodName,
//                     desc,
//                     up,
//                     inS,
//                     cat
//                 }),
//                 headers: { 'Content-Type': 'application/json' }
//             })

//             if (response.ok) {
//                 console.log("placed")
//             } else {
//                 console.log(response.statusText)
//             }

//         }
//     }



// Delete Button Done!!!
$('.btn-floating.red').on('click', function () {
    $(this).parents('tr').remove();
})

$(document).ready(function () {
    $('.modal').modal();
});
document.querySelector('#createData').addEventListener('click', create);
// document.querySelector('#updateData').addEventListener('click', update);

