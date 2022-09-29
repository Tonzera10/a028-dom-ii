function adicionaItem(event) {
    event.preventDefault()

    const main = document.getElementById('container')
    const novoArticle = document.createElement('article');
    novoArticle.classList.add("item")
    novoArticle.onclick = function removeItem(event){
        event.target.remove()
    }
    const novoTexto = document.createTextNode("Olá, Mundo!");
    novoArticle.appendChild(novoTexto)
    main.insertAdjacentElement('beforeend',novoArticle)

}

function removeItem(event){
    event.target.remove()
}