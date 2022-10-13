//Casturando Fetch

fetch("https://jsonplaceholder.typicode.com/guide/")
.then((response) => response.json())
.then((json)=> console.log (json));

//Clase constuctora 
class producto {
    constructor(id, titulo, precio, descripcion, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.titulo = titulo,
        this.precio = precio,
        this.descripcion = descripcion,
        this.imagen = imagen

    }
    //métodos
    mostrarData(){
        console.log(`El titulo es ${this.titulo}, \n ${this.descripcion} \n ${this.precio} y su imagen es ${this.imagen}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const producto1 = new producto(1,"Bullet Journal", 100,"AlephLa técnica ha ido evolucionando con los años. Se trata de representar en un cuaderno nuestros deseos, metas, proyecciones, sentimientos, meditaciones o lo que más nos guste. Lo vital, es encontrar un hueco del día para escribir y ver qué realmente nos preocupa, y por supuesto que nos hace felices. Cuando te conoces a ti mismo todo es posible.", "./bancoDeImagenes/pexels-natasha-fernandez-811572.jpg")

const producto2 = new producto(2,"Lectura Agil", 200,"Es un conjunto de métodos y también de técnicas que tienen como principal propósito, el aumentar la velocidad al momento de leer, pero esto no significa que se va a reducir ni el nivel de comprensión, ni tampoco el hecho de retener la información.", "./bancoDeImagenes/pexels-christina-morillo-1181595.jpg")

const producto3 = new producto(3,"Economia para emprendedores", 300, "Los emprendedores son personas que combinan sus recursos y trabajo para crear activos de una empresa, sin embargo, gestionar la ecomia no es sencillo. Este curso se comprende por varios bloques: Plan de ventas previsional. Presupuesto de gastos previsional. Plan de inversiones y financiación previsional.", "./bancoDeImagenes/pexels-pixabay-209224.jpg")


//Dos formas inicializar el array:
//const biblioteca = [producto1, producto2, producto3]
// console.log(biblioteca)
//Segunda forma
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []
console.log(productosEnCarrito)

let estanteria= []


//Guardar estanteria en el Storage
//Revisa si existe en el local y lo trae 
if(localStorage.getItem("estanteria")){
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}
else{
    console.log("Seteando por primera vez el array")

    estanteria.push(producto1, producto2, producto3)
localStorage.setItem("estanteria", JSON.stringify(estanteria) )
}

let sectionCursos = document.getElementById("curses")
    console.log(sectionCursos)
    function catalogo(estanteria){
estanteria.forEach( (producto) => {
    let nuevoCurso = document.createElement("div")
    nuevoCurso.innerHTML = `
                    <div id= "${producto.id} class="card col-4 mb-3" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top pt-2" alt="Bullet Journal, control de ansiedad">
                        <div class="card-body ">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.precio}</p>
                        <a href="#" id= "agregarBtn${producto.id}" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>`
    sectionCursos.appendChild(nuevoCurso)

    let btnCompra = document.getElementById(`agregarBtn${producto.id}`)
 console.log(btnCompra)
btnCompra.addEventListener("click", ()=> { agregarAlCarrito()})
    console.log(estanteria)
    
})

}
catalogo(estanteria);


function agregarAlCarrito(estanteria){
    productosEnCarrito.push(estanteria)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    //Alert con sweetAlert
    Swal.fire({
        title: "Ha agregado un producto",
        icon: "success",
        confirmButtonText : "Acepto",
        confirmButtonColor : "green",
        timer: 3000,
        text: `El curso ha sido agregado`,
        
        
    })
}

//Clase STORAGE


//DOM CARRITO
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')

botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productosEnCarrito)
})
function cargarProductosCarrito(array){

    modalBody.innerHTML = ""
    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.titulo}</h4>
                
                    <p class="card-text">$${productoCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar"><i class="fas fa-trash-alt"></i></button>
            </div>    
        
        
        </div>
`

    })
    //calcular el total
    compraTotal(array)
}

function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio
    },0)}