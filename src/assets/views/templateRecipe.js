export  const templateRecipe = () =>{     
  document.getElementById('root').innerHTML='';
   const containerRecipe = document.createElement('div');
   const contentRecipe = `    <div class='bottom-space'>
                        
                         <h1 class='grid-title-create title-recipe'>
                            
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
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <li>4 zanahorias</li>
                            <li>1 brocolí</li>
                            <li>8 bruselas</li>
                            <h3 class="description-recipe"> Preparación </h3>
                          <p class="description-recipe" '></p>
                          </div>
                          


                     
                  
              
                 
                    <footer><a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add2.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>
    `;

    containerRecipe.innerHTML= contentRecipe;


    return containerRecipe;
}

