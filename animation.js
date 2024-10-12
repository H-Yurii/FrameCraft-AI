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
                circle.classList.add('box')
            }, 2000)
            setTimeout(function () {
                loadingBody.classList.add('none')
                bodyMain.classList.add('visible')
            }, 2500)
            setTimeout(function () {
                header.classList.add('visible')
                main.classList.add('visible')
            }, 3200)
        }
    }, i * 50)
}

let secondSection = document.querySelector('.main__body-secondSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        secondSection.style.transform = `translateY(${10 - (scrollPosition / window.innerHeight) * 200}vh)`
    }
})


let thirdSection = document.querySelector('.main__body-thirdSection')

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
        thirdSection.style.transform = `translateY(${65 - (scrollPosition / window.innerHeight) * 150}vh)`
    }
})



let video = document.querySelector('.main__thirdSection-video')

window.addEventListener('scroll', checkVideo)

checkVideo()

function checkVideo() {
    const triggerBottom = window.innerHeight / 5 * 7

    const videoTop = video.getBoundingClientRect().top

    if (videoTop < triggerBottom) {
        video.classList.add('show')
    }
    else {
        video.classList.remove('show')
    }
} 

let titles = document.querySelectorAll('.main__thirdSection-title')

window.addEventListener('scroll', checkTitles)

checkTitles()

function checkTitles() {
    const triggerBottom = window.innerHeight / 5 * 7

    titles.forEach(title => {
        titleTop = title.getBoundingClientRect().top

        if (titleTop < triggerBottom) {
            title.classList.add('show')
        }
        else {
            title.classList.remove('show')
        }
    });
}

let text = document.querySelectorAll('.main__thirdSection-text')

window.addEventListener('scroll', checkText)

checkText()

function checkText() {
    const triggerBottom = window.innerHeight / 5 * 7

    text.forEach(txt => {
        txtTop = txt.getBoundingClientRect().top

        if (txtTop < triggerBottom) {
            txt.classList.add('show')
        }
        else {
            txt.classList.remove('show')
        }
    });
}