//llamado a la iniciación de la ruta 
// Initialize Firebase

 var config = {
    apiKey: "AIzaSyBhGWWeKj-GpQV7JzujZCE-fzms0LoZgZ4",
    authDomain: "social-network-682a3.firebaseapp.com",
    databaseURL: "https://social-network-682a3.firebaseio.com",
    projectId: "social-network-682a3",
    storageBucket: "social-network-682a3.appspot.com",
    messagingSenderId: "307635345259"
  };
  firebase.initializeApp(config);

import { initRouter } from './route.js';

const init = () => {
    initRouter();
}

window.addEventListener('load', init);

