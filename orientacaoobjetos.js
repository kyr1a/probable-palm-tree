function Celular(modelo, fabricante, cor, valor) {
  this.modelo = modelo;
  this.fabricante = fabricante;
  this.cor = cor;
  this.valor = valor;

  this.getValor = function () {
    return this.valor;
  };

  this.setValor = function (valor) {
    if (typeof valor == "number") {
      this.valor = valor;
    }
  };
}

function CelularNovo(modelo, fabricante, cor, ano, valor, garantia) {
  this.ano = ano;
  this.garantia = garantia;

  this.desconto = function () {
    const novoValor = this.getValor() * 0.9;
    this.setValor(novoValor);
  };

  Celular.call(this, modelo, fabricante, cor, valor);
}

function CelularUsado(modelo, fabricante, cor, ano, vidaBateria, valor) {
  this.ano = ano;
  this.vidaBateria = vidaBateria;

  this.desconto = function () {
    const novoValor = this.getValor() * 0.85;
    this.setValor(novoValor);
  };

  Celular.call(this, modelo, fabricante, cor, valor);
}

const celular1 = new CelularNovo(
  "Galaxy S23",
  "Samsung",
  "Preto",
  2023,
  5000,
  "1 ano"
);
const celular2 = new CelularNovo(
  "iPhone 15",
  "Apple",
  "Prata",
  2023,
  7000,
  "1 ano"
);
const celular3 = new CelularUsado(
  "Moto G8",
  "Motorola",
  "Azul",
  2020,
  82,
  1200
);

console.log(celular1);
celular1.desconto();
console.log(celular1.getValor());

console.log(celular2);

console.log(celular3);
celular3.desconto();
console.log(celular3.getValor());
