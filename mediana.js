function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    let mitadLista = lista.length / 2;
    let mediana; 
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        mediana = (elemento1 + elemento2) / 2;
    } else {
        mediana = lista[parseInt(mitadLista)];
    }
    return mediana;
}