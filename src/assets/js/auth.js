/* //inicialización firebase
//llamado a las rutas

let mainText = document.getElementById('mainText');

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {

    let firebaseRef = firebase.database().ref();

    firebaseRef.child('Text').set('Some Value');

}) */

//1.- Crearemos dos funciones que simularán el login con Google y la creación de la cuenta.

export const loginGoogle = () => {
    return 'login con Google OK';
}

export const createAccount = () => {
    return 'cuenta creada OK';
}
