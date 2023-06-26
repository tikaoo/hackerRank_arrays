function solucao(precos) {
    // seu codigo aqui
  let mDiferenca = precos[0];

    for(let i =0;i<precos.length;i++){
        for(let j = i + 1;j<precos.length;j++){            
             let diferenca = precos[i] - precos[j]  ;              
            if(diferenca>0){
             if(diferenca<mDiferenca){
                mDiferenca =diferenca
             }
            }  
        }
    }
    console.log(mDiferenca)
  }
const precos =[30, 10, 54, 76, 1, 4, 35]
let searchResults2 = solucao(precos);