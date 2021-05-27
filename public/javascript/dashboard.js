

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
    console.log('Orange');
    $('#modal1').modal('open');
    // Get all TD from the cliked Button
    var td = $(this).parents('tr').find('td:lt(3)');
    // $td.each(function(i){
    // Only the $() makes this td Object of DOM
    $('#name').val($(td[0]).text());
    $('#phone').val($(td[1]).text());
    $('#dtmf').val($(td[2]).text());
    // })
});

// Delete Button Done!!!
$('.btn-floating.red').on('click', function () {
    $(this).parents('tr').remove();
})

$(document).ready(function(){
    $('.modal').modal();
  });
document.querySelector('#createData').addEventListener('click', create);
// document.querySelector('#updateData').addEventListener('click', update);

