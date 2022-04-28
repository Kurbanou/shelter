import pets  from '../../assets/js/pets.js'
import {createSliderSmall}  from '../../assets/js/slider.js'
import {printCard} from '../../assets/js/card.js'
import('../../assets/js/burger.js')

if (pets.length > 0) {
    createSliderSmall()
    const buttons = document.querySelectorAll('.button_paginator')
    if(getRandomInt() > 0){
        pets.reverse()
    }
    printCard(pets)
    const cards = document.querySelectorAll('.pets__slider_card')
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add(`card${i}`)
    }

    buttons.forEach(el =>{
        el.addEventListener('click',  function(){
            if(!el.classList.contains('inactive'))
            printCard(pets)
            const cards = document.querySelectorAll('.pets__slider_card')
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add(`card${i}`)
            }
        })
    })
}

function getRandomInt() {
    return Math.floor(Math.random() * 2);
}