/*let combo = prompt("Quiero el combo")
let validacion = false
do{
    let nroPrompt = prompt("¿Que combo desea?")
    let numeroCombo = Number(nroPrompt)
    if (isNaN(numeroCombo)){
        alert(`El valor ingresado ${nroPrompt} no es un combo`)
    }
    else if(numeroCombo === ""){
        alert(`Por favor ingrese un combo`)
    } else{
        combo = numeroCombo}
        
    
    let promptValidacion = prompt("¿Desea agregar otro combo? si | no")
    
    if(promptValidacion === "s" ||promptValidacion === "si" || promptValidacion === "yes" || promptValidacion === "y"){
        validacion = true
    }
    else if(promptValidacion === null || promptValidacion === "no" || promptValidacion === "n" || promptValidacion === "" ){
        validacion = false

    }
}
    while(validacion) 
    console.log(combo)*/
/*const bigMac = {nombre: "BigMac", precio: 1000} 
const macPollo = {nombre: "MacPollo", precio: 1100}
const macNifica = {nombre: "Macnifica", precio: 1200}

/*INTENTO UNO SECUENCIA DE COMPRA MCDONAL

function welcome() {
    let orden = Number(prompt("Bienvenido/a a Mcdonal ¿Está listo para ordenar? \n Marque \n (1) para si \n (2) para no"))
    if(orden == 1){
        parseInt(prompt("¿Que desea ordenar?\n 1. bigMac \n 2. MacPollo\n 3. Macnifica \n Por favor Indique \n con un numero"))}
        if(orden == 2){
            alert("Tomese su tiempo, cuanto este listo recarge la pag.")}
    } 
welcome();

function pedido ("BigMac", "MacPollo", "Macnifica"){
    let pedido = parseInt(prompt("¿Que desea ordenar?\n 1. BigMac \n 2. MacPollo\n 3. Macnifica \n Por favor Indique \n con un numero"));
    return pedido
}*/

/*INTENTO DOS

/*Calculo de promedio de alumnos*/

function promedio(total, cantidad){
    let resultado = total/cantidad
    return resultado
} 

function acumulador(acumulador, notaSumada){
    return acumulador = acumulador + notaSumada

}

function pedirCantidad(){
    let cantidadNotas = parseInt(prompt("ingresar la cantidad de evaluaciones deseadas"))
    return cantidadNotas
}
let nota = 0;
let prom = 0;
let acum = 0;
let cantNotas = pedirCantidad();

for(let i=0; i< cantNotas; i++ ){
    nota = parseInt(prompt(`ingrese calificacion ${i+1}`))
    acum = acumulador(acum, nota)
}

prom = promedio(acum, cantNotas)

console.log("la suma total es " + acum)
console.log("El promedio es " + prom)