//console.log("Hola mundo desde un archivo externo de Javascript!!!");

//DOM
//let tabla = document.querySelector(".table"); solo el primer elemento
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});
*/

//console.log(links);
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
})
*/

// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){

  // Agregar un evento click a  cada uno de ellos - case sensitive
  link.addEventListener("click", function(ev){
    ev.preventDefault(); //Previene el comportamiento por defecto en este caso redireccionarte a otra página

    let content = document.querySelector('.content');

    // Quitarle las clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    // Agregar clases para animar su salida fadeOutUp
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "/boletines";
    }, 600);
    // setInterval esta otra funcion lo ejecuta repetidamente

    return false;
  });
})


//Agregar un evento click a cada uno de ellos
