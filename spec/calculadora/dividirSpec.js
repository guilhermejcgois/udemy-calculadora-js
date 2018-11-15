describe('Suite de testes de divisão', function () {
  var Calculadora = require('../../src/js/calculadora');

  it('deve retornar 2 para os valores 6 e 3', function () {
    expect(Calculadora.dividir(6, 3)).toEqual(2);
  });

  it('deve retornar 2 para os valores 6 e 3 no formato texto', function () {
    expect(Calculadora.dividir('6', '3')).toEqual(2);
  });

  it('deve retornar 1.5 para os valores 4.5 e 3', function () {
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
  });

  it('deve retornar erro ao dividir por zero', function () {
    expect(Calculadora.dividir(10, 0)).toEqual('Erro');
    expect(Calculadora.dividir('10', 0)).toEqual('Erro');
  });

  it('deve retornar 0 quando valor 1 não numérico', function () {
    expect(Calculadora.dividir(undefined, 5)).toEqual(0);
  });

  it('deve retornar 0 quando valor 2 não numérico', function () {
    expect(Calculadora.dividir(5, undefined)).toEqual(0);
  });
});
