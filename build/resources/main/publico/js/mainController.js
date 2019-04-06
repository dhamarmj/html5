var latitude=0, longitude=0;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

$(document).ready(function () {
    //  loadState()
    loadTabla()

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
    }
})

$("#form").submit(function () {

    var option = $('#sendButton').text();
    if (option == "Edit!") {
        editForm()
    } else {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
        // }
        var db = new Dexie("form");
        db.version(1).stores({
            form: '++id,name,sector,education,latitude,longitude'
        });
        console.log(latitude + " " + longitude);
        db.form.add({
            name: $('#firstName').val(),
            sector: $('#sector').val(),
            education: $('#education').val(),
            latitude: latitude,
            longitude: longitude
        });
        alert("Logged");
        document.getElementById("form").reset();
        loadTabla()
    }
    return false;
});

function loadTabla() {
    var json = [];
    var forms = getData().then(function (results) {
        results.forEach(function (data) {
            json.push({
                id: data.id,
                name: data.name,
                sector: data.sector,
                education: data.education,
            });
        });
        reloadTabla(json);
    });
}

function getData() {
    var db = new Dexie("form");
    db.version(1).stores({
        form: '++id,name,sector,education'
    });
    return db.form.toArray();
}

function reloadTabla(nuevo) {

    var tabla = $('#form_values').DataTable({
        destroy: true,
        data: nuevo,
        columns: [
            {targets: 0, data: 'name'},
            {targets: 1, data: 'sector'},
            {targets: 2, data: 'education'},
            {
                targets: 3,
                data: 'id',
                "render": function (data, type, row, meta) {
                    // return '<button class="btn btn-light btn-sm" id=editar_' + data + ' onclick="modalEditar(this.id)"><i class="fa fa-pencil"></i> Editar</button>' + '<button class="btn btn-danger btn-sm" id=eliminar_' + data + ' onclick="eliminar(this.id)"><i class="fa fa-minus"></i> Eliminar</button>'
                    return '<button class="btn btn-info btn-sm" id=editar_' + data + ' onclick="openEdit(this.id)"> Editar</button>' + '<button class="btn btn-danger btn-sm" id=eliminar_' + data + ' onclick="deleteForm(this.id)">Eliminar</button>'
                },
            }

        ],
        searchable: false,
        buttons: [],
        language: {
            search: "Buscar: ",
            paginate: {
                previous: "Anterior ",
                next: " Siguiente"
            },
            emptyTable: "No hay datos disponibles",
            // info: "Mostrando del _START_ al _END_ de _TOTAL_ registros",
            info: ""
        },

        createdRow: function (row, data, index) {
            $('td', row).eq(5).addClass('letra');
        }

    });

    tabla.columns.adjust().draw();
}

function openEdit(idv) {

    var id = idv.replace('editar_', '');

    //id = parseInt(num);
    //$('#formModificar')[0].reset();
    var db = new Dexie("form");
    db.version(1).stores({
        form: '++id,name,sector,education'
    });
    db.form.get(parseInt(id), function (data) {
        $('#firstName').val(data.name);
        $('#sector').val(data.sector);
        $('#education').val(data.education);
        $('#id').val(id);
    });
    $('#sendButton').text("Edit!");
    //  $('#modalEditar').modal('show');
}

function editForm() {
    var num = $('#id').val();
    var db = new Dexie("form");
    db.version(1).stores({
        form: '++id,name,sector,education,latitude,longitude'
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
    db.form.update(parseInt(num), {
        nombre: $('#firstName').val(),
        sector: $('#sector').val(),
        education: $('#education').val(),
        latitude: latitude,
        longitude: longitude
    }).then(function (updated) {
        if (updated) {
            loadTabla();
            $('#sendButton').text("Send!");
            document.getElementById("form").reset();
        }
    });
}

function deleteForm(id) {
    var num = id.replace('eliminar_', '');
    var db = new Dexie("form");
    db.version(1).stores({
        form: '++id,name,sector,education'
    });
    db.form.delete(parseInt(num));
    loadTabla();
}

function synced() {
    if (navigator.onLine) {
        var forms = getData().then(function (value) {
            value.forEach(function (data) {
                    $.ajax({
                        type: "POST",
                        url: '/submit',
                        contentType: 'application/json',
                        data: JSON.stringify(data),
                        dataType: 'json'
                    })
                }
            )
        })
        deleteAll();
        loadTabla();
        alert("Synced!");
    } else
        alert("wait Till online!");

}

function deleteAll() {
    var db = new Dexie("form");
    db.version(1).stores({
        form: '++id,name,sector,education'
    });
    db.form.clear();
}

function geoSuccess(position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
};

function geoError(error) {
    console.log('Error with Geolocation ' + error.message);
    latitude = 18.7357;
    longitude = -70.1627;
}

function seeSavedItems() {

    if(navigator.onLine){
        window.location.href = '/Formularios';
    }
    else
        alert("You're Offline!!!");
}