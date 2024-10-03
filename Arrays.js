//Declaración de un Arreglo
var listaDeCompras = [];

//Asigna valores en los elementos del arreglo
listaDeCompras[1] = "Lechuga";
listaDeCompras[3] = "Tomates";

console.log(listaDeCompras);

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

//Método length retorna la cantidad de elementos del arreglo
console.log(listaDeCompras.length);

// Otro ejemplo con el método length 
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

//Otros métodos de Arreglos 

var colores = ["Amarillo", "Azul"];

//método push agrega un elemento al final del arreglo y devuelve la nueva longitud del array.
colores.push("Rojo");
console.log(colores);

//método unshift agrega un elemento al principio del arreglo y devuelve la nueva longitud del array.
colores.unshift("Verde");
console.log(colores);


//método pop() para eliminar el último elemento del arreglo Y lo devuelve
colores.pop();
console.log(colores);

// método shift() para eliminar el primer elemento del arreglo y lo devuelve
colores.shift();
console.log(colores);


//Métdo includes
// Sirve para determinar si un arreglo incluye o no un elemento
var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dalí"];
var incluyeDali = pintores.includes("Dalí");
console.log(incluyeDali);

//método every
//Sirve para saber si todos los elementos del arreglo cumplen con una condición
// Por ejemplo ver si todos los números son mayores a 5
var numeros = [1, 6, 8, 9];
var cumpleCondicion = numeros.every(num => {
    return num > 5;
});
console.log(cumpleCondicion);


//Métodos split (separar) y join (unir)
//Nos permiten transformar Strings en Arreglos y Arreglos en Strings 
//Ejemplos
var palabra = "Henri";
// split('') separa la palabra en cada caracter (transforma en un arreglo de caracteres)
var palabraSeparada = palabra.split('');

// elimina el último elemento del arreglo de caracteres
palabraSeparada.pop();

// agrega 'y' al final del arreglo de caracteres
palabraSeparada.push('y');

console.log(palabraSeparada);

// join('') transforma el arreglo de caracteres en una cadena de caracteres String
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);


// Método forEach (para cada elemento del arreglo)
var otrosNumeros = [1, 2, 3, 4];
otrosNumeros.forEach((num) => console.log(num));

//Hacer un console.log de cada numero igual a 3
otrosNumeros.forEach((num) => {
    if (num === 3) {
        console.log(num);
    }
});


// Método map
// Sirve para hacer una copia del arreglo original y puede hacer un cambio sobre el arreglo
// Por ejemplo sumarle 1 a cada elemento del arreglo
var masUno = otrosNumeros.map((num) => {
    return num + 1;
});
console.log(masUno);

// Bucle For en Arreglos
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    //muestra en consola el elemento del arreglo
    console.log(arr[i]);
}

//Declaración de la Función encontrarLetraP 
//Recibe como parámetro un String
function encontrarLetraP(String) {
    //transforma el String en un arreglo usando split
    var letras = String.split('');
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] === 'p') {
            console.log("Si contiene a p");
        }
    }
}

//Invocación a la Función 
encontrarLetraP("JavaScript");
encontrarLetraP("Henry");


//Bucle While en Arreglos
var arr2 = [];
//Quiere agregar cinco veces la palabra BOOM al arreglo vacío
while (arr2.length < 5) {
    arr2.push('BOOM');
}
console.log(arr2);


//Bucle infinito 
var arr3 = [];
var n = 1;
while (n < 3) {
    arr3.push(Math.random());
}


