
let nombreCliente = prompt("Ingrese su nombre completo");
let plazoMensual = parseInt(prompt("Ingrese el plazo de meses a pagar"));
let montoSolicitado = parseInt(prompt("Ingrese el monto a solicitar"));
const intereses = {mesesSeis: 0.05, mesesDoce: 0.03, mesesmayorDoce: 0.02};

const montoIntereses6 = (a,b,c) => a * b * c;
let resultado6 = montoIntereses6(intereses.mesesSeis, montoSolicitado, plazoMensual)
const montoIntereses12 = (a,b,c) => a * b * c;
let resultado12 = montoIntereses12(intereses.mesesDoce, montoSolicitado, plazoMensual)
const montoInteresesMas12 = (a,b,c) => a * b * c;
let resultadoMas12 = montoInteresesMas12(intereses.meses, montoSolicitado, plazoMensual)

if (plazoMensual < 6) {
    pagoTotal = montoSolicitado + resultado6;
    alert("Su interes sera del 5%");
    alert(`su pago Total por ${plazoMensual} meses sera de : ${pagoTotal}`);
} else if (plazoMensual < 12) {
    pagoTotal = montoSolicitado + resultado12;
    alert("Su interes sera del 3%");
    alert(`su pago Total por ${plazoMensual} meses sera de : ${pagoTotal}`);
} else if (plazoMensual > 12) {
    pagoTotal = montoSolicitado + resultadoMas12;
    alert("Su interes sera del 2%");
    alert(`su pago Total por ${plazoMensual} meses sera de : ${pagoTotal}`);
}else {
    alert('No seleccionaste ningún tipo de plazo')
}
let peridoPagos = prompt("Ingrese el periodo de sus pagos(semanal / Quincenal / Mensual");
switch (peridoPagos) {
    case 'semanal':
        totalSemanal = pagoTotal/4;
        alert(`Sr(a):${nombreCliente} sus pagos semanales seran de: ${totalSemanal}`);
        break
    case 'quincenal':
        totalQuincenal = pagoTotal/2;
        alert(`Sr(a):${nombreCliente} sus pagos semanales seran de: ${totalQuincenal}`);
        break
    case 'mensual':
        totalMensual = pagoTotal;
        alert(`Sr(a):${nombreCliente} sus pagos semanales seran de: ${totalMensual}`);
        break
    default:
        alert('No seleccionaste ningún periodo de pagos')
        break
}


