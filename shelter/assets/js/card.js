import {popupCreate} from '../../assets/js/popup.js'
import pets  from '../../assets/js/pets.js'

export function cardCreate(imG, namE,){
    const container = document.querySelector('.card__container')
    const card = document.createElement('div')
    card.className = 'pets__slider_card'
    container.appendChild(card)
    const image = document.createElement('div')
    image.className = 'card__img'
    image.innerHTML = `<img src='${imG}' alt="pets-foto">`
    card.appendChild(image)
    const name = document.createElement('div')
    name.className = 'pets__name'
    name.innerHTML = namE
    card.appendChild(name)
    const button = document.createElement('div')
    button.className = 'button'
    button.innerHTML = `<span>Learn more</span>`
    card.appendChild(button)
    card.style.opacity = '0'




    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
        return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);

    }, 2);

    // в то время как timePassed идёт от 0 до 2000
    // left изменяет значение от 0px до 400px
    function draw(timePassed) {
        card.style.opacity = timePassed / 1000 ;
    }









    card.addEventListener('click', function(){
        let i = +card.className.slice(-1)
        popupCreate(pets[i])
    })
}

export function printCard(arr) {
    const cards = document.querySelectorAll('.pets__slider_card')
    cards.forEach(el=>{
        el.remove()
    })
    let n = 3 //настраиваем по сколько слайдов прокручивается
    let a = arr.splice(0, n)
    for(let i = 0; i < n; i++){
        arr.push(a[i])
    }
    for (let i = 0; i < 3; i++) {
        cardCreate(arr[i].img, arr[i].name)
    }
}

export function printCardBig(sortArray, pets) {
     for (let i = 0; i < sortArray.length; i++) {
        cardCreate(pets[sortArray[i]].img, pets[sortArray[i]].name)
    }
}