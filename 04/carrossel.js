function solucao(sequencia) {
  //seu codigo aqui
  let somaSequencia = 0;

  for (item of sequencia) {
    if (item === ">") {
      somaSequencia++;
    } else {
      somaSequencia --;
    } 
    if (somaSequencia < 0) {
      somaSequencia = 6;
    }else if (somaSequencia > 6) {
      somaSequencia =0
    }
  }
  console.log(somaSequencia);
}
const sequencia = [">", ">", ">", "<", ">"];
let searchResults = solucao(sequencia);

const sequencia2 = ["<","<",'>'];
let searchResults2 = solucao(sequencia2);

const sequencia3 = [">", ">", ">", ">", ">", ">", ">", ">", ">"];
let searchResults3 = solucao(sequencia3);
