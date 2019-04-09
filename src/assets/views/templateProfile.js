import { logOut } from './../js/auth.js';
import { showRecipeProfile, showInfoUser } from './../js/posts.js';


export const templateProfile = () =>{
  let user = firebase.auth().currentUser;
  const info = showInfoUser();

  console.log(info);
  let photo = info[0].photoUser;
  let name = info[0].fullnameUser;


  document.getElementById('root').innerHTML='';
  const containerProfile = document.createElement('div');
  const contentProfile = `
  

                        <div class=''>
                        
                        <div class='row'>
                        <div class='column'>
                        <div class='avatar'>
                        <img class="avatar" src='${photo}' alt="avatar">

                        <a href="#/login"  id="log-out">Cerrar Sesión </a>  
                        </div>
                        </div>
                        
                        <div class='column'>
                        <div class='user-name'>${name}
                        <i class="fas fa-cog"></i>
                        </div>
                        <p>Biografía o descripción del perfil del usuario aquí</p>

                        </div>
                        </div>
                        </div>     
                        
                        <div class='grid' id="grid" >
                      
                        </div>
                    <footer>
                    <a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="timeline"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add2.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>

                        
`;

  containerProfile.innerHTML= contentProfile;
  const btnLogOut = containerProfile.querySelector('#log-out');

  let posts = showRecipeProfile();
  let text = '';
  let containerPost = containerProfile.querySelector('#grid');
  
  posts.forEach(function(element){
   
    text += `             <div>
                          <div  class='grid-one'>
                            <p>${element.titleRecipe}</p>
                            <p>${element.recipe}</p>
                            <p>apto para:${element.tipe}</p>
                            <p>Subido por ${element.username}</p>
                          </div> 
                          </div>`;

  });
  containerPost.innerHTML= text;
  
  btnLogOut.addEventListener('click', () =>{
    logOut();
    
    containerProfile.innerHTML ='';
  })
  return containerProfile;
}