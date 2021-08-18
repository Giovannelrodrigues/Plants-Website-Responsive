//Background Header
function scrollHeader(){
    const header = document.querySelector('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


//Show Menu

const hambuguer = document.querySelector('.hamburguer')
const aside = document.querySelector('aside')

hambuguer.addEventListener('click', () => {
    aside.classList.toggle('show-menu')
})


/* close menu*/


const links = document.querySelectorAll('.aside__link')

links.forEach(element => {
    element.addEventListener('click', () => {
        aside.classList.remove('show-menu')
    })
})