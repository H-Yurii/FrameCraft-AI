let img = document.querySelector('.paralax-1')
let img2 = document.querySelector('.paralax-2')
let img3 = document.querySelector('.paralax-3')
let img4 = document.querySelector('.paralax-4')

window.addEventListener('mousemove', function (event) {
    let x = event.offsetX
    let y = event.offsetY

    img.style.transform = `translate(${-x/4}px, ${-y/5}px)`
    img2.style.transform = `translate(${-x/10}px, ${y/4}px)`
    img3.style.transform = `translate(${-x/40}px, ${-y/4}px)`
    img4.style.transform = `translate(${x/5}px, ${-y/6}px)`
})