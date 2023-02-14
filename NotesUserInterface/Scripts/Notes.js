$(document).ready(function () {
    $('#myNote').submit(function (event) {
        event.preventDefault();

        var id = Math.floor(Math.random() * 1000);
        var title = $('#title').val();
        var desc = $('#desc').val();
        var content = $('#content').val();

        $.post('https://localhost:7224/api/CreateNotes', { NoteId: id, NoteName: title, notedescription: desc })
            .done(function (response) {
                console.log(response);
            })            
    });
});


//Get Call
$(document).ready(function () {
    $('#GetNote').submit(function (event) {
        event.preventDefault();

        $.Get('https://localhost:7224/api/GetNotes', { NoteId: id, NoteName: title, notedescription: desc })
            .done(function (response) {
                console.log(response);
            })
    });
});


//Update Call

$(document).ready(function () {
    $('#UpdateNote').submit(function (event) {
        event.preventDefault();

        var id = Math.floor(Math.random() * 1000);
        var NoteName = $('#noteName').val();
        var desc = $('#desc').val();
      
        $.update('https://localhost:7224/api/UpdateNotes/', { NoteId: id, NoteName: title, notedescription: desc})
            .done(function (response) {
                console.log(response);
            })
    });
});


//Delete Call
$(document).ready(function () {
    $('#DeleteNote').submit(function (event) {
        event.preventDefault();

        var id = $('#Nid').val();     

        $.delete('https://localhost:7224/api/DeleteNote/', { NoteId: id })
            .done(function (response) {
                console.log(response);
            })
    });
});