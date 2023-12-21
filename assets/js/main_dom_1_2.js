let myFunction = () => {
    let bgColorChange = document.getElementsByClassName('example')

    for(let i = 0; i < bgColorChange.length; i++) {
        bgColorChange[i].style.backgroundColor = 'black'
        bgColorChange[i].style.color = 'white'
}

}