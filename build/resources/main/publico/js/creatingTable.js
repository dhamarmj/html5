function loadTabla (data){
var tabla =  $('#form_values').DataTable({
    destroy: true,
    data: data,
    columns: [
        {targets: 0, data: 'name'},
        {targets: 1, data: 'sector'},
        {targets: 2, data: 'education'},
        {
            targets: 3,
            data: 'id',
            "render": function (data, type, row, meta) {
                return '<button class="btn btn-light btn-sm" id=editar_' + data + ' onclick="modalEditar(this.id)"><i class="fa fa-pencil"></i> Editar</button>' + '<button class="btn btn-danger btn-sm" id=eliminar_' + data + ' onclick="eliminar(this.id)"><i class="fa fa-minus"></i> Eliminar</button>'
            },

        }

    ],
    searchable: false,
    buttons: [],
    createdRow: function (row, data, index) {

        $('td', row).eq(5).addClass('letra');
    }
});
    tabla.columns.adjust().draw();
}
function getFormulariosTabla() {
    var json = [];
    var encuestras = getForms().then(function (results) {
        results.forEach(function (data) {
            if (data.eliminado === false){

                json.push({
                    id: data.id,
                    name: data.name,
                    sector: data.sector,
                    education: data.education,

                });
            }

        });

        // console.log(json);
        loadTabla(json);
    });


}

