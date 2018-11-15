describe('Suite de testes de adição', function () {
  var Calculadora = require('../../src/js/calculadora');

  it('deve retornar 5 para os valores 2 e 3', function () {
    expect(Calculadora.adicionar(2, 3)).toEqual(5);
  });

  it('deve retornar 6 para os valores 9 e -3', function () {
    expect(Calculadora.adicionar(9, -3)).toEqual(6);
  });

  it('deve retornar 4.5 para os valores 3 e 1.5', function () {
    expect(Calculadora.adicionar(3, 1.5)).toEqual(4.5);
  });

  it('deve retornar 0 quando valor 1 não numérico', function () {
    expect(Calculadora.adicionar(undefined, 5)).toEqual(0);
  });

  it('deve retornar 0 quando valor 2 não numérico', function () {
    expect(Calculadora.adicionar(5, undefined)).toEqual(0);
  });
});
