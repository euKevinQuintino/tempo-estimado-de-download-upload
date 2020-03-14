tamanhoArquivo = float(input("Digite o tamanho do arquivo(em MB): "))
velocidadeInternet = float(input("Digite a velocidade de download ou upload (em Mbps): "))

velocidadeInternet *= 1024 / 8000
tempoEstimadoInteiro = (tamanhoArquivo / velocidadeInternet) // 60
tempoEstimadoDecimal = (tamanhoArquivo / velocidadeInternet) % 60


print('O tempo estimado para o download (ou upload) é de {:.0f} minutos e {:.0f} segundos.'.format(tempoEstimadoInteiro, tempoEstimadoDecimal))
