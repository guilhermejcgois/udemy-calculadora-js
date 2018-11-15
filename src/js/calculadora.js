var Calculadora = {
  ADICAO: '+',
  SUBTRACAO: '-',
  DIVISAO: '/',
  MULTIPLICACAO: '*',

  adicionar: function (n1, n2) {
    return Calculadora.calcular(n1, n2, Calculadora.ADICAO);
  },
  dividir: function (n1, n2) {
    if (n2 == 0) {
      return 'Erro';
    }

    return Calculadora.calcular(n1, n2, Calculadora.DIVISAO);
  },
  multiplicar: function (n1, n2) {
    return Calculadora.calcular(n1, n2, Calculadora.MULTIPLICACAO);
  },
  subtrair: function (n1, n2) {
    return Calculadora.calcular(n1, n2, Calculadora.SUBTRACAO);
  },
  calcular: function (n1, n2, op) {
    var resultado = 0;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (isNaN(n1) || isNaN(n2)) {
      return 0;
    }

    switch (op) {
      case Calculadora.ADICAO:
        resultado = n1 + n2;
        break;
      case Calculadora.SUBTRACAO:
        resultado = n1 - n2;
        break;
      case Calculadora.DIVISAO:
        resultado = n1 / n2;
        break;
      case Calculadora.MULTIPLICACAO:
        resultado = n1 * n2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }
}

if (module && module.exports) {
  module.exports = Calculadora;
}
