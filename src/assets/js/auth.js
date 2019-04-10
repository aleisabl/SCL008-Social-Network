//1.- Crearemos dos funciones que simularán el login con Google y la creación de la cuenta.

export const loginGoogle = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	var user = firebase.auth().currentUser;
	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
	
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
	console.log(user)
	
	
	return 'login con Google OK';
}

export const createAccount = (email, password, fullName) => {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
		// ...
	});


	firebase.auth().onAuthStateChanged(user => {
        if (user.displayName == null && user.photoURL == null) {
	        console.log(user)
	        firebase.database().ref('userInfo/'+ user.uid).set({
		 
			fullnameUser: fullName,
			photoUser: "http://www.xeus.com/wp-content/uploads/2014/09/One_User_Orange.png"

			
			});
        }
        else{
        	firebase.database().ref('userInfo/'+ user.uid).set({
	 
			fullnameUser: user.displayName,
			photoUser : user.photoURL
			
			});	
        }
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

// Funciones para hacer los tests de nuestro código

// Función para verificar que el usuario ingresa por lo menos su nombre en el registro
export const verifyFullName = (fullName) => {
	if (fullName === ''){
		return false;
	} else
		return true;
  }

// Función para verificar que las dos contraseñas ingresadas en el registro son idénticas
export const verifyPass = (pass, passRepeat) => {
  if (pass === passRepeat) {
		return true;
	}
	else {
		return false;
	}
} 

// Función para veriicar que el correo cumple con un patrón estimado
export const verifyEmail = (email) => {
    //expresión regular que simula el patrón del correo electrónico
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

// Función para verificar que no se ingresen más de 100 carácteres en la receta
  export const verifyRecipe = (description) => {
	if (description.length > 100) {
		return false;
	} else 
		return true;
  }

  