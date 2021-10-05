"use strict"

const imagens = [
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
    container.append(novoLink)
}

//ForEach não retorna um array novo
const carregarGaleria = (imgs) => imgs.forEach(criarItem)


carregarGaleria(imagens)



