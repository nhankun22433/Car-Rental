let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// scroll animation
const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 300,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 600, origin: 'left'})
sr.reveal('.heading',{delay: 300, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services-container .box',{delay: 300, origin: 'top'})
sr.reveal('.about-container .box',{delay: 300, origin: 'top'})
sr.reveal('.reviews-container .box',{delay: 300, origin: 'top'})
sr.reveal('.newletter .box',{delay: 200, origin: 'bottom'})