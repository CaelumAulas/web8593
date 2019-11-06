// Código solto aqui executa na hora que carrega o arquivo

// Função de callback

function validaData(data) {
    var padraoData = /\d{2}\/\d{2}\/\d{4}/
    var listaMatchData = data.match(padraoData)
    return listaMatchData !== null
}

// Fábrica de datas
// Factory Function
// Função Factory
function extraiData(data) {
    var padraoData = /(\d{2})\/(\d{2})\/(\d{4})/
    var listaMatchData = data.match(padraoData)
    
    if(listaMatchData === null) {
        return null
    }

    var dia = listaMatchData[1]
    var mes = listaMatchData[2]
    var ano = listaMatchData[3]

    // Objeto Literal
    return {
        "dia": dia, 
        "mes": mes,
        "ano":  ano
    }
}

function validaCPF(cpf) {
    var padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    var listaMatchCPF = cpf.match(padraoCPF)
    return listaMatchCPF !== null
}

// Função factory
function criaFicha(nome, dataNascimento, cpf, altura, peso) {
    var ficha = {
        "nome": nome,
        "dataNascimento": dataNascimento,
        "cpf": cpf,
        "altura": altura,
        "peso": peso,
        toString: function () {
            // this é qualquer coisa
            // Não depende do código que você escreve
            // return JSON.stringify(this)
            
            return JSON.stringify(ficha)
        }
    }

    return ficha
}

function cadastro() {
    var nome = $inputNome.value
    var dataNascimento = $inputDataNascimento.value
    var cpf = $inputCPF.value
    var altura = $inputAltura.value
    var peso = $inputPeso.value

    var data = extraiData(dataNascimento)

    var dataValida = data !== null 
    var cpfValido = validaCPF(cpf)
    
    var estaValido = dataValida && cpfValido
    
    if(estaValido) {
        var dia = data.dia
        var mes = data.mes
        var ano = data.ano
        var idade = calculaIdade(dia, mes, ano)

        var ficha = criaFicha(nome, dataNascimento, cpf, altura, peso)
        
        // salvar
        localStorage.setItem("ficha", ficha)


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
