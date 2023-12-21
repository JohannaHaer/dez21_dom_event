const card = document.getElementsByClassName("card")
// let cardArray = Array.from(card)
console.log(card);

// let firstChild = body.firstElementChild
// let secondChild = body.firstElementChild.nextElementSibling
// let thirdChild = body.firstElementChild.nextElementSibling.nextElementSibling
// let fourthChild = body.lastElementChild.previousElementSibling
// let fivesChild = body.lastElementChild

let changeColor = () => {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener ("click", () => {
            card.style.backgroundColor = "black"
        })
    }
}