//Modelo
const productos =[
    ["1", "Tortillas", 20, "sin descripcion"],
    ["2", "Coca-cola", 19, "sin descripcion"],
    ["3", "Huevos", 3.00, "sin descripcion"],
    ["4", "Harina", 19, "sin descripcion"],
    ["5", "Tostadas", 25.00, "sin descripcion"],
    ["6", "Leche", 18, "sin descripcion"],
    ["7", "Sabritas", 20.00, "sin descripcion"],
    ["8", "Pan", 15, "sin descripcion"],
    ["9", "Cafe", 35, "sin descripcion"],
    ["10", "Azucar", 15, "sin descripcion"],
   
];
var total = 0;
function buscarproducto(event){

    //alert(event.keyCode);
    //Borrar ultimo producto
    if (event.keyCode == 27) {
        var tabla = document.getElementById("tproductos");
        total -= parseFloat(tabla.lastChild.children[3].innerHTML);
        document.getElementById("total").innerHTML=`$ ${total.toFixed(2)}`;
        tabla.removeChild(tabla.lastChild);
        document.getElementById("feedback").innerHTML="";
        limpiar();
    }
    
    //Buscar producto
    if (event.keyCode ==13) {
        var codigo = document.getElementById("codigo").value;
        var cantidad = 1;

        
        if (codigo.indexOf("*")!= -1){
            cantidad = codigo.split("*")[0];
            codigo = codigo.split("*")[1];

        }

        var control = false;

        for (let i = 0; i < productos.length; i++) {
            if (codigo == productos[i][0]) {
                //alert("buscando"+productos[i][1]);
                var agregar = document.getElementById("tproductos");
                var row = agregar.insertRow();
                var celda1 = row.insertCell(0);
                var celda2 = row.insertCell(1);
                var celda3 = row.insertCell(2);
                var celda4 = row.insertCell(3);

                celda1.innerHTML=cantidad;
                celda1.setAttribute("style", "text-align:center;");

                celda2.innerHTML=productos[i][1];
                celda2.setAttribute("style", "text-align:center;");

                celda3.innerHTML=(productos[i][2]).toFixed(2);
                celda3.setAttribute("style", "text-align:right;");

                total += parseFloat((cantidad*productos[i][2]).toFixed(2));
                document.getElementById("total").innerHTML=`$ ${total.toFixed(2)}`;

                celda4.innerHTML=(cantidad*productos[i][2]).toFixed(2);
                celda4.setAttribute("style", "text-align:right;");
                
                control = true;
                document.getElementById("feedback").innerHTML="";

                break
                
            }



        }

        if (control == false)
        {
            document.getElementById("feedback").innerHTML=`El codigo ${codigo} No se encuentra`;   
        }

        limpiar();
    }

    //Repetir producto
    if(event.keyCode == 82){
        event.preventDefault();
        document.getElementById("feedback").innerHTML="";
        repetirProducto();
    }
}

function limpiar() {

document.getElementById("codigo").focus();
document.getElementById("codigo").value="";


}

function repetirProducto () {

    var tabla = document.getElementById("tproductos");
    if (tabla.rows.length>0) {
        var ultimoProducto = tabla.lastChild;
        var cantidad = parseFloat(ultimoProducto.firstChild.innerHTML);
        var precio = parseFloat(ultimoProducto.childNodes[2].innerHTML);
        //Incrementamos la cantidad
        ultimoProducto.firstChild.innerHTML=++cantidad;
    }
}