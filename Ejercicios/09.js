function obtenerElementoAleatorio(array) {
    // Devuelve un elemento aleatorio del arreglo array.
    // PISTA: Usa el método Math.random().
    // Tu código:
    var indiceAleatorio = Math.random();
    return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;