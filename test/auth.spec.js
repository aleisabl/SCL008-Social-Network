/* tests de la función de registro haciendo una nueva función 'verifyPass' para 
comprobar que el usuario ingresa la misma contraseña en ambos campos
 */

import { verifyPass } from './../src/assets/js/auth.js';

describe('verifyPass', () => {

    it('si las contraseñas coinciden, retorna true', () => {
        expect(verifyPass(123456, 123456)).toBe(true);
    });

    it('si las contraseñas no coinciden, retorna false', () => {
        expect(verifyPass(123456, 12345678)).toEqual(false);
    });

});

/* import { hello, add } from './../src/assets/views/templateLogin.js';

describe('hello', () => {
    it('should outpout hello', () => {
        expect(hello()).toBe('hello')
    });
});


describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1,2)).toBe(3);
        expect(add(2,2)).toBe(4);
        expect(add(12,2)).toBe(14);
        expect(add(-2,2)).toBe(0);
        expect(add(-2,-2)).toBe(-4);
    });
    it('should not add strings', () => {
        expect(add(2, '2')).toBe(null);
    });
    it('should not add objects', () => {
        expect(add(2, {})).toBe(null);
    });
    it('should not add arrays', () => {
        expect(add(2, [])).toBe(null);
    });
});  */

/* import { createAccount } from './../src/assets/js/auth.js';

describe('createAccount', () => {
   it('should return is a function', () => {
       expect(createAccount()).toBeA('function')
   });
});

describe('createAccount', () => {
   it('should return cuenta creada OK', () => {
       expect(createAccount('aleisabl.25@gmail.com',123456789)).toBe('cuenta creada OK');
   });
});
*/

 //toBeGreaterThan espera que la funcion o variable dada tenga esa longitud o más
/*
 describe('verifyPass', () => {
    it('si las contraseñas coinciden, ejecuta createAccount" ', () => {
        expect(verifyPass(pass)).toEqual(passRepeat);
    });

});  */
