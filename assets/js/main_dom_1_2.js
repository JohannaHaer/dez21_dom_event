let counter = 1
let myFunction = () => {
    let bgColorChange = document.getElementsByClassName('example')

    for(let i = 0; i < bgColorChange.length; i++) {
        
        if (counter % 2 == 0) {
            bgColorChange[i].style.backgroundColor = 'black'
            bgColorChange[i].style.color = 'white'
        } else {
            bgColorChange[i].style.backgroundColor = ''
            bgColorChange[i].style.Color = ''
        }
    }
    counter += 1
}

