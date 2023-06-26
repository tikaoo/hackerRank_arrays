function solucao(disparos) {
	//seu codigo aqui
    let aux =[];
    
    for(let i =0;i<disparos.length;i++){
       if(disparos[i]>70){
         aux.push(disparos[i])
       }
    }
    if(aux.length <3){
        console.log("ELIMINADO")
    }else{
        console.log(aux.length)
    }    
}

const disparos = [0, 10, 50, 70, 80, 30,];
const disparos2 = [0, 50, 90, 80, 100, 80, 40]
let searchResults = solucao(disparos);
let searchResults2 = solucao(disparos2);
