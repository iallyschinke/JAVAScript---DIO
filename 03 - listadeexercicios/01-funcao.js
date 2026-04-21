function escrevaMeuNome(nome) {
  return "Meu nome é: " + nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome("Ially") + ", e sou Maior de idade");
  } else {
    console.log(escrevaMeuNome("Ially") + ", e sou Menor de idade");
  }
}

verificarIdade(27);
