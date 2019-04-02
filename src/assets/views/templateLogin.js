/* 2.- Crear la plantilla estructural del HTML que representa al Login
   Debemos importar la función login Google 
*/


import { loginGoogle } from './../js/auth.js';

export const templateLogin = () => {
    //creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    const contentLogin = `
        <div class=''>
          <div class='' id="">
            <div id="logo-welcome">
                
            </div>
            <div class="cfield">
                <i class="fas fa-user-alt"></i>
                <input type="email"  placeholder="Correo" name="">
            </div>
            <div class="cfield">
                <i class="fas fa-key"></i>
               <input type="password" placeholder="Contraseña" name="">
            </div>
            <div >
                <button id="sign-in" class="sign-in-style">Iniciar Sesión</button>
            </div>
            
            
            <div id="forgot-container">
                <a href="#/forgot">Olvidaste tu contraseña?</a>
            </div>
            <div >
                    
    
                    <div>
                        <a href="#/login" id="login" class="sign-in-google"> <i class="fab fa-google"></i>&nbsp;Login Google</a>
                    </div>

                    <div>
                        <p id="register">No tienes una cuenta? &nbsp;<a href="#/create">Regístrate Aquí</a></p>
                    </div>

                  
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    //pasar cel contenido al div
    containerLogin.innerHTML = contentLogin;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerLogin.querySelector('#login');
    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {
        loginGoogle();
    })
    return containerLogin;
}


/* export const hello = () => 'hello';

export const add = (x, y) => {
    if(typeof x != 'number' || typeof y != 'number'){
        return null;
    }

    return x + y;
} */
