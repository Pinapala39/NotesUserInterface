$(document).ready(function () {
    $('#myNote').submit(function (event) {
        event.preventDefault();

        var id = Math.floor(Math.random() * 1000);
        var title = $('#title').val();
        var desc = $('#desc').val();
        var content = $('#content').val();

        $.ajax({
            url: '/api/CreateNotes',
            type: 'POST',
            data: { NoteId: id, NoteName: title, notedescription: desc },
            success: function (response) {
                console.log(response);
            },
            error: function (xhr) {
                console.log(xhr.responseText);
            }
        })

        //$.post('https://localhost:7224/api/CreateNotes', { NoteId: id, NoteName: title, notedescription: desc })
        //    .done(function (response) {
        //        console.log(response);
        //    })            
    });
});


//Get Call
$(document).ready(function () {
    $('#GetNote').submit(function (event) {
        event.preventDefault();

        $.ajax({
            url: '/api/GetNotes',
            type: 'GET',
            data: { NoteId: id, NoteName: title, notedescription: desc },
            success: function (response) {
                console.log(response);
            },
            error: function (xhr) {
                console.log(xhr.responseText);
            }
        })

        //$.Get('https://localhost:7224/api/GetNotes', { NoteId: id, NoteName: title, notedescription: desc })
        //    .done(function (response) {
        //        console.log(response);
        //    })
    });
});


//Update Call

$(document).ready(function () {
    $('#UpdateNote').submit(function (event) {
        event.preventDefault();

        var id = $('#Nid').val();
        var NoteName = $('#noteName').val();
        var desc = $('#desc').val();

        $.ajax({
            url: '/api/UpdateNotes',
            type: 'PUT',
            data: { NoteId: id, NoteName: title, notedescription: desc },
            success: function (response) {
                console.log(response);
            },
            error: function (xhr) {
                console.log(xhr.responseText);
            }
        })
      
        //$.update('https://localhost:7224/api/UpdateNotes/', { NoteId: id, NoteName: title, notedescription: desc})
        //    .done(function (response) {
        //        console.log(response);
        //    })
    });
});


//Delete Call
$(document).ready(function () {
    $('#DeleteNote').submit(function (event) {
        event.preventDefault();

        var id = $('#Nid').val();   

        $.ajax({
            url: '/api/DeleteNotes',
            type: 'Delete',
            data: { NoteId: id },
            success: function (response) {
                console.log(response);
            },
            error: function (xhr) {
                console.log(xhr.responseText);
            }
        })

        //$.delete('https://localhost:7224/api/DeleteNote/', { NoteId: id })
        //    .done(function (response) {
        //        console.log(response);
        //    })
    });
});