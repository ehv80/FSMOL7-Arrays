function filtrarNumerosPares(array) {
    // Devuelve un arreglo solo con los números pares presentes en el array.
    // Tu código:
    var arrayConPares = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayConPares.push(array[i]);
        }
    }
    return arrayConPares;
}

module.exports = filtrarNumerosPares;