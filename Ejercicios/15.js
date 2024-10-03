function encontrarIndiceMayor(array) {
    // Encuentra el índice del número más grande en el array de números.
    // Devuelve el valor de este índice.
    // Tu código:
    var indiceDeElementoMayor = 0;
    var elementoMayor = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > elementoMayor);
        {
            indiceDeElementoMayor = i;
        }
    }
    return indiceDeElementoMayor;
}

module.exports = encontrarIndiceMayor;