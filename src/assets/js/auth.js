export const loginGoogle = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		// ...
	}).catch(function (error) {
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

export const createAccount = (email, password) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
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

export const logOut = () => {
	firebase.auth().signOut();
}

export const verifyPass = (pass, passRepeat) => {
  if (pass === passRepeat) {
		return true;
	}
	else {
		return false;
	}
} 
	
 export const verifyUser = (firebaseUser) => {
	if (firebaseUser) {
		console.log('muestra timeline')
		return true;
	}
	else{
		console.log("Debes registrarte para poder ingresar");
		return false;
	}
} 