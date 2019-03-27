import { createAccount } from './../js/auth.js';

export const templateCreate = () => {
    //creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    const contentCreate = `<p>Crear cuenta</p>
                          <button id="create"> Crear cuenta </button>`;

    //pasar cel contenido al div
    containerCreate.innerHTML = contentCreate;
    //le pido que busque el id del botón dentro del div cerrado
    const btn = containerCreate.querySelector('#create');
    //evento del botón que llama a la autentificación de Google
    btn.addEventListener('click', () => {
        console.log(createAccount());
    })
    return containerCreate;
}