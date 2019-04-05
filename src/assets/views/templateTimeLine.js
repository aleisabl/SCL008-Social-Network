import { logOut } from './../js/auth.js';

export const templateTimeLine = () =>{
  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
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
                    <img class="avatar" src='${user.photoURL}' alt="avatar"> 
                    <p font-size="1px">${user.email}</p>      
                    <a href="#/login" id="log-out">Cerrar Sesión </a>        
                        <section class="options">
                            <i class="fas fa-search search-icon"></i>
                         <select>
                            <option>Celíaco</option>
                            <option>Diabético</option>
                        </select>
                    </section>

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
                    <a href="#/home"><img class="home" src='assets/Moodboard/home.png'  alt="home"></a>
                    <a href="#/likes"><img class="like" src='assets/Moodboard/like.png'  alt="like"></a>
                    <a href="#/add"><img class="add" src='assets/Moodboard/add.png'  alt="add"></a>
                    <a href="#/profile"><img class="user" src='assets/Moodboard/user.png'  alt="user"></a>
                    </footer>`;

  containerTimeLine.innerHTML= contentTimeLine;
  const btnLogOut = containerTimeLine.querySelector('#log-out');
  
  btnLogOut.addEventListener('click', () =>{
    logOut();
    
    containerTimeLine.innerHTML ='';
  })
  return containerTimeLine;
  
}



