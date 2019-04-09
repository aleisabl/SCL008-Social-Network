/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */

import { verifyPass } from './../src/assets/js/auth.js';

import { verifyUser } from './../src/assets/js/auth.js'; 

describe('verifyPass', () => {

    it('si las contraseñas coinciden, retorna true', () => {
        expect(verifyPass(123456, 123456)).toBe(true);
    });

    it('si las contraseñas no coinciden, retorna false', () => {
        expect(verifyPass(123456, 12345678)).toEqual(false);
    });

});
 
describe('verifyUser', () => {

    it('', () => {
        expect(verifyUser()).toBe(false);
    });

    it('', () => {
        expect(verifyUser()).toBe(false);
    });

});
 
import { verifImage } from './../src/assets/views/templateProfile'; 

describe('verifImage', () => {

    it('si la imagen carga correctamente, return true', () => {
        expect(verifImage()).toBe(true);
    });

    it('si la imagen no carga correctamente, return false', () => {
        expect(verifImage()).toEqual(false);
    });

});
 