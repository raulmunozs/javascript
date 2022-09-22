

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

const producto3 = new producto(3,"Economia para emprebdedores", 300, "Los emprendedores son personas que combinan sus recursos y trabajo para crear activos de una empresa, sin embargo, gestionar la ecomia no es sencillo. Este curso se comprende por varios bloques: Plan de ventas previsional. Presupuesto de gastos previsional. Plan de inversiones y financiación previsional.", "./bancoDeImagenes/pexels-pixabay-209224.jpg")


//Dos formas inicializar el array:
//const biblioteca = [producto1, producto2, producto3]
// console.log(biblioteca)
//Segunda forma
const estanteria= []
estanteria.push(producto1, producto2, producto3)
let sectionCursos = document.getElementById("carrito")

    estanteria.forEach((producto)=>{
        let nuevoCurso = document.createElement(`div`);
        nuevoCurso.innerHTML = `
                    <h2 data-aos="fade-up" data-aos-duration="3000">Cursos</h2>
                    <div class="row justify-content-around mt-5">
                    <div class="card col-4 mb-3" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top pt-2" alt="Bullet Journal, control de ansiedad">
                        <div class="card-body ">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.precio}</p>
                        <a href="#" class=" comprar btn btn-primary">Ir al curso</a>
                        </div>
                    </div>
                    </div>
                    <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>
                `
        sectionCursos.append(nuevoCurso)
    })
    let btnCompra = document.getElementsByClassName("comprar")
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("El cuso fue añadido al carrito")
    })

}

const suscriptor = []
// //function agregar Libro
function nuevosuscriptor(array){
    let nombreIngresado = prompt("Ingrese el nombre")
    let emailIngresado = prompt("Ingrese el correo")
    let suscriptorCreado = new Libro (suscriptor.length+1, nombreIngresado, emailIngresado)
    array.push(suscriptorCreado)
    
}

//function nuevoLibro actualiza a inputs!
function guardarSuscriptor(array){
    let emailInput = document.getElementById("exampleInputEmail1")
    let nombreInput = document.getElementById("exampleInputText1")
    let suscriptorCreado = new Libro (array.length+1, emailInput.value, tituloInput.value, parseInt(precioInput.value), "libroNuevo.jpg")
    console.log(suscriptorCreado)
    array.push(suscriptorCreado)
    console.log(array)
    //Provisorio resetear form
    nombreInput.value = ""
    emailInput.value = ""
    
    mostrarCatalogo(array)
}

