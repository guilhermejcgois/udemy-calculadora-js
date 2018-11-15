var Calculadora = {
  adicionar: function (n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
      return 0;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    
    return n1 + n2;
  },
  dividir: function (n1, n2) {
    return 0;
  },
  multiplicar: function (n1, n2) {
    return 0;
  },
  subtrair: function (n1, n2) {
    return 0;
  }
}

if (module && module.exports) {
  module.exports = Calculadora;
}
