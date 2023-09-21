const body = document.querySelector('body')
const info = document.querySelectorAll('.info')
const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('.nav-links-2')
const bgImg = document.querySelector('div.bg-img-1')
const copyRight = document.querySelector('.footer span h2')

menuBtn.addEventListener('click', ()=>{
    if(menu.classList.contains('mobile-menu')) {
        menu.classList.remove('mobile-menu')
    } else {
        menu.classList.add('mobile-menu')
    }
})

window.addEventListener('click', (e)=>{
    console.log(e)
    if(e.target === bgImg) {
        menu.classList.remove('mobile-menu')
        bgImg.style.filter = "brightness(1)"
    }
})
   

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        /* entry.isIntersecting? observer.unobserve(entry.target) */
        if(entry.isIntersecting) observer.unobserve(entry.target)
    }), {
        threshold: 1
    }
})

info.forEach((el) => {
    observer.observe(el)
})

const getYear = () => {
    const date = new Date().getFullYear()
    copyRight.innerHTML = `Space x &copy; ${date}`
}

getYear()