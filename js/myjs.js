const intereses = { mesesSeis: 0.09, mesesDoce: 0.07 };
let iva = 0;

function buscar() {
    const clientes = [
        { cedula: 123, nombre: "juan", credito: 10000, estado: "activo" },
        { cedula: 456, nombre: "maria", credito: 20000, estado: "proceso" },
        { cedula: 456, nombre: "jose", credito: 80000, estado: "inactivo" },
    ];
    let solicitar = prompt("Desea un credito nuevo [Si/No]").toLowerCase();
    if (solicitar === "si") {
        //Funcion para ingresar cantidad a prestar
        function cantidad1() {
            let cantidad1 = parseInt(prompt("ingresar cantidad a prestar"));
            alert("La cantidad es: " + cantidad1)
            return cantidad1
        }

        //Funcion para ingresar cuotas a pagar
        function cuotas1() {
            let cuotas1 = parseInt(prompt("En cuantas cuotas quiere pagar?"));
            if (cuotas1 <= 12) {
                iva = intereses.mesesSeis;
            } else if (cuotas1 > 12) {
                iva = intereses.mesesDoce;
            }
            alert("Desea el prestamo en " + cuotas1 + " cuotas?")
            return cuotas1
        }
        //Capturar resultado de funciones
        let cantidad = cantidad1()
        let cuotas = cuotas1()

        //Funcion cantidad en cuotas
        function interes(dato1, dato2, dato3) {
            let resultadoInteres = dato1 * dato2 * dato3;
            return resultadoInteres
        }
        //Capturar interes
        let totalInteres = interes(cantidad, cuotas, iva)


        function montoTotal(total1, total2) {
            let resultadoTotal = total1 + total2;
            return resultadoTotal
        }
        //Capturar total
        let totalSuma1 = montoTotal(cantidad, totalInteres)

        function divisionCuotas(total1, total2) {
            let resultadoCuotas = total1 / total2;
            return Math.round(resultadoCuotas);
        }
        //Capturar cuotas
        let totalCuotas = divisionCuotas(totalSuma1, cuotas)

        let resumen = [
            `Gracias por la solicitus de su credito,
    Estado: En Proceso..
    Nro cuotas: ${cuotas} 
    Valor cuotas mensuales: ${totalCuotas} 
    Pago total: ${totalSuma1}`
        ];
        alert(resumen)
    } else if (solicitar === "no") {
        let cedulaCliente = parseInt(prompt("Si deseas consultar tu credito digita tu nro de cedula, "));
        const encontrado = clientes.find(item => item.cedula === cedulaCliente);
        if (encontrado) {
            let mensaje = `
                Cedula: ${encontrado.cedula}
                Nombre: ${encontrado.nombre}
                Credito: ${encontrado.credito}
                Estado: ${encontrado.estado}
                `;
            alert(mensaje)
            exit()
        } else {
            alert("No encontrado")
        }
    }
}
let buscarCliente = buscar()