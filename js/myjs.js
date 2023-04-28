
let nombreCliente = prompt("Ingrese su nombre completo");
let plazoMensual = parseInt(prompt("Ingrese el plazo de meses a pagar"));
let montoSolicitado = parseInt(prompt("Ingrese el monto a solicitar"));
let interesesMenor6 = 0.05 * montoSolicitado * plazoMensual;
let interesesMenor12 = 0.03 * montoSolicitado * plazoMensual;
let interesesMayor12 = 0.02 * montoSolicitado * plazoMensual;

if (plazoMensual < 6) {
    pagoTotal = montoSolicitado + interesesMenor6;
    alert("Su interes sera del 5%");
    alert(`su pago Total por ${plazoMensual} meses sera de : ${pagoTotal}`);
} else if (plazoMensual < 12) {
    pagoTotal = montoSolicitado + interesesMenor12;
    alert("Su interes sera del 3%");
    alert(`su pago Total por ${plazoMensual} meses sera de : ${pagoTotal}`);
} else if (plazoMensual > 12) {
    pagoTotal = montoSolicitado + interesesMayor12;
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


