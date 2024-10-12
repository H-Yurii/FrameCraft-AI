let serviceCategories = document.querySelectorAll('.s-main__service-categorie')


serviceCategories.forEach(categorie => {
    categorie.addEventListener('click', () => {
        
    })
});

let buttons = document.querySelectorAll('.s-main__service-categorie')
let modal = document.querySelector('.s-modal')
let buttonClose = document.querySelector('.s-modal-content__btn')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        modal.classList.add('active')
    })
});

buttonClose.addEventListener('click', function () {
    modal.classList.remove('active')
})


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