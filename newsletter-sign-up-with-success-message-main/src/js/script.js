const email = document.querySelector('#email')
const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')
const successToAmail = document.querySelector('b')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(email.value.trim().indexOf('@') !== -1){
        showModal(overlay)
        email.classList.remove('failed')
        successToAmail.textContent = email.value
    } else{
        email.classList.add('failed')
    }
    email.value = ''
})

function showModal(el) {
    el.classList.remove('hidden')
    setTimeout(() => {
        el.classList.add('hidden')
    }, 5000)
}

const dismissBtn = document.querySelector('.dismissBtn')
dismissBtn.addEventListener('click', closeBtn)
function closeBtn() {
    overlay.classList.add('hidden')
}