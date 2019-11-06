// Código solto aqui executa na hora que carrega o arquivo

// Função de callback

function validaData(data) {
    var padraoData = /\d{2}\/\d{2}\/\d{4}/
    var listaMatchData = data.match(padraoData)
    return listaMatchData !== null
}

function validaCPF(cpf) {
    var padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    var listaMatchCPF = cpf.match(padraoCPF)
    return listaMatchCPF !== null
}

function cadastro() {
    var nome = $inputNome.value
    var dataNascimento = $inputDataNascimento.value
    var cpf = $inputCPF.value
    var altura = $inputAltura.value
    var peso = $inputPeso.value

    var idade = calculaIdade()

    var dataValida = validaData(dataNascimento)
    var cpfValido = validaCPF(cpf)
    
    var estaValido = dataValida && cpfValido
    
    if(estaValido) {
        // salvar

        // exibir na página
        // Template string
        exibir(`
            Nome: ${ nome }
            <br><br>

            Data Nascimento: ${ dataNascimento }
            <br><br>

            Idade: ${ idade }
            <br><br>

            CPF: ${ cpf }
            <br><br>

            Altura: ${ altura }
            <br><br>

            Peso: ${ peso }
            <br><br>

            <hr>
        `)
    } else {
        alert("Informações inválidas")
    }
}
