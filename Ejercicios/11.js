function duplicarElementos(array) {
    // Duplica (multiplica x2) cada elemento del array de números.
    // Devuelve un array con los duplicados.
    // Tu código:
    var arrayConElementosDuplicados = [];
    for (var i = 0; i < array.length; i++) {
        arrayConElementosDuplicados[i] = (array[i] * 2);
    }
    return arrayConElementosDuplicados;
}

module.exports = duplicarElementos;