/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */

import { verifyPass, verifyEmail } from './../src/assets/js/auth.js';

describe('verifyPass', () => {

    it('si las contraseñas coinciden, retorna true', () => {
        expect(verifyPass(123456, 123456)).toBe(true);
    });

    it('si las contraseñas no coinciden, retorna false', () => {
        expect(verifyPass(123456, 12345678)).toBe(false);
    });

});

/*Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/

describe('verifyEmail', () => {

    it('si el correo cumple con la regla, retorna true', () => {
        expect(verifyEmail('aleisabl.25@gmail.com')).toBe(true);
    });

    it('si el correo no cumple con la regla, retorna false', () => {
        expect(verifyEmail('aleisabl.25gmail.com')).toBe(false);
    });

}) 