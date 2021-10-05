"use strict"

const imagens = [
    "https://disneyplusbrasil.com.br/wp-content/uploads/2021/08/Miles-Morales.jpg",
    "./img/miles-capuz-1.jpg",
    "./img/miles-capuz-2.jpg",
    "./img/miles-de-costas.jpg",
    "./img/miles-morales.jpg",
    "./img/miles-salve.jpg",
    "./img/multiverse.jpg",
    "./img/no-way-home.jpg",
    "./img/peter-parker.jpg"
]

const filtrarId = (urlImagem) => {
    const ultimaBarra = urlImagem.lastIndexOf("/") + 1
    const ultimoPonto = urlImagem.lastIndexOf(".")
    const url = urlImagem.substring(ultimaBarra, ultimoPonto)
    return url
}

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${filtrarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const criarSlide = (urlImagem, indice, array) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = filtrarId(urlImagem)

    const indiceAnterior = indice == 0 ? array.length - 1 : indice - 1
    const slideAnterior = filtrarId(array[indiceAnterior])
    
    const indiceSeguinte = indice == array.length -1 ? 0 : indice + 1
    const slideSeguinte = filtrarId(array[indiceSeguinte])

    novaDiv.innerHTML = `
    <div class="imagem-container">
        <a href="" class="fechar">&#10006;</a>
        <a href="#${slideAnterior}" class="navegacao anterior">&#171;</a>
        <img src="${urlImagem}" alt="">
        <a href="#${slideSeguinte}" class="navegacao proximo">&#187;</a>
    </div>`

container.appendChild(novaDiv)

}

//ForEach não retorna um array novo
const carregarGaleria = (imgs) => imgs.forEach(criarItem)
const carregarSlide = (imgs) => imgs.forEach(criarSlide)


carregarGaleria(imagens)
carregarSlide(imagens)








