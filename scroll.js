let videos = document.querySelectorAll('.main__fourthSection-video')

window.addEventListener('scroll', checkVideos)

checkVideos()

function checkVideos() {
    const triggerBottom = window.innerHeight / 5 * 7

    videos.forEach((video) => {
        const videoTop = video.getBoundingClientRect().top

        if (videoTop < triggerBottom) {
            video.classList.add('show')
        }
        else {
            video.classList.remove('show')
        }
    });
} 

let images = document.querySelectorAll('.main__fourthSection-img')

window.addEventListener('scroll', checkImages)

function checkImages() {
    const triggerBottom = window.innerHeight / 5 * 11

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top

        if (imgTop < triggerBottom) {
            img.classList.add('change')
        }
        else {
            img.classList.remove('change')
        }
    });
}

let video = document.querySelector('.main__thirdSection-video ')

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
    const triggerBottom = window.innerHeight / 5 * 8

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
    const triggerBottom = window.innerHeight / 5 * 8

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