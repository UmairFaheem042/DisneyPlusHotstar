const optionMenu = document.querySelector('.bx-menu')

optionMenu.addEventListener('click', ()=>{
    const ulEl = document.querySelector('.nav-link')
    const headerEl = document.getElementById('header')
    ulEl.classList.toggle('active')
    headerEl.classList.toggle('active')
    
})