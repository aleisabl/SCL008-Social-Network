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
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
    return 'login con Google OK';
}

export const createAccount = (email,password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
 alert(errorMessage);
  // ...
});
    return 'cuenta creada OK';
}


export const signIn = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}