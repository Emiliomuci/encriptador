const campo_texto = document.querySelector("#textoEncriptado");
const campo_mensaje = document.querySelector("#campo_mensaje");

const matriz = [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], 
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada) {
    for(let i = 0; i < matriz.length; i++) {
        if (fraseEncriptada.includes(matriz[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_mensaje.value);
    console.log(texto);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada) {
    for(let i = 0; i < matriz.length; i++) {
        if (fraseDesencriptada.includes(matriz[i][1])) {
            fraseDesencriptada = fraseDesencriptada.split(matriz[i][1]).join(matriz[i][0]);
        }
    }
    return fraseDesencriptada;
}


function copiarMensaje() {
    campo_mensaje.select();
    document.execCommand("copy");
}
    
function ocultarImagen() {
    imagen.style.display = 'none'; // Oculta la imagen
}
