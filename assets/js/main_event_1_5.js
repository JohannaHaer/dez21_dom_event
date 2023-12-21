let clickMe = document.getElementById("clickMe")

let counter = 0


clickMe.addEventListener ("click", () => {
    counter += 1
    clickMe.innerHTML = `Click me: ${counter}`
})