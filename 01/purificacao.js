
function solucao(stringCorrompida) {
      teste = stringCorrompida.replace(/[^a-zA-Z0-9\s]/g, '')     
     return teste.trim()
 }
