export function createSliderSmall(){
    const section = document.createElement('section')
    section.classList.add('pets')
    section.id = 'pets'
    document.querySelector('.about').after(section)
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    section.append(wrapper)
    const inner = document.createElement('div')
    inner.classList.add('pets__inner')
    wrapper.append(inner)
    const title = document.createElement('h3')
    title.innerHTML = `Our friends who <br> are looking for a house`
    inner.appendChild(title)
    const slider = document.createElement('div')
    slider.classList.add('pets__slider')
    inner.appendChild(slider)
    const buttonLeft = document.createElement('div')
    buttonLeft.classList.add('button_paginator', 'left')
    buttonLeft.innerHTML = '&#129044;'
    slider.appendChild(buttonLeft)
    const overflowSlider =document.createElement('div')
    overflowSlider.classList.add('slider__inner')
    slider.appendChild(overflowSlider)
    const container = document.createElement('div')
    container.classList.add('card__container')//  сюда складывать карточки
    overflowSlider.appendChild(container)
    const buttonRight = document.createElement('div')
    buttonRight.classList.add('button_paginator')
    buttonRight.innerHTML = '&#129046;'
    slider.appendChild(buttonRight)
    const buttonPrimary = document.createElement('div')
    buttonPrimary.classList.add('button', 'primary')
    buttonPrimary.innerHTML = `<a href="../../pages/pets/index.html"  >Get to know the rest</a>`
    inner.appendChild(buttonPrimary)
}

export function createSliderBig(array){
    let n = 1
    let nMax
    let position = 0
    const section = document.createElement('section')
    section.classList.add('pet')
    document.querySelector('main').append(section)
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    section.append(wrapper)
    const inner = document.createElement('div')
    inner.classList.add('pet__inner')
    wrapper.append(inner)
    const title = document.createElement('h3')
    title.innerHTML = `Our friends who <br> are looking for a house`
    inner.appendChild(title)
    const slider = document.createElement('div')
    slider.classList.add('pet__slider')
    inner.appendChild(slider)
    const overflowSlider =document.createElement('div')
    overflowSlider.className = 'slider__inner big'
    slider.appendChild(overflowSlider)
    const container = document.createElement('div')
    container.classList.add('card__container', 'big')//  сюда складывать карточки
    overflowSlider.appendChild(container)
    const navigation = document.createElement('div')
    navigation.className = 'slider__navigation'
    inner.appendChild(navigation)
    const buttonStart = document.createElement('div')
    buttonStart.className = 'button_paginator inactive start'
    buttonStart.innerHTML = '&#60;&#60;'
    navigation.appendChild(buttonStart)
    const buttonLeft = document.createElement('div')
    buttonLeft.className = 'button_paginator inactive left'
    buttonLeft.innerHTML = '&#60;'
    navigation.appendChild(buttonLeft)
    const buttonNum = document.createElement('div')
    buttonNum.className = 'button_paginator active'
    buttonNum.innerHTML = `${n}`
    navigation.appendChild(buttonNum)
    const buttonRight = document.createElement('div')
    buttonRight.className = 'button_paginator  right'
    buttonRight.innerHTML = '&#62;'
    navigation.appendChild(buttonRight)
    const buttonEnd = document.createElement('div')
    buttonEnd.className = 'button_paginator  end'
    buttonEnd.innerHTML = '&#62;&#62;'
    navigation.appendChild(buttonEnd)
    const a = getComputedStyle(overflowSlider)//ширина контейнера слайдера
    const width = (+a.width.slice(0, -2) + 40)
    let heightContainer = +getComputedStyle(container).height.slice(0,-2)
    let widthContainer = +getComputedStyle(overflowSlider).width.slice(0,-2)
    nMaxCalckN ()
    buttonCheck()
    buttonRight.addEventListener('click', function(){

        if (buttonRight.className == 'button_paginator right'){
            n += 1
            buttonNum.innerHTML = `${n}`
            position -= width
            container.style.marginLeft = (position) + 'px'
        }
        buttonCheck()
    })

    buttonLeft.addEventListener('click', function(){

        if (buttonLeft.className == 'button_paginator left') {
            n -= 1
            buttonNum.innerHTML = `${n}`
            position += width
            container.style.marginLeft = (position) + 'px'
        }
        buttonCheck()
    })

    buttonEnd.addEventListener('click', function(){
        if (buttonEnd.className == 'button_paginator end') {
            n = nMax
            buttonNum.innerHTML = `${n}`
            position = -width * (nMax-1)
            container.style.marginLeft = (position) + 'px'
        }
        buttonCheck()
    })

    buttonStart.addEventListener('click', function(){
        if (buttonStart.className == 'button_paginator start') {
            n = 1
            buttonNum.innerHTML = `${n}`
            position = 0
            container.style.marginLeft = (position) + 'px'
        }
        buttonCheck()
    })

    function buttonCheck(){
        if (n == 1) {
            buttonRight.className = 'button_paginator right'
            buttonEnd.className = 'button_paginator end'
            buttonLeft.className = 'button_paginator inactive left'
            buttonStart.className = 'button_paginator inactive start'
        }
        else if (n >1 && n < nMax){
            buttonRight.className = 'button_paginator right'
            buttonEnd.className = 'button_paginator end'
            buttonLeft.className = 'button_paginator left'
            buttonStart.className = 'button_paginator start'
        }
        else if (n == nMax){
            buttonRight.className = 'button_paginator inactive right'
            buttonEnd.className = 'button_paginator inactive end'
            buttonLeft.className = 'button_paginator left'
            buttonStart.className = 'button_paginator start'
        }
    }

    function nMaxCalckN (){

       nMax = Math.ceil(array.length / (heightContainer * widthContainer / (270 * 435)))
    }
}


