

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
let estanteria= []
estanteria.push(producto1, producto2, producto3)
let sectionCursos = document.getElementById("curses")
    console.log(sectionCursos)
estanteria.forEach( (producto) => {
    let nuevoCurso = document.createElement("div")
    nuevoCurso.innerHTML = `<div class="container-fluid row justify-content-around mt-5">
                    <div id= "${producto.id} class="card col-4 mb-3" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top pt-2" alt="Bullet Journal, control de ansiedad">
                        <div class="card-body ">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.precio}</p>
                        <a href="#" id= "compra" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                    </div>`
    sectionCursos.appendChild(nuevoCurso)
})
   
 let btnCompra = document.getElementsById("comprar")
  for(let compra of btnCompra){
  compra.addEventListener("click", ()=>{
       alert("El cuso fue añadido al carrito")
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
    },0)*/