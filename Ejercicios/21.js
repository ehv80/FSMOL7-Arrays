function mesesDelAño(array) {
    // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    var arregloResultado = [];
    var encontrados = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
            arregloResultado.push(array[i]);
            encontrados = true;
        }
        else {
            encontrados = false;
        }
    }
    if (encontrados === true) {
        return arregloResultado;
    } else if (encontrados === false) {
        return "No se encontraron los meses pedidos";
    }

}

module.exports = mesesDelAño;