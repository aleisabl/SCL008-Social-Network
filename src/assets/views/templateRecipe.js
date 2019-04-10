
export  const templateRecipe = () =>{

  document.getElementById('root').innerHTML='';
   const containerRecipe = document.createElement('div');
   const contentRecipe = `    <div class=''>
                        
                         <h1 class='grid-title-create title-recipe'>
                            Verduras Salteadas
                          </h1>
                          <div style="text-align: center;">
                          <image class="image-recipe" src="https://static.vix.com/es/sites/default/files/imj/elgranchef/s/salteado-de-verduras.jpg" >
                          </div>
                          <div>
                          <h3 class="description-recipe">Ingredientes:</h3>
                          <ul class="description-recipe">
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            
                          </div>
                          <h3 class="description-recipe"> Preparación </h3>
                          <p class="description-recipe" >Si estás utilizando algún tipo de zanahorias bien pequeñas solo debes recortar la parte superior
                           y cortarlas a la mitad. Si son zanahorias de tamaño mediano pélalas y córtalas en rodajas gruesas.
                            Corta los repollitos de bruselas a la mitad o en cuartos. Corta el brócoli en trozos.
                          Una vez que las verduras estén cortadas las puedes guardar en una bolsa sellada durante unas 24 horas. 
                          Para cocinarlas coloca mantequilla en un sartén grande o en un wok a fuego medio-alto. 
                          Una vez que se haya derretido agrega las zanahorias, los repollitos y la salvia. Rehoga durante unos 5 minuto
                          s o hasta que las verduras estén doradas. Luego agrega el caldo.
                          Lleva a hervir y cocina a fuego lento durante un par de minutos. Agrega el brócoli y sacude los vegetales durante
                           unos 5 minutos o hasta que estén tiernos. Sazona y sirve.</p>


                     
                  
              
                 
                    <footer><a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add2.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>
    `;

    containerRecipe.innerHTML= contentRecipe;


    return containerRecipe;
}
