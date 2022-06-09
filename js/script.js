let contenedor = document.getElementById("contenedor");

//EL CONTENEDOR DE LA TARJETA PERRO UNO
let elementoUnoDiv = document.createElement("div");
elementoUnoDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- PERRO UNO
let tarjetaPerroUno = document.createElement("img");
tarjetaPerroUno.src = "";

elementoUnoDiv.appendChild(tarjetaPerroUno);

//EL CONTENEDOR DE LA TARJETA PERRO DOS
let elementoDosDiv = document.createElement("div");
elementoDosDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- PERRO DOS
let tarjetaPerroDos = document.createElement("img");
tarjetaPerroDos.src = "";

elementoDosDiv.appendChild(tarjetaPerroDos);

//EL CONTENEDOR DE LA TARJETA GATO UNO
let elementoTresDiv = document.createElement("div");
elementoTresDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- GATO UNO
let tarjetaGatoUno = document.createElement("img");
tarjetaGatoUno.src = "";

elementoTresDiv.appendChild(tarjetaGatoUno);

//EL CONTENEDOR DE LA TARJETA GATO DOS
let elementoCuatroDiv = document.createElement("div");
elementoCuatroDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- GATO DOS
let tarjetaGatoDos = document.createElement("img");
tarjetaGatoDos.src = "";

elementoCuatroDiv.appendChild(tarjetaGatoDos);

//EL CONTENEDOR DE LA TARJETA ELEFANTE UNO
let elementoCincoDiv = document.createElement("div");
elementoCincoDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- ELEFANTE UNO
let tarjetaElefanteUno = document.createElement("img");
tarjetaElefanteUno.src = "";

elementoCincoDiv.appendChild(tarjetaElefanteUno);

//EL CONTENEDOR DE LA TARJETA ELEFANTE DOS
let elementoSeisDiv = document.createElement("div");
elementoSeisDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- ELEFANTE DOS
let tarjetaElefanteDos = document.createElement("img");
tarjetaElefanteDos.src = "";

elementoSeisDiv.appendChild(tarjetaElefanteDos);

//EL CONTENEDOR DE LA TARJETA OSO UNO
let elementoSieteDiv = document.createElement("div");
elementoSieteDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- OSO UNO
let tarjetaOsoUno = document.createElement("img");
tarjetaOsoUno.src = "";

elementoSieteDiv.appendChild(tarjetaOsoUno);

//EL CONTENEDOR DE LA TARJETA OSO DOS
let elementoOchoDiv = document.createElement("div");
elementoOchoDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- OSO DOS
let tarjetaOsoDos = document.createElement("img");
tarjetaOsoDos.src = "";

elementoOchoDiv.appendChild(tarjetaOsoDos);

//EL CONTENEDOR DE LA TARJETA LEON UNO
let elementoNueveDiv = document.createElement("div");
elementoNueveDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- LEON UNO
let tarjetaLeonUno = document.createElement("img");
tarjetaLeonUno.src = "";

elementoNueveDiv.appendChild(tarjetaLeonUno);

//EL CONTENEDOR DE LA TARJETA LEON DOS
let elementoDiezDiv = document.createElement("div");
elementoDiezDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- LEON DOS
let tarjetaLeonDos = document.createElement("img");
tarjetaLeonDos.src = "";

elementoDiezDiv.appendChild(tarjetaLeonDos);

//EL CONTENEDOR DE LA TARJETA MONO UNO
let elementoOnceDiv = document.createElement("div");
elementoOnceDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- MONO UNO
let tarjetaMonoUno = document.createElement("img");
tarjetaMonoUno.src = "";

elementoOnceDiv.appendChild(tarjetaMonoUno);

//EL CONTENEDOR DE LA TARJETA MONO DOS
let elementoDoceDiv = document.createElement("div");
elementoDoceDiv.className = "cuadrado";

// EL CONTENIDO DE LA TARJETA -- IMAGEN -- MONO DOS
let tarjetaMonoDos = document.createElement("img");
tarjetaMonoDos.src = "";

elementoDoceDiv.appendChild(tarjetaMonoDos);

//ARREGLO PARA ITERAR LOS DIVS EN EL HTML Y DESORDENARLOS

let array = [
  elementoDoceDiv,
  elementoOnceDiv,
  elementoDiezDiv,
  elementoNueveDiv,
  elementoOchoDiv,
  elementoSieteDiv,
  elementoSeisDiv,
  elementoCincoDiv,
  elementoCuatroDiv,
  elementoDosDiv,
  elementoUnoDiv,
  elementoTresDiv,
];

let nuevoArray = array.sort(() => Math.random() - 0.5);

for (let index = 0; index < nuevoArray.length; index++) {
  contenedor.appendChild(array[index]);
}

let botonJugar = document.getElementById("boton-jugar");



/*******************************************************************************************************************/



//CRONOMETRO PARA EL JUEGO

let timerClaseCss = document.getElementsByClassName("timer")[0];

let cuenta_atras = document.getElementById("cuenta_atras");

let audioCuentaAtras = document.getElementById("audioUno");

let audioCorrecto = document.getElementById("audioDos");

let audioIncorrecto = document.getElementById("audioTres");

let sonidoGanador = document.getElementById("audioCuatro");

let segundos = 40;

let identificadorDeTemporizador;

function actualizarTiempo() {
  cuenta_atras.innerHTML = segundos + " segundos";

  if (segundos === 0) {
    audioCuentaAtras.pause();
  } else {
    segundos--;

    identificadorDeTemporizador = setTimeout("actualizarTiempo()", 1000);

    audioCuentaAtras.play();
  }
}

botonJugar.addEventListener("click", function () {
  timerClaseCss.style.display = "inline";
  contenedor.style.display = "flex";

  botonJugar.style.display = "none";

  actualizarTiempo();
});


/**************************************************************************************************************************/

// FUNCION PARA DAR VUELTA LA IMAGEN AL HACERLE CLICK

function seleccionar(tarjetaUno, imagen, tarjetaDos) {
  tarjetaUno.src = imagen;

  function borrar() {
    if (tarjetaDos.src === tarjetaUno.src) {
      tarjetaUno = imagen;
      tarjetaDos = imagen;

      audioCorrecto.play();

      audioCuentaAtras.pause();



      // CONDICIONAL QUE PRUEBA QUE LA IMAGEN ESTE CON EL SRC COMPLETO, DE SER ASÍ EN TODOS LOS CASOS, GANASTE!

      if (
        tarjetaMonoUno.src.replace(/^.*[\\\/]/, "") == "mono.jpg" &&
        tarjetaElefanteUno.src.replace(/^.*[\\\/]/, "") == "elefante.jpg" &&
        tarjetaGatoUno.src.replace(/^.*[\\\/]/, "") == "gato.jpg" &&
        tarjetaLeonUno.src.replace(/^.*[\\\/]/, "") == "leon.jpg" &&
        tarjetaOsoUno.src.replace(/^.*[\\\/]/, "") == "oso.jpg" &&
        tarjetaPerroUno.src.replace(/^.*[\\\/]/, "") == "perro.jpg"
      ) {
        clearTimeout(identificadorDeTemporizador);

        sonidoGanador.play();
      }
    } else {
      tarjetaUno.src = "";

      audioIncorrecto.play();
    }
  }

  const time = setTimeout(borrar, 400);
}



// Se le agrega el evento click con la funcion seleccionar al hacer click en cada tarjeta


tarjetaPerroUno.addEventListener("click", () => {
  return seleccionar(tarjetaPerroUno, "imagenes/perro.jpg", tarjetaPerroDos);
});

tarjetaPerroDos.addEventListener("click", () => {
  return seleccionar(tarjetaPerroDos, "imagenes/perro.jpg", tarjetaPerroUno);
});

tarjetaGatoUno.addEventListener("click", () => {
  return seleccionar(tarjetaGatoUno, "imagenes/gato.jpg", tarjetaGatoDos);
});

tarjetaGatoDos.addEventListener("click", () => {
  return seleccionar(tarjetaGatoDos, "imagenes/gato.jpg", tarjetaGatoUno);
});

tarjetaElefanteUno.addEventListener("click", () => {
  return seleccionar(tarjetaElefanteUno, "imagenes/elefante.jpg", tarjetaElefanteDos);
});

tarjetaElefanteDos.addEventListener("click", () => {
  return seleccionar(tarjetaElefanteDos, "imagenes/elefante.jpg", tarjetaElefanteUno);
});

tarjetaLeonUno.addEventListener("click", () => {
  return seleccionar(tarjetaLeonUno, "imagenes/leon.jpg", tarjetaLeonDos);
});

tarjetaLeonDos.addEventListener("click", () => {
  return seleccionar(tarjetaLeonDos, "imagenes/leon.jpg", tarjetaLeonUno);
});

tarjetaOsoUno.addEventListener("click", () => {
  return seleccionar(tarjetaOsoUno, "imagenes/oso.jpg", tarjetaOsoDos);
});

tarjetaOsoDos.addEventListener("click", () => {
  return seleccionar(tarjetaOsoDos, "imagenes/oso.jpg", tarjetaOsoUno);
});

tarjetaMonoUno.addEventListener("click", () => {
  return seleccionar(tarjetaMonoUno, "imagenes/mono.jpg", tarjetaMonoDos);
});

tarjetaMonoDos.addEventListener("click", () => {
  return seleccionar(tarjetaMonoDos, "imagenes/mono.jpg", tarjetaMonoUno);
});
