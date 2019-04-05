export const templateProfile = () =>{
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
                          </div>
                        </div>
                      </div>
                    </div>
`;

  containerProfile.innerHTML= contentProfile;
  const btnProfile = containerTimeLine.querySelector('#profile');

  btnProfile.addEventListener('click', () =>{
    return containerProfile;
    
  })
}