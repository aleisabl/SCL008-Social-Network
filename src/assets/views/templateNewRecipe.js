
import { postRecipe } from './../js/posts.js';

import { showRecipeTimeLine } from './../js/posts.js';



export  const templateNewRecipe = () =>{

  document.getElementById('root').innerHTML='';
   const containerNewRecipe = document.createElement('div');
   const contentNewRecipe = `    <div class=''>
                      <div class='row '>
                        <div class='column'>
                         <div class='grid-title-create'>
                            Nueva Receta
                          </div>
                        </div>
                        <div class='column'>
                          <div class="more-info">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                 <div class="create-recipe">
                  <div class="cfield">
                     
                     <input type="text" id="titleRecipe" placeholder="Titulo de tu receta">
                  </div>
                  <div class="center">
                     
                     <textarea class="notes" cols="40" rows="5" placeholder="ingresa tu receta" id="description"></textarea>
                  </div>
        
                    
                    
                    <select id="tipe-recipe" class="soflow">
                        <option value="none">Mi receta es apta para :</option>
                        <option value="celiaco">Celíaco</option>
                        <option value="Diabetico">Diabéticos</option>
                        <option value="Intolerante a la lactosa">Intolerante a la lactosa</option>
                        <option value="Vegano">Vegano</option>
                    </select>
                    <input id="file" type="file" name="file" accept="image/*">
                    <button id="postBtn">Publicar</button>
                </div>
                    <footer><a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>
    `;

    containerNewRecipe.innerHTML= contentNewRecipe;
    const btnPostNewRecipe = containerNewRecipe.querySelector('#postBtn');

    btnPostNewRecipe.addEventListener('click', () =>{
      const title = containerNewRecipe.querySelector('#titleRecipe').value;
      const description = containerNewRecipe.querySelector('#description').value;
      const tipeRecipe = containerNewRecipe.querySelector('#tipe-recipe').value;


      
      const ref = firebase.storage().ref();
      const fileUpload = containerNewRecipe.querySelector('#file').files[0];
      const name = fileUpload.name;
      const metadata = { contentType: file.type };
      const task = ref.child(name).put(file,metadata);


      

      postRecipe(title,description,tipeRecipe);
      

    })  


    return containerNewRecipe;
}

