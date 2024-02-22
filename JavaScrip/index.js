//Creamos variables cuantitativas en el bucle
let correctasJugador = 0
let correctasCoberbot = 0
//Nombre distinto a empate para no hacer el código aburrido
let ComparteLaPena = 0

//Aviso:
alert("Con que pretendes desafiarme, solo quiero confirmar ¿estas seguro?")
let opciones = prompt("Ingresa el número 1 para jugar o 2 para retirarte")

//Variable para controlar el bucle
let jugar = opciones == 1

//Variable para el número máximo de apuestas
let maxApuestas = prompt("¿Cuantas veces quieres apostar como máximo?")

while (jugar) {
    let nombre = prompt("¿Como deseas llamarte?")
    let apuestas = prompt("¿Cuantas veces deseas apostar?")
    for (let i = 0; i < apuestas && i < maxApuestas; i++) {
        //Utilizo la función para que llegue a números entre 1-6 (posibilidades de las caras del cubo/dado)
        let numeroUsuario = generarNumero()
        let numeroCoderbot = generarNumero()
        //Condicional
        let resultado = numeroUsuario - numeroCoderbot
        if (resultado > 0) {
            correctasJugador++
            alert(`Excelente, vas ${correctasJugador} a ${correctasCoberbot}`)
        } else if (resultado < 0) {
            correctasCoberbot++
            alert(`Te avise que debias reitrarte ${nombre} en este momento estas ${correctasJugador} a ${correctasCoberbot}`)
        } else {
            ComparteLaPena++
            alert(`Hay un empate épico entre ${nombre} y Coderbot`)
        }
        //Cambiar las imágenes de los dados según el número generado
        let imagenJugador = document.querySelector(".img1");
        let imagenCoderbot = document.querySelector(".img2");
        imagenJugador.src = "/Images/dado" + numeroUsuario + ".png";
        imagenCoderbot.src = "/Images/dado" + numeroCoderbot + ".png";
    }
    //Verificar si el jugador o el Coderbot han ganado
    if (correctasJugador == maxApuestas) {
        alert(`¡Felicidades ${nombre}! Has ganado el juego con ${correctasJugador} puntos. Coderbot solo tiene ${correctasCoberbot} puntos.`)
    } else if (correctasCoberbot == maxApuestas) {
        alert(`Lo siento ${nombre}, has perdido el juego. Coderbot tiene ${correctasCoberbot} puntos y tú solo tienes ${correctasJugador} puntos.`)
    } else {
        alert(`El juego ha terminado. Tu puntaje es ${correctasJugador} y el de Coderbot es ${correctasCoberbot}. Hubo ${ComparteLaPena} empates en total.`)
    }
    //Preguntar si el jugador quiere volver a jugar
    let respuesta = prompt("¿Quieres volver a jugar? Ingresa S para sí o N para no.")
    if (respuesta == "S" || respuesta == "s") {
        //Reiniciar las variables y el bucle
        correctasJugador = 0
        correctasCoberbot = 0
        ComparteLaPena = 0
        jugar = true
    } else if (respuesta == "N" || respuesta == "n") {
        //Terminar el juego
        alert("Gracias por jugar, vuelve pronto")
        jugar = false
    } else {
        //Opción inválida
        alert("Opción inválida, por favor ingresa S o N")
    }
}

//Función para generar un número aleatorio entre 1 y 6
function generarNumero() {
    return Math.floor(Math.random() * 6) + 1
}