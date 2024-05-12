function iniciarSesion() {
    let email = prompt('Ingrese su correo electrónico:');
    let contraseña = prompt('Ingrese su contraseña:');

    let usuarioValido = true;

    if (usuarioValido) {
        let mensaje = "¡Hola " + email + ", bienvenido a nuestro sitio!";
        alert(mensaje);
    } else {
        alert('Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
}
function actualizarContraseña() {
    let email = prompt('Ingrese su correo electrónico:');
    let contraseñaActual = prompt('Ingrese su contraseña actual:');
    let nuevaContraseña = prompt('Ingrese su nueva contraseña:');

    let contraseñaValida = true;

    if (contraseñaValida) {
        let mensaje = "Se ha actualizado la contraseña para el correo " + email + ".";
        alert(mensaje);
    } else {
        alert('Correo electrónico o contraseña incorrectos. No se pudo actualizar la contraseña.');
    }
}