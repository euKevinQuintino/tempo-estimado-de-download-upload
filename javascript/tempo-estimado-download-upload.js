//Input
tamanhoArquivo = 1024
velocidadeInternet = 10

//Algoritmo
velocidadeInternet *= 1024/8000
tempoEstimadoInteiro = parseInt((tamanhoArquivo / velocidadeInternet) / 60)
tempoEstimadoDecimal = (tamanhoArquivo / velocidadeInternet) % 60
tempoEstimadoDecimal = parseFloat(tempoEstimadoDecimal.toFixed(0))

//Print
console.log(velocidadeInternet)
console.log(`O tempo estimado de download (ou upload) é de ${tempoEstimadoInteiro} minutos e ${tempoEstimadoDecimal} segundos.`)