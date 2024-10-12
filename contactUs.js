let inputName = document.querySelector('.name')
let inputEmail = document.querySelector('.email')
let inputPhone = document.querySelector('.phone')
let inputText = document.querySelector('.text')
let button = document.querySelector('.c-main__contact-btn')
let modal = document.querySelector('.s-modal')
let buttonClose = document.querySelector('.s-modal-content__btn')
let error = document.querySelectorAll('.input-box__error')
let specialCharRegex = /[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/
let upperCase = /[QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM]/
let letters = /[qwertzuiopüasdfghjklöäyxcvbnmQWERTZUIOPÜASDFGHJKLÖÄYXCVBNM]/

button.addEventListener('click', function () {
    let inputNameValue = inputName.value
    let inputEmailValue = inputEmail.value
    let inputPhoneValue = inputPhone.value
    let inputTextValue = inputText.value
    error[0].classList.remove('active')
    inputName.classList.remove('active')
    error[1].classList.remove('active')
    inputEmail.classList.remove('active')
    error[2].classList.remove('active')
    inputPhone.classList.remove('active')
    error[3].classList.remove('active')
    inputText.classList.remove('active')
    if (inputNameValue === '') {
        error[0].textContent = 'You need to write your name!'
        error[0].classList.add('active')
        inputName.classList.add('active')

        return
    }

    else if (inputEmailValue === '') {
        error[1].textContent = 'You need to write your email addresse!'
        error[1].classList.add('active')
        inputEmail.classList.add('active')

        return
    }
        
    else if (!inputEmailValue.includes('@gmail.com') || inputEmailValue.length <= 10) {
        error[1].textContent = 'Check your email addresse, it is wrong!'
        error[1].classList.add('active')
        inputEmail.classList.add('active')

        return
    }
        
    else if (inputPhoneValue === '') {
        error[2].textContent = 'You need to write your phone number!'
        error[2].classList.add('active')
        inputPhone.classList.add('active')

        return
    }
        
    else if (inputPhoneValue.length < 10 || upperCase.test(inputPhoneValue) || specialCharRegex.test(inputPhoneValue) || letters.test(inputPhoneValue)) {
        error[2].textContent = 'Check your phone number, it is wrong!'
        error[2].classList.add('active')
        inputPhone.classList.add('active')

        return
    }

    else if (inputTextValue === '') {
        error[3].textContent = 'You need to write your problem!'
        error[3].classList.add('active')
        inputText.classList.add('active')

        return
    }
        
    else {
        modal.classList.add('active')
    }
})

buttonClose.addEventListener('click', function () {
    modal.classList.remove('active')
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