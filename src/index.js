// microsoft js start herer

// hamburger_menu js

const hamburger_menu = document.getElementById('hamburger_menu')
const cross_menu = document.getElementById('cross_menu')
hamburger_menu.addEventListener('click', () => {
        hamburger_menu.style.display = 'none'
        cross_menu.style.display = 'block'
        // console.log('menu')
})

cross_menu.addEventListener('click', () => {
    hamburger_menu.style.display = 'block'
    cross_menu.style.display = 'none'
    // console.log('cross')
})


