// Código solto aqui executa na hora que carrega o arquivo

// Função de callback
function cadastro() {
    var nome = $inputNome.value;
    var dataNascimento = $inputDataNascimento.value;
    var cpf = $inputCPF.value;
    var altura = $inputAltura.value;
    var peso = $inputPeso.value;

    // salvar

    // exibir na página
    // Template string

    exibir(`
        Nome: ${ nome }
        <br><br>

        Data Nascimento: ${ dataNascimento }
        <br><br>

        CPF: ${ cpf }
        <br><br>

        Altura: ${ altura }
        <br><br>

        Peso: ${ peso }
        <br><br>
    `)
}
