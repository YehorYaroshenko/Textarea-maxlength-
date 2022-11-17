const menuButton = document.querySelector('.menu')

document.addEventListener('click', func)

function func(event) {
   if (event.target.closest('.menu__button')) {
      menuButton.classList.toggle('menu__active')
   }
   if (!event.target.closest('.menu')) {
      menuButton.classList.remove('menu__active')
   }
}

// const googleLink = document.querySelector('.google__link')

// googleLink.addEventListener('click', (event) => { event.preventDefault() })

// const buttonDoc = document.querySelector('.button')

// const blockMouse = document.querySelector('.block-for-mouse')

// // blockMouse.addEventListener('mousemove', (event) => {
// //    blockMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`
// // })
// blockMouse.addEventListener('mouseover', (event) => {
//    let target = event.target.closest('span')
//    if (!target) return;
//    target.style.cssText = 'background-color: #77608d'
// })
// blockMouse.addEventListener('mouseout', (event) => {
//    let target = event.target.closest('span')
//    if (!target) return;
//    target.style.cssText = ``
// })

// document.addEventListener('keydown', (event) => {
//    console.log(`Нажата клавиша ${event.key}`);
//    console.log(event.repeat);
// })

const txtItem = document.querySelector('.textarea__item')
const txtLimit = txtItem.getAttribute('maxlength')
const txtCounter = document.querySelector('.textarea__counter span')

txtCounter.innerHTML = txtLimit

txtItem.addEventListener('keyup', txtSet)
txtItem.addEventListener('keydown', (event) => {
   if (event.repeat) txtSet()
})

function txtSet() {
   const txtCounterRes = txtLimit - txtItem.value.length
   txtCounter.innerHTML = txtCounterRes
}