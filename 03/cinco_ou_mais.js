function solucao(precos) {
  let soma = 0;
  let preco = 0;
  let teste = Math.min(...precos);
  for (let i = 0; i < precos.length; i++) {
    if (precos.length < 5) {
      soma = (preco += precos[i]) ;
    } else{
      soma = (preco += precos[i]) - teste
    }
  }
  console.log(soma);
}
let precos = [100, 500, 100, 200, 50];
let precos2 = [100, 100, 100, 50];

let searchResults = solucao(precos);
let searchResults2 = solucao(precos2);
