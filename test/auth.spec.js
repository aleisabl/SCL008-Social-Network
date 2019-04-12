/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */


import { verifyFullName, verifyPass, verifyEmail, verifyRecipe, verifyTitle, verifyPassLength, verifyPassStrong } from './../src/assets/js/auth.js';


//Test que verifica que se ingresa el nombre

describe('verifyFullName', () => {

    it('si no ha ingresado su nombre y apellido, retorna false y un alert que debe ingresar sus datos', () => {
        expect(verifyFullName('')).toBe(false);
    });

    it('si ha ingresado su nombre y apellido, retorna true', () => {
        expect(verifyRecipe('fulanita pepito')).toBe(true);
    });

}) 

//Test que verifica que las dos contraseñas coincidan
describe('verifyPass', () => {

    it('si las contraseñas coinciden, retorna true', () => {
        expect(verifyPass(123456, 123456)).toBe(true);
    });

    it('si las contraseñas no coinciden, retorna false', () => {
        expect(verifyPass(123456, 12345678)).toBe(false);
    });

});


//Test que verifica que la contraseña tenga un punto adentro para que sea más fuerte

describe('verifyPassStrong', () => {

    it('si la contraseña tiene un punto retorna true', () => {
        expect(verifyPassStrong('aaaaa.aaa')).toBe(true);
    });

    it('si las contraseñas no tiene punto retorna false', () => {
        expect(verifyPassStrong('aaaaaa')).toBe(false);
    });

});

//Test que verifica que la contraseña sea igual o mayor a 6 carácteres
describe('verifyPassLength', () => {

    it('si pass.length es menor a 6, retorna false', () => {
        expect(verifyPassLength('12345')).toBe(false);
    });

    it('si pass.length es mayor a 6, retorna true', () => {
        expect(verifyPassLength('123456')).toBe(true);
    });

}) 

//Test que verifica que el correo contenga su arroba
describe('verifyEmail', () => {

    it('si el correo cumple con la expresión regular, retorna true', () => {
        expect(verifyEmail('aleisabl.25@gmail.com')).toBe(true);
    });

    it('si el correo no cumple con la expresión regular, retorna false', () => {

describe('verifyRecipe', () => {

    it('si la receta.length es mayor a 100, retorna false', () => {
        expect(verifyRecipe('nnnnnnnnnnnnnnnnnnnnhola esto es para ver si funciona el testnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')).toBe(false);
    });

    it('si la receta.length es menor a 100, retorna true', () => {

//Test que verifica que el título tenga por lo menos 3 carácteres
describe('verifyTitle', () => {

    it('si title.length es menor a 3, retorna false', () => {
        expect(verifyTitle('h')).toBe(false);
    });

    it('si title.length es mayor a 3, retorna true', () => {
        expect(verifyTitle('Pan con queso')).toBe(true);
    });

}) 

//Test que verifica que la receta no sea mayor a 100 carácteres
describe('verifyRecipe', () => {

    it('si receta.length es mayor a 100, retorna false', () => {
        expect(verifyRecipe('hola estos son mas de 100 caracteres es para ver si funciona el test..................................gatitos')).toBe(false);
    });

    it('si receta.length es menor a 100, retorna true', () => {

        expect(verifyRecipe('')).toBe(true);
    });

}) 

