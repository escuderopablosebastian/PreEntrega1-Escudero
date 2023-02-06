alert ("Bienvenido! En esta página podrá obtener un presupuesto fotográfico aproximado para el evento que desea realizar");

let nombre = prompt ("Por favor, ingrese su nombre: ");

let otroPresupuesto = "si"

//CICLO CONDICIONAL DO WHILE
do{
    let diasEvento = parseInt(prompt ("Hola " + nombre + " ¿Cuántos dias dura el evento?"));
    let fotosEvento = parseInt(prompt("¿Cuántas fotos desea obtener por día? Ofrecemos un servicio con un mínimo de 100 fotografías"));

    //CONDICIONAL IF
    if (!isNaN(diasEvento) && diasEvento!=null && fotosEvento>=100){
        presupuesto(diasEvento, fotosEvento);
    }
    else{
        alert ("Por favor, ingrese valores aceptables")
    }
    otroPresupuesto = prompt("¿Desea obtener un nuevo presupuesto?");
}while(otroPresupuesto=="si" || otroPresupuesto=="Si" || otroPresupuesto=="SI")

alert ("Si desea contactarse con nosotros para más información, escribanos a la dirección de correo pabloescuderophotography@gmail.com. Muchas gracias")

//FUNCTION
function presupuesto(dias, fotos){
    presupuestoEvento=dias*fotos*2
    alert(nombre+" el presupuesto fotográfico aproximado para su evento, incluyendo "+fotos+" fotos diarias es de "+presupuestoEvento+" USD"); 
}