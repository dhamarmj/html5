$(document).ready(function () {
    //  loadState()
    loadSavedTable()
    initMap()
    console.log("klkkk");
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    // }
})
var map, infoWindow;
var serverValues;
function loadSavedTable() {
    $.ajax({
        url: '/rest/forms',
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
                    info: ""
                }

            });
            tabla.columns.adjust().draw();
        }
    });
}

function initMap() {
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    // });
    getLocations();
    var locations = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

   // console.log(serverValues)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < serverValues.length; i++) {

        console.log(serverValues[i]["latitude"] + " "+ serverValues[i]["longitude"])

        // marker = new google.maps.Marker({
        //     position: new google.maps.LatLng(serverValues[i]["latitude"], locations[i]["longitude"]),
        //     map: map
        // });

        // google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //     return function() {
        //         infowindow.setContent(locations[i][0]);
        //         infowindow.open(map, marker);
        //     }
        // })(marker, i));
    }
}

function getLocations(){
    $.ajax({
        url: '/rest/forms',
        success: function (response) {
            serverValues = response;
            console.log(response);
            console.log(serverValues)
        }
    });
}


// function initMap() {
//     console.log("initMap")
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: -34.397, lng: 150.644},
//         zoom: 6
//     });
//     console.log("infoWindow")
//     infoWindow = new google.maps.InfoWindow;
//
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };
//             console.log(pos)
//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}