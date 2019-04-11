
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
                  <div class="title">
                  <p2>Nombre de tu receta<p2><br><br>
                    <input type="text" id="titleRecipe" placeholder="Titulo de tu receta">
                  </div><br><br>
                  <p2>Ingredientes<p2>
                  <div class="ingredients"><br>
                  
                     <textarea class="notes" cols="40" rows="5" placeholder="Ingredientes" id="ingredientes"></textarea>
                  </div>
                   <p2>Preparación<p2> <br>
                  <div class="preparation">
                  
                  <textarea class="notes" cols="40" rows="5" placeholder="Preparación" id="preparacion"></textarea>
               </div>
                    <select id="tipe-recipe" class="soflow">
                        <option value="none">Mi receta es apta para :</option>
                        <option value="celiaco">Celíaco</option>
                        <option value="Diabetico">Diabéticos</option>
                        <option value="Intolerante a la lactosa">Intolerante a la lactosa</option>
                        <option value="Vegano">Vegano</option>
                    </select>
                    <div class="file" id=imgFile>
                    <input id="file" type="file" name="pic" accept="image/*"> 
                    <button type id="postBtn">Publicar</button>
                     </div>
                    
                    <footer><a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>
    `;

    containerNewRecipe.innerHTML= contentNewRecipe;
   

    containerNewRecipe.innerHTML= contentNewRecipe;
    const btnPostNewRecipe = containerNewRecipe.querySelector('#postBtn');


    btnPostNewRecipe.addEventListener('click', () =>{
      const title = containerNewRecipe.querySelector('#titleRecipe').value;
      const ingredientes = containerNewRecipe.querySelector('#ingredientes').value;
      const preparacion = containerNewRecipe.querySelector('#preparacion').value;
      const tipeRecipe = containerNewRecipe.querySelector('#tipe-recipe').value;
      const file = containerNewRecipe.querySelector('#file').files[0];
      const fileRef = containerNewRecipe.querySelector('#fileRef');


      if (file) {
        const ref = firebase.storage().ref();
        const name = (+new Date())+'-'+ file.name;
        const metadata = { contentType: file.type };
        const task = ref.child(name).put(file,metadata);
        // const tmpURL = window.location.href;
       window.location.href = "#/timeline";
      
      }
      
      postRecipe(title,ingredientes,preparacion,tipeRecipe, file,fileRef);
     
    })  


    return containerNewRecipe;
}