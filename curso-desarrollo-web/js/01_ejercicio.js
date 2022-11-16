const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", (e)=>{
    document.getElementById("texto").innerHTML = "Texto cambiado";
})
document.getElementById("botonDos").onclick = (e)=>{
    document.getElementById("textoDos").innerHTML += "increible";
}
document.getElementById("botonTres").onclick = ()=>{
    document.getElementById("parrafoVacio").innerHTML = "<h1>Párrafo creado</h1>"
}
document.getElementById("botonModificarEstilo").onclick= ()=>{
    document.getElementById("parrafoConEstilo").style.color = "red";
}
