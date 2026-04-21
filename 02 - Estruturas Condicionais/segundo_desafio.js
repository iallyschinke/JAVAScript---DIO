/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
    1 - preço do Etanol;
    2 - preço do gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem; */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = `Gasolina`;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === `Etanol`) {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
