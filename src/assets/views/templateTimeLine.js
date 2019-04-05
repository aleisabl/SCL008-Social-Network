import { logOut } from './../js/auth.js';



export const templateTimeLine = () =>{
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
                    <footer> <i onclick="window.location.href='#/newrecipe'" class="fas fa-plus-square"></i>
                    <a href="#/login" id="log-out">Cerrar Sesión </a></footer>`;

  containerTimeLine.innerHTML= contentTimeLine;
  const btnLogOut = containerTimeLine.querySelector('#log-out');

  btnLogOut.addEventListener('click', () =>{
    logOut();
    
    containerTimeLine.innerHTML ='';
  })
  return containerTimeLine;


}


