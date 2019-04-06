var map;
var serverValues;

$(document).ready(function () {
    loadSavedTable()
    initMap()
})


function loadSavedTable() {
    $.ajax({
        url: '/rest/forms',
        async: false,
        success: function (response) {
            serverValues = response;
            var tabla = $('#form_saved_values').DataTable({
                destroy: true,
                data: response,
                columns: [
                    {data: 'id'},
                    {data: 'name'},
                    {data: 'sector'},
                    {data: 'education'}
                ],
                buttons: [],
                order: [[0, "desc"]],
                language: {
                    search: "Buscar: ",
                    paginate: {
                        previous: "Anterior ",
                        next: " Siguiente"
                    },
                    emptyTable: "No hay datos disponibles",
                    //info: "Mostrando del _START_ al _END_ de _TOTAL_ registros",
                    info: " "
                }

            });
            tabla.columns.adjust().draw();
        }
    });

}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(18.7357, -70.1627),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    if (serverValues != undefined) {
        for (i = 0; i < serverValues.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(serverValues[i]["latitude"], serverValues[i]["longitude"]),
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(serverValues[i]["name"]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}