//datos
var codigos_usuarios = [];
var fechas_usuarios=[];
var horas_usuarios=[];

var fechaHoy = new Date();
var horas_usuarios_fin=[];

if(localStorage.getItem("codigos_usuarios") == null)
{
    codigos_usuarios = [];
    fechas_usuarios=[];
    horas_usuarios=[];
    horas_usuarios_fin=[];
}
else
{
    codigos_usuarios =JSON.parse(localStorage.getItem("codigos_usuarios"));
    fechas_usuarios=JSON.parse(localStorage.getItem("fechas_usuarios"));
    horas_usuarios=JSON.parse(localStorage.getItem("horas_usuarios"));
    horas_usuarios_fin=JSON.parse(localStorage.getItem("horas_usuarios_fin"));
    pintar();
}

function pintar()
{
    const pint=document.querySelector("#table2");
    var ultimaDato = horas_usuarios.length -1;
    console.log(ultimaDato)
    for (let i = 0; i< codigos_usuarios.length; i++) {
        var row=document.createElement("tr");
        var cod=document.createElement("td");
        var fech=document.createElement("td");
        var hor=document.createElement("td");
        cod.textContent=codigos_usuarios[i];
        fech.textContent=fechas_usuarios[i];
        if(horas_usuarios.length -1)
        {
            hor.setAttribute("id","hora");
        }
        hor.textContent=horas_usuarios[i];
        pint.appendChild(row);
        row.appendChild(cod);
        row.appendChild(fech);
        row.appendChild(hor);
    }
}
function pintarHora()
{

}

function salirDato(){
    var hora = fechaHoy.getHours() + ':' + fechaHoy.getMinutes();
    horas_usuarios_fin.push(hora);
    localStorage.setItem("horas_usuarios_fin", JSON.stringify(horas_usuarios_fin));
}