/* 1- Crie uma classe para representar carros.
    Os carros possuem uma marcam, uma cor e um gasto médio de combustível por kilometro rodado.
    Crie um método que dado a quantida de quilometros e o preço do combustível nos dê o valor
    asto em reais para realizar ester percurso.
*/

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

const gol = new Carro(`Volkswagen`, `Prata`, 1 / 12);
gol.calcularGastoDePercurso(70, 5);

console.log(gol.calcularGastoDePercurso(70, 5));
const palio = new Carro(`Fiat`, `Preto`, 1 / 10);

console.log(palio.calcularGastoDePercurso(70, 5));
