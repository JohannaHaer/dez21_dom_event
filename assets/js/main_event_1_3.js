let changeColor = () => {
    let card = document.getElementsByClassName("card")
    let cardArray = Array.from(card)
    let cardIndex = cardArray.indexOf(event.target)
    cardArray[cardIndex].style.backgroundColor = "black"
    cardArray[cardIndex].style.color = "white"
}