// window.addEventListener('load', init);
// const post = () => {
//     if(postText === ""){
//       postEmpty.style.display= "block";
//     }
//     else {
//       postEmpty.style.display= "none";
//       savePost(postText, userName);
//     }
//   } 


  
//  document.getElementById("hola").addEventListener("click",function(){
//   document.getElementById("root").style.display="none";
//   document.getElementById("agregar").style.display="block";
  
//     // alert("hola") 
//   });
  
//   document.getElementById("entrar").addEventListener("click",function(){
//     document.getElementById("root").style.display="none";
//     document.getElementById("agregar").style.display="none";
//       // alert("como estas")
//     document.getElementById("page2").style.display="block";
      
//     });

//   let recipeKey = "";
// const recipe = (nameRecipe,newTime,newingredients,newpreparation) => {
//   recipeKey = firebase.database().ref('recipe/').child('likes').push().key;

//   firebase.database().ref(`recipe/${recipeKey}`).set({
//     likesCount : 0,
//     titulo: nameRecipe,
//     Key: recipeKey,
//     timePrep:newTime,
//     ingredients:newingredients,
//     preparation:newpreparation
   
//   });
//   console.log("holaaaa")
// };


// const saveRecipe = ()=>{
// const nameRecipe= titleRecipe.value;
// const newTime= time.value;
// const newingredients= Ingredients.value
// const newpreparation= instRecipes.value
// // console.log(newTime)

// recipe(nameRecipe,newTime,newingredients,newpreparation)

// }
// sendRecipe.addEventListener('click', saveRecipe )
  // document.getElementById("sendRecipe").addEventListener('click', function(){
  //   alert('hola')
  // });



// let newRecipe = "";
// const recipe = (nameRecipe) => {
//   newRecipeKey = firebase.database().ref('recipe/').child('likes').push().key;

//   firebase.database().ref(`recipe/${newRecipeKey}`).set({
//     likesCount : 0,
//     titulo: nameRecipe
      
//   });
// };


// const saveRecipe = ()=>{
// const nameRecipe= titleRecipe.value;
// nameRecipe(nameRecipe)

// }
// sendRecipe.addEventListener('click', function(){
//   alert('hola')
// });