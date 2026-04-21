/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;


*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

const ValorGasto = litrosConsumidos * precoCombustivel;

console.log(ValorGasto.toFixed(2));
