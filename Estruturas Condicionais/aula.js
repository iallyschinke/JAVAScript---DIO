/* um = ele é pra atribuição

    dois == também é pra igual 

    e === é o que mais se utiliza no JavaScript*/

const numero = 0;

const numeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0) {
  console.log("O numero é invalido");
} else if (numeroDivisivelPor5) {
  console.log("sim");
} else {
  console.log("Não");
}
