import { createAccount } from './../js/auth.js';

export const templateCreate = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<div class='some-page-wrapper'>
      <div class='row'>
        <div class='column'>
          <div class='blue-column'>
            

            <div>
                <div class="carousel">
                    <ul class="slides">
                        <input type="radio" name="radio-buttons" id="img-1" checked />
                        <li class="slide-container">
                            <div class="slide-image">
                                <img src="assets/Moodboard/prueba.png">
                            </div>
                            <div class="carousel-controls">
                                <label for="img-3" class="prev-slide">
                                    <span>&lsaquo;</span>
                                </label>
                                <label for="img-2" class="next-slide">
                                  <span>&rsaquo;</span>
                                </label>
                            </div>
                        </li>
                        <input type="radio" name="radio-buttons" id="img-2" />
                        <li class="slide-container">
                            <div class="slide-image">
                                <img src="assets/Moodboard/SEGUNDO.png">
                            </div>
                            <div class="carousel-controls">
                                <label for="img-1" class="prev-slide">
                                    <span>&lsaquo;</span>
                                </label>
                                <label for="img-3" class="next-slide">
                                    <span>&rsaquo;</span>
                                </label>
                            </div>
                        </li>
                        <input type="radio" name="radio-buttons" id="img-3" />
                        <li class="slide-container">
                            <div class="slide-image">
                                <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg">
                            </div>
                            <div class="carousel-controls">
                                <label for="img-2" class="prev-slide">
                                    <span>&lsaquo;</span>
                                </label>
                                <label for="img-1" class="next-slide">
                                    <span>&rsaquo;</span>
                                </label>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>




          </div>
        </div>
        <div class='column'>
          <div class='green-column' id="green-columns">
            <div id="logo-welcome" >
                
            </div>
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="text"  placeholder="Nombre y apellido" name="">
            </div>
            
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input id="mail" type="email"  placeholder="Correo" name="">
            </div>
            <div class="cfield">
                <i class="fas fa-key"></i>
               <input type="password" id="pass" placeholder="Contraseña" name="">
            </div>
            <div class="cfield">
                <i class="fas fa-key"></i>
               <input type="password" id="pass-repeat" placeholder="Repetir Contraseña" name="">
            </div>
            <div >
                <button id="create" class="sign-in-style">Crear cuenta</button>
            </div>
          
    
   `;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#create');
    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {
    let pass = containerCreate.querySelector('#pass').value;
    let mail = containerCreate.querySelector('#mail').value;

        createAccount(mail,pass);
    })
    return containerCreate;
}

