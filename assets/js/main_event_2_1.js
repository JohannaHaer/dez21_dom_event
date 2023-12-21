let umschalter = document.querySelector("#umschalter").value
let grauTaste = document.querySelector("#grauTaste")
let weissTaste = document.querySelector("#weissTaste")
let blauTaste = document.querySelector("#blauTaste")
let gelbTaste = document.querySelector("#gelbTaste")
let body = document.querySelector("body")

grauTaste.addEventListener ("click", () => {
    body.style.backgroundColor = "gray"
})

weissTaste.addEventListener ("click", () => {
    body.style.backgroundColor = "white"
})

blauTaste.addEventListener ("click", () => {
    body.style.backgroundColor = "blue"
})

gelbTaste.addEventListener ("click", () => {
    body.style.backgroundColor = "yellow"
})



// umschalter.addEventListener("click")