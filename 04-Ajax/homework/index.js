// Ver lista de amigos

$('#boton').click(() => {
    $('#lista').empty();
    $.get(`http://localhost:5000/amigos`, (data) => {
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = data[i].name;
            $('#lista').append(li);
        }
    })
});

// Buscar Amigo

$('#search').click(() => {
    let idAmigo = $('#input').val();
    $.get(`http://localhost:5000/amigos/${idAmigo}`, (data) => {
        $('#amigo').text(data.name);
    })
});

// const inputAmigo = document.querySelector('#input');
// const btnSearch = document.querySelector('#search');
// const spanAmigo = document.querySelector('#amigo');

// btnSearch.addEventListener('click', function(e) {
//     let idAmigo = inputAmigo.value;
//     fetch(`http://localhost:5000/amigos/${idAmigo}`)
//         .then(res => res.json())
//         .then(amigo => {
//             spanAmigo.innerHTML = amigo.name;
//         })
// });

//       -----------------------

// Eliminar Amiguis 

$('#delete').click(() => {
    let amigo = $('#inputDelete').val();
    // $.delete(`http://localhost:5000/amigos/${amigo}`, (data) => {
    //     $('#lista').empty();
    //     $.get(`http://localhost:5000/amigos`, (data) => {
    //         for (let i = 0; i < data.length; i++) {
    //             let li = document.createElement('li');
    //             li.innerHTML = data[i].name;
    //             $('#lista').append(li);
    //         }
    //     });
    // })
    $.ajax({
        url: `http://localhost:5000/amigos/${amigo}`,
        type: "delete",
        success: () => {
            $('#success').text('Segui asi, que te vas a quedar solo!!!')
        }
    })
});


// const inputDelete = document.querySelector('#inputDelete');
// const btnDelete = document.querySelector('#delete');
// const spanDelete = document.querySelector('#success');

// btnDelete.addEventListener('click', function() {
//     let idAmigo = inputDelete.value;
//     fetch(`http://localhost:5000/amigos/${idAmigo}`, { method: 'DELETE' })
//         .then(res => res.json())
//         .then(() => {
//             spanDelete.innerHTML = 'Amigo borrado';
//         });
// });