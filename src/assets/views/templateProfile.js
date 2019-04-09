import { logOut } from './../js/auth.js';


export const templateProfile = () =>{
  var user = firebase.auth().currentUser;
  var photoURL = user.photoURL;
  var name = user.displayName;                                    


  document.getElementById('root').innerHTML='';
  const containerProfile = document.createElement('div');
  const contentProfile = `
  

                        <div class=''>
                        
                        <div class='row'>
                        <div class='column'>
                        <div class='avatar'>
                        <img class="avatar" src='${photoURL}' alt="avatar" onerror="this.src='assets/Moodboard/girl.png'";>
                        <a href="#/login" id="log-out">Cerrar Sesión </a>  
                        </div>
                        </div>
                        
                        <div class='column'>
                        <div class='user-name'>
                        ${name}
                        <i class="fas fa-cog"></i>
                        </div>
                        <p>Biografía o descripción del perfil del usuario aquí</p>

                        </div>
                        </div>
                        </div>     
                        
                        <div class=''>
                      <div class='row'>
                        <div class='column'>
                          <div class='grid-one'>
                            Some Text in Column One
                          </div>
                        </div>
                        <div class='column'>
                          <div class='grid-two'>
                            Some Text in Column Two
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class=''>
                      <div class='row'>
                        <div class='column'>
                          <div class='grid-one'>
                            Some Text in Column One
                          </div>
                        </div>
                        <div class='column'>
                          <div class='grid-two'>
                            Some Text in Column Two
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='some-page-wrapper'>
                      <div class='row'>
                        <div class='column'>
                          <div class='grid-one'>
                            Some Text in Column One
                          </div>
                        </div>
                        <div class='column'>
                          <div class='grid-two'>
                            Some Text in Column Two
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer>
                    <a href="#/timeline"><img class="timeline" src='assets/Moodboard/home.png'  alt="timeline"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/newrecipe"><img class="newRecipe" src='assets/Moodboard/add.png'  alt="newRecipe"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>

                        
`;

  containerProfile.innerHTML= contentProfile;
  const btnLogOut = containerProfile.querySelector('#log-out');
  
  btnLogOut.addEventListener('click', () =>{
    logOut();
    
    containerProfile.innerHTML ='';
  })
  return containerProfile;
}