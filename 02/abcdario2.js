function solucao(letra, palavras) {
    let novoArr=[]
    for(let i =0;i<palavras.length;i++){
	    if(!palavras[i][0].includes (letra )){
            novoArr.push(palavras[i])         
    }   
} console.log(novoArr.length)

}
let palavras = ["mamao",
"maca",
"melao",
"melancia",
"laranja"    
  ];    
    let searchResults = solucao("m",palavras);

    