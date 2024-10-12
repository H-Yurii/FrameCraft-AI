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

let features = document.querySelectorAll('.s-main__features-categorie')

window.addEventListener('scroll', checkfeatures)

checkfeatures()

function checkfeatures() {
    const triggerBottom = window.innerHeight / 5 * 5

    features.forEach(feature => {
        featureTop = feature.getBoundingClientRect().top

        if (featureTop < triggerBottom) {
            feature.classList.add('show')
        }
        else {
            feature.classList.remove('show')
        }
    });
}

let services = document.querySelectorAll('.s-main__service-categorie')

window.addEventListener('scroll', checkServices)

checkServices()

function checkServices() {
    const triggerBottom = window.innerHeight / 5 * 5

    services.forEach(service => {
        serviceTop = service.getBoundingClientRect().top

        if (serviceTop < triggerBottom) {
            service.classList.add('show')
        }
        else {
            service.classList.remove('show')
        }
    });
}

let pricings = document.querySelectorAll('.s-main__pricing-categorie')

window.addEventListener('scroll', checkPricings)

checkPricings()

function checkPricings() {
    const triggerBottom = window.innerHeight / 5 * 5

    pricings.forEach(pricing => {
        pricingTop = pricing.getBoundingClientRect().top

        if (pricingTop < triggerBottom) {
            pricing.classList.add('show')
        }
        else {
            pricing.classList.remove('show')
        }
    });
}