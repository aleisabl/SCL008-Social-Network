import { hello, add } from './../src/assets/views/templateLogin.js';

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
});

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
}); */


/* input nombre y apellido no deben estar vacios
value del input repetir contraseña sea igual a crear contraseña
 */