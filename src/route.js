import { templateLogin } from './assets/views/templateLogin.js'

import { templateCreate } from './assets/views/templateCreate.js'

/*  crear una función que reciba el hash # y según la coincidencia retorne otra función que va 
    a imprimir el template en nuestro HTML 
*/

const changeRouter = (hash) => {
    if (hash === '#/login') {
        return showTemplate(hash);
    }

    if (hash === '#/create') {
        return showTemplate(hash);
    }
}

// imprimirá el template en el HTML
const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    //hacemos el match del hash utilizado y el template que quiero msotrar

    switch (router) {
        case 'login':
            containerRoot.appendChild(templateLogin());
            break;
        case 'create':
            containerRoot.appendChild(templateCreate());
            break;
        default:
            containerRoot.innerHTML = '<p>Error 404</p>'
    }
}

/*  inicializamos el tema de las rutas para que se ejecute nuestra función changeRouter()
    y en su defecto showTemplate() 
 */

export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));

    const containerRoot = document.getElementById('root');
    containerRoot.appendChild(templateLogin());

    //reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter

    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash)
        }
    }
}

