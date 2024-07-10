
function encriptar() {
    var texto = document.getElementById("texto").value;
    if (texto.trim() === "") {
        alert("El texto no puede estar vacío.");
        return;
    }
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        alert("El texto no debe contener mayúsculas ni acentos.");
        return;
    }
    var encriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("result").innerHTML = encriptado;
    document.getElementById("copy").style.visibility = "visible";
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    if (texto.trim() === "") {
        alert("El texto no puede estar vacío.");
        return;
    }
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        alert("El texto no debe contener mayúsculas ni acentos.");
        return;
    }
    var desencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("result").innerHTML = desencriptado;
    document.getElementById("copy").style.visibility = "visible";
}

function copiarTexto() {
    var result = document.getElementById("result");
    var textoCopiado = result.innerText;
    navigator.clipboard.writeText(textoCopiado)
        .then(function () {
            // Select the copied text
            var range = document.createRange();
            range.selectNodeContents(result);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        })
        .catch(function (error) {
            alert("Error al copiar el texto: " + error);
        });
}