var edades = new Array();


function capturar() {
    var edad = document.getElementById("edad").value
        //console.log(edad)
    if (edades.length < 10) {
        edades.push(edad) // push es un metodo que permite agregar un elemento al arreglo.
        console.log(edades)

    } else {
        alert("SOLO SON 10 PERSONAS, IMBECIL!");
    }


}


function cantidadPersonasMenoresEdad() {
    var cantidadDePersonasMenoresEdad = 0;

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] < 18) {
            cantidadDePersonasMenoresEdad++; // cantidadDePersonasMenoresEdad = cantidadDePersonasMenoresEdad + 1;
        }
    }

    document.getElementById("info").innerHTML = "<p> cantidad de personas menores de edad:" + cantidadDePersonasMenoresEdad + " </p>";

}