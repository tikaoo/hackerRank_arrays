function solucao(primeiraLetra, segundaLetra, palavras) {
  //seu codigo aqui
  let nomesComA = [];
  let text = "NENHUMA";

  for (letra of palavras) {
    if (primeiraLetra === letra[0] && segundaLetra === letra[1]) {
      nomesComA.push(letra);
    } 
  }
  if (nomesComA.length === 0) {
    nomesComA = [text];
  }
  for (let i = 0; i < nomesComA.length; i++) {
    console.log(nomesComA[i]);
  }
}

const palavras2 = ["aveia", "manha", "ave"];
let searchResults2 = solucao("m", "a", palavras2);
