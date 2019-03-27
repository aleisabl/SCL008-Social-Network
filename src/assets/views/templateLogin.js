/* 2.- Crear la plantilla estructural del HTML que representa al Login
   Debemos importar la función login Google 
*/


import { loginGoogle } from './../js/auth.js';

export const templateLogin = () => {
    //creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    const contentLogin = `<p>Login con Google</p>
                          <button id="login"> Loguealo </button>`;

    //pasar cel contenido al div
    containerLogin.innerHTML = contentLogin;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerLogin.querySelector('#login');
    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {
        console.log(loginGoogle());
    })
    return containerLogin;
}