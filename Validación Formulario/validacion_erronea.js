function validarFormulario(){
    if(validarFormulario2()){
        alert("Formulario correcto!");
    }else{
        alert("Formulario incorrecto!");
        return false;
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    let errores = [];

    if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 carácteres.");
    }

    if (!email.includes('@') || !email.includes('.')) {
        errores.push("El email debe tener un formato válido.");
    }

    if (errores.length > 0) {
        mensaje.innerText = errores.join(" ");
        mensaje.style.color = "red";
        return false; // Indica error en el formulario
    } else {
        mensaje.innerText = "Formulario válido.";
        mensaje.style.color = "green";
        return true; // Indica que el formulario es correcto
    }
}