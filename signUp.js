let input = document.querySelector('.input-box__input')
let button = document.querySelector('.main__block-btn')
let modal = document.querySelector('.modal-1')
let modal2 = document.querySelector('.modal-2')
let modal3 = document.querySelector('.modal-3')
let btn = document.querySelector('.button')
let btn2 = document.querySelector('.btn')
let btn3 = document.querySelectorAll('.modal-content__btn')
let error = document.querySelector('.input-box__error')

button.addEventListener('click', function () {
    let inputValue = input.value
    if (!inputValue) {
        error.textContent = 'You need to write your email addresse!'
        error.classList.add('active')
        input.classList.add('active')
    }
    else if (!inputValue.includes('@') || !inputValue.includes('.')) {
        error.textContent = 'Check your email addresse, it is wrong!'
        error.classList.add('active')
        input.classList.add('active')
    }
    else {
        modal3.classList.add('active')
        error.classList.remove('active')
        input.classList.remove('active')
    }
})

btn.addEventListener('click', function () {
    modal.classList.add('active')
})

btn2.addEventListener('click', function () {
    modal2.classList.add('active')
})

btn3[0].addEventListener('click', function () {
    modal.classList.remove('active')
})

btn3[1].addEventListener('click', function () {
    modal2.classList.remove('active')
})

btn3[2].addEventListener('click', function () {
    modal3.classList.remove('active')
})

let barMenu = document.querySelector('.header__bar-menu')
let menu = document.querySelector('.header__menu')

barMenu.addEventListener('click', function () {
    if (menu.classList.contains('change')) { 
        menu.classList.remove('change')
        barMenu.classList.remove('change')
    } else {
        menu.classList.add('change')
        barMenu.classList.add('change')
    }
})