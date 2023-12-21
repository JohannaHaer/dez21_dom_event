let buttons = document.querySelector(".unten")
let buttonsChildren = buttons.children
let buttonsArray = Array.from(buttonsChildren)
let liste = document.querySelector("#myList")
let listeChildren = liste.children
let listeArray = Array.from(listeChildren)

let firstButton = buttons.firstElementChild
let secondButton = buttons.firstElementChild.nextElementSibling.nextElementSibling
let thirdButton = buttons.lastElementChild.previousElementSibling.previousElementSibling
let fourthButton = buttons.lastElementChild

let firstChild = liste.firstElementChild
let lastChild = liste.lastElementChild
let firstSibling = liste.firstElementChild.nextElementSibling
let previousSibling = liste.lastElementChild.previousElementSibling

let output = document.querySelector("output")

firstButton.addEventListener ("click", () => {
    output.textContent = firstChild.innerHTML
})

secondButton.addEventListener ("click", () => {
    output.textContent = lastChild.innerHTML
})

thirdButton.addEventListener ("click", () => {
    output.textContent = firstSibling.innerHTML
})

fourthButton.addEventListener ("click", () => {
    output.textContent = previousSibling.innerHTML
})


