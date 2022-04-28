// ****************************************************************
// Бургер меню (768px)


const second = document.querySelector('.second')
const burger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const menulinks = document.querySelectorAll('.header__link')
const wrapper = document.querySelector('.wrapper')
const body = document.body
const shadow = document.querySelector('.shadow')
const toggleMenu = () => {
    burger.classList.toggle('_active')
    headerMenu.classList.toggle('_active')
    let menu_is_active = headerMenu.classList.contains('_active')
    if (menu_is_active){
        body.classList.add('lock')
        document.querySelector('.shadow').style.display = 'block'
        if (second){second.style.background = 'transparent'}
    }
    else {
        body.classList.remove('lock')
        document.querySelector('.shadow').style.display = 'none'
        if (second){second.style.background = 'var(--color-light-xl)'}
    }
}

burger.addEventListener('click', toggleMenu)
shadow.addEventListener('click', toggleMenu)


// для всех ссылок навигации после нажатия убираем перечисленные классы у элементов

if (menulinks.length > 0) {
    menulinks.forEach(menulink => {
        menulink.addEventListener("click", onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menulink = e.target
        if (burger.classList.contains('_active')) {
            toggleMenu()
        }
    }
}
// активная ссылка текущей страницы
menulinks.forEach(el =>{

    if(location.href == el.href){
        el.classList.add('active')
    }
})

