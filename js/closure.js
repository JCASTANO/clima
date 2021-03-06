// -- Closures
// Es una forma de tener variables encapsuladas dentro de una funciÃ³n
// y que no son accesibles desde fuera, a menos que sean devueltas a travÃ©s
// de una funciÃ³n interna

function f() {
  var b = "b";
  return function() {
    return b;
  }
}

// b - undefined
// var n = f();
// n(); -> "b";

// Ejemplo prÃ¡ctico
function aumentarFuente(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size30 = aumentarFuente(30);
var size50 = aumentarFuente(50);
var size80 = aumentarFuente(80);

// Otro ejemplo con mÃ©todos privados
var Contador = (function() {

  var _contadorPrivado = 0;

  function cambiarValor(valor) {
    _contadorPrivado += valor;
  };

  return {
    incrementar: function() {
      cambiarValor(1);
    },
    decrementar: function() {
      cambiarValor(-1);
    },
    valor: function() {
      return _contadorPrivado;
    }
  };

})();

//Contador.valor()--> 0