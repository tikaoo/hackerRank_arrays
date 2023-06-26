function solucao(notas) {
	//seu codigo aqui
   notas.sort((a,b) => a-b);
   notas.pop()
   notas.shift()
   
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length;  
    console.log(media)
}

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
//const notas2 = [100,100, 50]
let searchResults = solucao(notas);
//let searchResults2 = solucao(notas2.sort());