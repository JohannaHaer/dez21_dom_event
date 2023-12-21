let choice = document.querySelector("#choice")

let output = document.querySelector("output")

choice.addEventListener ("change", (event) => {
    output.innerHTML = `Sie haben ausgewählt: ${event.target.value} `
})