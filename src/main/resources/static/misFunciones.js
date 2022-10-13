function traerDatosCategoria(){
    $.ajax({
        url:"http://localhost:8080/api/Category/all",
        type: "GET",
        dataType: "json",
        success: function (respuesta){
            pintarDatos(respuesta);

        },
        error: function (respuesta,xhr){
            alert("Error de peticion!");
        }


    });

}
function pintarDatos(datos){
    let html="";
    html += "<tr>";
    Object.keys(datos[0]).forEach(elemento =>{
        html+="<th>"+elemento+"</th>";
    });
    html += "</tr>";

    for (let i=0; i<datos.length; i++){
        html += "<tr>";
        Object.values(datos[i]).forEach(elemento =>{
            html +="<t>"+elemento+"</t>";
        });
        html += "</tr>";
    }

    $("#tabla").empty();
    $("#tabla").append(html);
}