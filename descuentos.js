const precio_original = 120;
const descuento = 18;

function calcular_precio_con_descuento(precio, descuento) {
    const porcentaje_precio_con_descuento = 100 - descuento;
    const precio_con_descuento = (precio * porcentaje_precio_con_descuento) / 100;
    return precio_con_descuento;
}

function onClickButtonPriceDiscount() {
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;

    const precio_con_descuento = calcular_precio_con_descuento(price, discount);
    

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precio_con_descuento;
}


// console.log({
//     precio_original,
//     descuento,
//     porcentaje_precio_con_descuento,
//     precio_con_descuento
// })