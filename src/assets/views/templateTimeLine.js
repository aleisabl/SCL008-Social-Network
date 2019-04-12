import { templateRecipe } from './templateRecipe.js'

import { showRecipeTimeLine, showInfoUser } from './../js/posts.js';


export const templateTimeLine = () =>{
  let user = firebase.auth().currentUser;
  const info = showInfoUser();

  console.log(info);
  
  document.getElementById('root').innerHTML='';
  const containerTimeLine = document.createElement('div');
  const contentTimeLine = `
                        <div class=''>
                      <div class='row'>
                        <div class='column'>
                          <div class='logo'>
                          </div>
                        </div>
                        <div class='column'>
                          <div class='grid-title'>
                            Allergy Bites
                          </div>
                        </div>
                      </div>
                    </div>          
                        <section class="options">
                         <select class="soflow hola">
                            <option>Celíaco</option>
                            <option>Diabético</option>
                        </select>
                    </section>


                    <div class='grid' id="grid"  style="margin-left:15px;" >
                      
                    </div>

                   
                    <footer>
                    <a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="timeline"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add2.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>`;
                    
          

  containerTimeLine.innerHTML= contentTimeLine;

  let posts = showRecipeTimeLine();
  let text = '';
  let containerPost = containerTimeLine.querySelector('#grid');

  console.log(posts)
  posts.forEach(function(element){
   
    text += `             <div  id="recipe-page${element.user}">
                          <div onclick="window.location.href='#/recipe?key=${element.key}'" class='grid-one'>
                            <p>${element.titleRecipe}</p>
                            <p>${element.recipe}</p>
                            <p>apto para:${element.tipe}</p>
                            <p>Subido por ${element.username}</p>
                          </div> 
                          </div>`;

  });
  containerPost.innerHTML= text;
  
  return containerTimeLine;
  
}


