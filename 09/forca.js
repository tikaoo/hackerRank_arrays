function solucao(palpite, palavra) {
  // seu codigo aqui
  let soma =0

  for(let i =0;i<palavra.length;i++){
    if(palavra[i]=== palpite){
        soma++
        
    }   
  }
  console.log(soma);
  
}
const palavra ="abelha";
let searchResults2 = solucao("a", palavra);
