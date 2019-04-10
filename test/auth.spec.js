/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */

import { verifyFullName, verifyPass, verifyEmail, verifyRecipe } from './../src/assets/js/auth.js';

describe('verifyFullName', () => {

    it('si no ha ingresado su nombre y apellido, retorna false y un alert que debe ingresar sus datos', () => {
        expect(verifyFullName('')).toBe(false);
    });

    it('si ha ingresado su nombre y apellido, retorna true', () => {
        expect(verifyRecipe('fulanita pepito')).toBe(true);
    });

}) 

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

describe('verifyRecipe', () => {

    it('si la receta.length es mayor a 100, retorna false', () => {
        expect(verifyRecipe('nnnnnnnnnnnnnnnnnnnnhola esto es para ver si funciona el testnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')).toBe(false);
    });

    it('si la receta.length es menor a 100, retorna true', () => {
        expect(verifyRecipe('')).toBe(true);
    });

}) 

