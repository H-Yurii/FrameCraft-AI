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

let loadingBody = document.querySelector('.loading')
let numbersCounter = document.querySelector('.counter')
let circle = document.querySelector('.circle')
let bodyMain = document.querySelector('.body__main')
let header = document.querySelector('.header')
let main = document.querySelector('.main')
let number = 0

for (let i = 0; i < 100; i++) {
    setTimeout(function () {
        number++;
        numbersCounter.textContent = number
        circle.classList.add('while')

        if (number === 100) {
            setTimeout(function () {
                circle.classList.add('after')
            }, 1000)
            setTimeout(function () {
                loadingBody.classList.add('none')
            }, 2000)
        }
    }, i * 20)
}
