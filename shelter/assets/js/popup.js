export function popupCreate(obj){
    document.body.classList.add('lock')
    const closePopup = () => {
        popup.remove()
        document.body.classList.remove('lock')
    }
    const popup = document.createElement('div')
    popup.className = 'popup'
    const footer = document.querySelector('footer')
    footer.after(popup)
    const wrapper = document.createElement('div')
    wrapper.className = 'popup__wrapper'
    popup.appendChild(wrapper)
    const inner = document.createElement('div')
    inner.className = 'popup__inner'
    wrapper.appendChild(inner)
    const button = document.createElement('div')
    button.className = 'button_paginator close'
    button.innerHTML = '&#10006;'
    inner.appendChild(button)
    popup.addEventListener('click', e => { //закрываем папоп
        let target = e.target
        let its_popup = target == inner || inner.contains(target)
        let its_button = target == button
        if (!its_popup || its_button ) {
          closePopup()
        }
    })
    const image = document.createElement('div')
    image.className = 'pets__img'
    image.innerHTML = `<img src='${obj.img}' alt="pets-foto">`
    inner.appendChild(image)
    const content = document.createElement('div')
    content.className = 'popup__content'
    inner.appendChild(content)
    const petName = document.createElement('div')
    petName.className = 'pet__name'
    petName.innerHTML = obj.name
    content.appendChild(petName)
    const descr = document.createElement('div')
    descr.className = 'pets__descr'
    descr.innerHTML = `${obj.type} - ${obj.breed}`
    content.appendChild(descr)
    const about = document.createElement('div')
    about.className = 'pets__about'
    about.innerHTML = obj.description
    content.appendChild(about)
    const info = document.createElement('div')
    info.className = 'pets__info'
    content.appendChild(info)
    const li1 = document.createElement('li')
    li1.innerHTML = `<span>Age: </span> ${obj.age}`
    info.appendChild(li1)
    const li2 = document.createElement('li')
    li2.innerHTML = `<span>Inoculations: </span>  ${obj.inoculations}`
    info.appendChild(li2)
    const li3 = document.createElement('li')
    li3.innerHTML = `<span>Diseases: </span>  ${obj.diseases}`
    info.appendChild(li3)
    const li4 = document.createElement('li')
    li4.innerHTML = `<span>Parasites: </span>  ${obj.parasites}`
    info.appendChild(li4)
}