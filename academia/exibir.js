function exibir(texto) {
    var $paragrafo = document.createElement("p")

    $paragrafo.innerHTML = texto

    document.body.appendChild($paragrafo)

}