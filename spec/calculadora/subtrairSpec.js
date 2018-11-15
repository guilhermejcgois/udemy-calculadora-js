describe('Suite de testes de subtração', function () {
  var Calculadora = require('../../src/js/calculadora');

  it('deve retornar 5 para os valores 8 e 3', function () {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it('deve retornar 5 para os valores 8 e 3 em formato texto', function () {
    expect(Calculadora.subtrair('8', '3')).toEqual(5);
  });

  it('deve retornar 4 para os valores 5.5 e 1.5', function () {
    expect(Calculadora.subtrair(5.5, 1.5)).toEqual(4);
  });

  it('deve retornar 4 para os valores 5.5 e 1.5 em formato texto', function () {
    expect(Calculadora.subtrair('5.5',' 1.5')).toEqual(4);
  });

  it('deve retornar 0 quando valor 1 não numérico', function () {
    expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
  });

  it('deve retornar 0 quando valor 2 não numérico', function () {
    expect(Calculadora.subtrair(5, undefined)).toEqual(0);
  });
});
