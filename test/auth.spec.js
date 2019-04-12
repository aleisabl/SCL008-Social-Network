/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */

import { verifyFullName, verifyPass, verifyEmail, verifyRecipe, verifyTitle, verifyPassLength, verifyPassStrong } from './../src/assets/js/auth.js';

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

describe('verifyPassStrong', () => {

    it('si la contraseña tiene un punto retorna true', () => {
        expect(verifyPassStrong('aaaaa.aaa')).toBe(true);
    });

    it('si las contraseñas no tiene punto retorna false', () => {
        expect(verifyPassStrong('aaaaaa')).toBe(false);
    });

});

describe('verifyPassLength', () => {

    it('si pass.length es menor a 6, retorna false', () => {
        expect(verifyPassLength('12345')).toBe(false);
    });

    it('si pass.length es mayor a 6, retorna true', () => {
        expect(verifyPassLength('123456')).toBe(true);
    });

}) 

describe('verifyEmail', () => {

    it('si el correo cumple con la expresión regular, retorna true', () => {
        expect(verifyEmail('aleisabl.25@gmail.com')).toBe(true);
    });

    it('si el correo no cumple con la expresión regular, retorna false', () => {
        expect(verifyEmail('aleisabl.25gmail.com')).toBe(false);
    });

}) 

describe('verifyTitle', () => {

    it('si title.length es menor a 3, retorna false', () => {
        expect(verifyTitle('h')).toBe(false);
    });

    it('si title.length es mayor a 3, retorna true', () => {
        expect(verifyTitle('Pan con queso')).toBe(true);
    });

}) 

describe('verifyRecipe', () => {

    it('si receta.length es mayor a 100, retorna false', () => {
        expect(verifyRecipe('hola estos son mas de 100 caracteres es para ver si funciona el test..................................gatitos')).toBe(false);
    });

    it('si receta.length es menor a 100, retorna true', () => {
        expect(verifyRecipe('')).toBe(true);
    });

}) 




