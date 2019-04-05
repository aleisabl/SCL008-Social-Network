import { logOut } from './../js/auth.js';


export const templateProfile = () =>{
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;


  document.getElementById('root').innerHTML='';
  const containerProfile = document.createElement('div');
  const contentProfile = `
                        <div class=''>
                      <div class='row'>
                        <div class='column'>
                          <div class='logo'>
                            
                          </div>
                        </div>
                        <div class='column'>
                          <div>                           
                            ${user.displayName}
                            <img class="avatar" src='${user.photoURL}' alt="avatar"> 
                            <p font-size="1px">${user.email}</p>
                            <a href="#/login" id="log-out">Cerrar Sesión </a>    
                          </div>
                        </div>
                      </div>
                    </div>
`;

  containerProfile.innerHTML= contentProfile;
  const btnLogOut = containerProfile.querySelector('#log-out');
  
  btnLogOut.addEventListener('click', () =>{
    logOut();
    
    containerProfile.innerHTML ='';
  })
  return containerProfile;
}