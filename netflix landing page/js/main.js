const question = document.querySelectorAll('.question')
const show = document.querySelectorAll('.show')
const hide = document.querySelectorAll('.hide')

Array.from(show).forEach(x => x.addEventListener('click', () => x.parentElement.classList.add('active')))

Array.from(hide).forEach(x => x.addEventListener('click', () => {
    x.parentElement.classList.remove('active')
}))