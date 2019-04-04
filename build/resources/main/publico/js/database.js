function submitFunction(event) {
    event.preventDefault()
    firstName = $('#firstName').val()
    sector = $('#sector').val()
    education = $('#education').val()

    var data = {
        name: firstName,
        sector: sector,
        education: education
    };

    var msg = {
        'html5_form': data
    };

    navigator.serviceWorker.controller.postMessage(msg);

    $.ajax({
        type: "POST",
        url: '/submit',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function () {
            console.log('data sent to server successfully')
        },
        dataType: 'json'
    });

    document.getElementById("form").reset();
    // message = 'Your data has been sent to the server'
    // $('#message').append(message)
    return false
}