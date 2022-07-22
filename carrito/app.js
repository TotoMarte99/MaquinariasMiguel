const Productos = [
  { id: 1, marca: "Janome Heavy Duty", precio: 25000 },
  { id: 2, marca: "Lumina Roja", precio: 50000 },
  { id: 3, marca: "Janome Green", precio: 60000 },
  { id: 4, marca: "Lumina Linda", precio: 50000 },
  { id: 5, marca: "Brother Overlock", precio: 50000 },
];

let carrito = [];

//Establecemos eventos//
let boton = document.getElementById("boton_01");
boton.addEventListener("click", Agregando1);
let boton2 = document.getElementById("boton_02");
boton2.addEventListener("click", Agregando2);
let boton3 = document.getElementById("boton_03");
boton3.addEventListener("click", Agregando3);
let boton4 = document.getElementById("boton_04");
boton4.addEventListener("click", Agregando4);
let boton6 = document.getElementById("boton_06");
boton6.addEventListener("click", Agregando6);


function Agregando1() {
  carrito.push(Productos[0]);
  var elemento = document.createElement("div");
  var productos = document.querySelector("#productos1");

  elemento.innerHTML =(`
    Marca: ${Productos[0].marca} - 
    Precio: ${Productos[0].precio}
    <p onclick="document.getElementById('productos1').innerHTML = '' "cursor="pointer">🗑️​</p>`);
  //Estilos//
  elemento.style.setProperty("text-align", "center");
  elemento.style.setProperty("padding", "10px");
  elemento.style.setProperty("font-size", "17px");
  elemento.style.setProperty("font-weight", "700");
  elemento.style.setProperty("line-height", "3");
  elemento.style.setProperty("background-color", "darkkhaki");
  elemento.style.setProperty("margin-left", "250px");
  elemento.style.setProperty("margin-right", "250px");
  elemento.style.setProperty("margin-bottom", "20px");
  elemento.style.setProperty("border-radius", "88px");
  elemento.style.setProperty("border","solid");
  
  productos.appendChild(elemento);
}

function Agregando2() {
  carrito.push(Productos[1]);
  var elemento = document.createElement("div");
  var productos = document.querySelector("#productos2");

  elemento.innerHTML =(`
    Marca: ${Productos[1].marca} - 
    Precio: ${Productos[1].precio}
    <p onclick="document.getElementById('productos2').innerHTML = '' "cursor="pointer">🗑️​</p>`);
  //Estilos//
  elemento.style.setProperty("text-align", "center");
  elemento.style.setProperty("padding", "10px");
  elemento.style.setProperty("font-size", "17px");
  elemento.style.setProperty("font-weight", "700");
  elemento.style.setProperty("line-height", "3");
  elemento.style.setProperty("background-color", "darkkhaki");
  elemento.style.setProperty("margin-left", "250px");
  elemento.style.setProperty("margin-right", "250px");
  elemento.style.setProperty("margin-bottom", "20px");
  elemento.style.setProperty("border-radius", "88px");
  elemento.style.setProperty("border","solid");
  
  productos.appendChild(elemento);
}

function Agregando3() {
  carrito.push(Productos[2]);
  var elemento = document.createElement("div");
  var productos = document.querySelector("#productos3");

  elemento.innerHTML =(`
    Marca: ${Productos[2].marca} - 
    Precio: ${Productos[2].precio}
    <p onclick="document.getElementById('productos3').innerHTML = '' "cursor="pointer">🗑️​</p>`);
  //Estilos//
  elemento.style.setProperty("text-align", "center");
  elemento.style.setProperty("padding", "10px");
  elemento.style.setProperty("font-size", "17px");
  elemento.style.setProperty("font-weight", "700");
  elemento.style.setProperty("line-height", "3");
  elemento.style.setProperty("background-color", "darkkhaki");
  elemento.style.setProperty("margin-left", "250px");
  elemento.style.setProperty("margin-right", "250px");
  elemento.style.setProperty("margin-bottom", "20px");
  elemento.style.setProperty("border-radius", "88px");
  elemento.style.setProperty("border","solid");
  
  productos.appendChild(elemento);
}

function Agregando4() {
  carrito.push(Productos[3]);
  var elemento = document.createElement("div");
  var productos = document.querySelector("#productos4");

  elemento.innerHTML =(`
    Marca: ${Productos[3].marca} - 
    Precio: ${Productos[3].precio}
    <p onclick="document.getElementById('productos4').innerHTML = '' "cursor="pointer"">🗑️​</p>`);
  //Estilos//
  elemento.style.setProperty("text-align", "center");
  elemento.style.setProperty("padding", "10px");
  elemento.style.setProperty("font-size", "17px");
  elemento.style.setProperty("font-weight", "700");
  elemento.style.setProperty("line-height", "3");
  elemento.style.setProperty("background-color", "darkkhaki");
  elemento.style.setProperty("margin-left", "250px");
  elemento.style.setProperty("margin-right", "250px");
  elemento.style.setProperty("margin-bottom", "20px");
  elemento.style.setProperty("border-radius", "88px");
  elemento.style.setProperty("border","solid");
  
  productos.appendChild(elemento);
}

function Agregando6() {
  carrito.push(Productos[4]);
  var productos = document.querySelector("#productos5");
  var elemento = document.createElement("div");
  

  elemento.innerHTML = (`
    Marca: ${Productos[4].marca} - 
    Precio: ${Productos[4].precio}
    <p onclick="document.getElementById('productos5').innerHTML = '' "cursor="pointer">🗑️​</p>`);
    
  //Estilos//
  elemento.style.setProperty("text-align", "center");
  elemento.style.setProperty("padding", "10px");
  elemento.style.setProperty("font-size", "17px");
  elemento.style.setProperty("font-weight", "700");
  elemento.style.setProperty("line-height", "3");
  elemento.style.setProperty("background-color", "darkkhaki");
  elemento.style.setProperty("margin-left", "250px");
  elemento.style.setProperty("margin-right", "250px");
  elemento.style.setProperty("margin-bottom", "20px");
  elemento.style.setProperty("border-radius", "88px");
  elemento.style.setProperty("border","solid");

  productos.appendChild(elemento);


}

//Boton Finalizar carrito//
let botonCarrito = document.getElementById("botonCarrito");
botonCarrito.addEventListener("click", finalizadoCarrito);

function finalizadoCarrito() {
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  alert(`Estimado Cliente, el total de su carrito es de: $ ${total}`);
}

//Boton Vaciar carrito//



let vaciarCarro = document.getElementById("vaciarCarro");
vaciarCarro.addEventListener("click", carritoVaciado);

function carritoVaciado() {
  location.reload();
  alert("Su carrito fue vaciado, comience su compra");
}
