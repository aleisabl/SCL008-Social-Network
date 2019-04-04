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

/* // CODIGO BLANCA

import { initRouter } from './route.js';


const init = () => {
  initRouter();
}

window.addEventListener('load', init);
const post = () => {
    let postEmpty = document.getElementById("postAlert");
    let postText = document.getElementById("postText").value;
    if(postText === ""){
      postEmpty.style.display= "block";
    }
    else {
      postEmpty.style.display= "none";
      let postText = document.getElementById("postText").value;
      let userName = document.getElementById("postName").value;
      savePost(postText, userName);
    }
  } 
  document.getElementById("postBtn").addEventListener("click", post);

  
 document.getElementById("hola").addEventListener("click",function(){
  document.getElementById("root").style.display="none";
  document.getElementById("muro").style.display="block";
    alert("hola")

    
  });

  let recipeKey = "";
const recipe = (nameRecipe,newTime) => {
  recipeKey = firebase.database().ref('recipe/').child('likes').push().key;

  firebase.database().ref(`recipe/${recipeKey}`).set({
    likesCount : 0,
    titulo: nameRecipe,
    Key: recipeKey,
    timePrep:newTime
   
  });
  console.log("holaaaa")
};


const saveRecipe = ()=>{
const nameRecipe= titleRecipe.value;
const newTime= time.value;
// console.log(newTime)

recipe(nameRecipe,newTime)

}
sendRecipe.addEventListener('click', saveRecipe )
  // document.getElementById("sendRecipe").addEventListener('click', function(){
  //   alert('hola')
  // }); */