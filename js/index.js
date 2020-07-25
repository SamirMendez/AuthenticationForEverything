const firebaseAuth = firebase.auth();

// Creando un registo para los usuarios
async function createUser() {
    // Extraer datos del formulario
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
    // Extraer datos del formulario
    // Creando usuario en el sistema
    await firebaseAuth.createUserWithEmailAndPassword(userEmail, userPassword)
    // Creando usuario en el sistema
    // Código en caso de un registro exitoso
    .then((userData) => {
        // Actualizando objeto del usuario
        const user = firebaseAuth.currentUser;
        user.updateProfile({
            displayName: userName,
            photoURL: 'Aquí va la foto de perfil',
        });
        // Actualizando objeto del usuario
        // Enviando correo de verificacion
        user.sendEmailVerification().then((returnedData) => {
            alert('Registro exitoso');
            location.href="../login/login.html";
        }).catch((error) => {
            alert('Hubo un problema al enviar el correo');  
        })
        // Enviando correo de verificacion
        console.log(userData);
    })
    // Código en caso de un registro exitoso
    // Código en caso de un problema durante el registro
    .catch((error) => {
        const errorCodes = error.code;
        switch (errorCodes) {
            case 'auth/email-already-in-use':
                alert('Correo vinculado a otra cuenta')
                break;
            case 'auth/weak-password':
                alert('Contraseña débil')
                break;
            case 'auth/invalid-email':
                alert('Formato de correo electrónico incorrecto')
                break;
            case 'auth/operation-not-allowed':
                alert('Registro inhabilitado en estos momentos');
                break;
        }
    });
    // Código en caso de un problema durante el registro


}
// Creando un registo para los usuarios