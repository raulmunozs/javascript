let combo = "Quiero el combo"
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
        combo = $(numeroCombo)}
        
    
    let promptValidacion = prompt("¿Desea agregar otro combo? si | no")
    
    if(promptValidacion === "s" ||promptValidacion === "si" || promptValidacion === "yes" || promptValidacion === "y"){
        validacion = true
    }
    else if(promptValidacion === null || promptValidacion === "no" || promptValidacion === "n" || promptValidacion === "" ){
        validacion = false

    }
}
    while(validacion)
