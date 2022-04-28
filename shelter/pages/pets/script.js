import pets  from '../../assets/js/pets.js'
import {createSliderBig}  from '../../assets/js/slider.js'
import {printCardBig} from '../../assets/js/card.js'
import('../../assets/js/burger.js')

let randomArray = []

function randomArrayCreate(arrayPets){
    let array = []
    for (let i = 0; i < arrayPets.length; i++){
        array.push(i)
    }

    for (let i = 0; i < 6; i++){
        spliceArray(array)
        randomArray = randomArray.concat(array)
    }
}

function spliceArray(array){
    let n = 1
    let a = array.splice(0, n)
    for(let i = 0; i < n; i++){
        array.push(a[i])
    }
}

if (pets.length > 0) {
    randomArrayCreate(pets)
    if(getRandomInt() > 0){
        randomArray.reverse()
    }
    createSliderBig(randomArray)
    printCardBig(randomArray, pets)
    const cards = document.querySelectorAll('.pets__slider_card')

    for (let i = 0; i < randomArray.length; i++) {
        cards[i].classList.add(`card${randomArray[i]}`)
    }
}


function getRandomInt() {
    return Math.floor(Math.random() * 2);
}