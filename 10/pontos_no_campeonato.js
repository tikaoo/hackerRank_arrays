function solucao(resultados) {
	//seu codigo aqui
    let soma =0

    for(let i =0;i<resultados.length;i++){
        if(resultados[i]==="V"){
            soma+=3
        }else if(resultados[i]==="E"){
            soma +=1
        }else{
            soma+=0
        }
    }
    console.log(soma)
    

}
const resultados = ["E", "V", "E", "V","D"];
const resultados2 = ["E", "V", "E", "V","E", "V", "E", "V"]
let searchResults = solucao(resultados);
let searchResults2 = solucao(resultados2);