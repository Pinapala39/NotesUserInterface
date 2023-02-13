$(document).ready(function () {
    $('#myNote').submit(function (event) {
        event.preventDefault();

        var id = Math.floor(Math.random() * 1000);
        var title = $('#title').val();
        var desc = $('#desc').val();
        var content = $('#content').val();

        $.post('https://localhost:7224/api/CreateNotes', { id: id, title: title, desc: desc, content: content })
            .done(function (response) {
                console.log(response);
            })
            
    });
});
