const firebaseAuth = firebase.auth();

// Iniciando la sesion de los usuarios en la plataforma
async function loginUsers() {
    // Extraer datos del formulario
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    // Extraer datos del formulario
    // Iniciar la sesion de los usuarios
    await firebaseAuth.signInWithEmailAndPassword(userEmail, userPassword)
    // Iniciar la sesion de los usuarios
    // Código para un login exitoso
    .then((userData) => {
        console.log(userData)
        const isVerified = userData.user.emailVerified;
        const userName = userData.user.displayName;
        if (isVerified) {
            alert('Bienvenido ' + userName);
            location.href = '../dashboard/dashboard.html';
        } else {
            alert('Estimado ' + userName + ', su cuenta no ha sido verificada');
        }
    })
    // Código para un login exitoso
    // Código para un error en el login
    .catch((error) => {
        const errorCodes = error.code;
        switch (errorCodes) {
            case 'auth/invalid-email':
                alert('Formato de correo electrónico incorrecto')
                break;
            case 'auth/user-disabled':
                alert('Estimado usuario, su cuenta ha sido inhabilitada por tiempo indefinido')
                break;
            case 'auth/user-not-found':
                alert('No existe una cuenta vinculada con este correo')
                break;
            case 'auth/wrong-password':
                alert('Contraseña débil');
                break;
            
        }
    })
    // Código para un error en el login


}
// Iniciando la sesion de los usuarios en la plataforma
// Recuperando las contraseñas
async function recoverPassword() {
    const emailToRecover = prompt('Introduzca el correo electrónico vinculado a la cuenta que desea recuperar, luego enviaremos en enlace de recuperación a dicha cuenta.');
    await firebaseAuth.sendPasswordResetEmail(emailToRecover)
    // Notificando al usuario
    .then(() => {
        alert('Correo enviado exitosamente');
    }).catch((error) => {
        alert('Hubo un error al enviar el correo');
    })
    // Notificando al usuario
}
// Recuperando las contraseñas