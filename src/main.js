// Initialize Firebase
var config = {
  apiKey: "AIzaSyAbxLiczr6qFmwWmGszkaWL5-3y7CkEH0M",
  authDomain: "allergy-bites.firebaseapp.com",
  databaseURL: "https://allergy-bites.firebaseio.com",
  projectId: "allergy-bites",
  storageBucket: "allergy-bites.appspot.com",
  messagingSenderId: "665368959324"
};
firebase.initializeApp(config);

import { initRouter } from './route.js';

const init = () => {
  initRouter();
}

window.addEventListener('load', init);