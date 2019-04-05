
import { postRecipe } from './../js/posts.js';

import { showRecipeTimeLine } from './../js/posts.js';

export  const templateNewRecipe = () =>{

  document.getElementById('root').innerHTML='';
   const containerNewRecipe = document.createElement('div');
   const contentNewRecipe = `    <div class=''>
                      <div class='row '>
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
                </div>
                 <div style="height: 400px;">
        
                    <input type="text" id="titleRecipe" placeholder="Titulo de tu receta">
                    <textarea placeholder="ingresa tu receta" id="description"></textarea>
                    <select id="tipe-recipe">
                        
                        <option value="celiaco">Celíaco</option>
                        <option value="Diabetico">Diabéticos</option>
                        <option value="Intolerante a la lactosa">Intolerante a la lactosa</option>
                        <option value="Vegano">Vegano</option>
                    </select>
                    <button id="postBtn">Publicar</button>
                </div>
                    <footer>Footer
                    <a href="#/login" id="log-out">Cerrar Sesión </a></footer>
    `;

    containerNewRecipe.innerHTML= contentNewRecipe;
    const btnPostNewRecipe = containerNewRecipe.querySelector('#postBtn');

    btnPostNewRecipe.addEventListener('click', () =>{
      const title = containerNewRecipe.querySelector('#titleRecipe').value;
      const description = containerNewRecipe.querySelector('#description').value;
      const tipeRecipe = containerNewRecipe.querySelector('#tipe-recipe').value;

      postRecipe(title,description,tipeRecipe);
      

    })  


    return containerNewRecipe;
}

