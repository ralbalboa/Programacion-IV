import { EmpleadoTiempoCompleto } from "./class/EmpleadoTiempoCompleto";
import { EmpleadoMedioTiempo } from "./class/EmpleadoMedioTiempo";
import { Empleado } from "./class/Empleado";
export function ejecutarInciso3(){
    console.log("======ej3=======");
    const empleados: Empleado[] = [
        new EmpleadoTiempoCompleto('Mateo', 70000),
        new EmpleadoMedioTiempo('Lu', 50000),
        new EmpleadoTiempoCompleto('Rodri', 90000),
        new EmpleadoMedioTiempo('Fran', 43000),
    ];

    empleados.forEach((e)=> 
        console.log(`${e.nombre} cobra => $${e.calcularSalario()}`)
    )
}
ejecutarInciso3();