function validarFormulario() {
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelefono = /^\+?56\d{9}$/;

    if (!regexCorreo.test(correo)) {
        alert("Ingresa un correo válido");
    }

    if (!regexTelefono.test(telefono)) {
        alert("Ingresa un teléfono válido");
    }
}

function modificarParrafo() {
    const comentarios = document.getElementById("comentarios").value;

    if (comentarios.length <= 200) {
        document.getElementById("parrafo").innerHTML = comentarios;
    } else {
        alert("Solo puedes ingresar hasta 200 caracteres.");
    }
}

const comentarios = document.getElementById("comentarios");
comentarios.addEventListener("keyup", modificarParrafo);

const btn = document.getElementById("btn");
btn.addEventListener("click", validarFormulario);