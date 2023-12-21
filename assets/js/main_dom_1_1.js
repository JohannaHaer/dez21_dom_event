
let addList = () => {
    let inputText = document.querySelector("#inputText").value
    let firstChild = document.createElement("li")
    firstChild.textContent = inputText
    let liste = document.querySelector("#liste")
    liste.appendChild(firstChild)
    let inputLeeren = document.querySelector("#inputText")
    inputLeeren.value = ""
}


