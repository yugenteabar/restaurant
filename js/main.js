import setScrollAnimation from './scroll.js'
addEventListener('load', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false

  const nav = document.querySelector('#navBg')
  const closeNavBtn = document.querySelector('#closeNavBtn')
  const menuBtn = document.querySelector('#menuBtn')

  menuBtn.addEventListener('click', () => {
    if (!TOGGLE_MENU) {
      nav.classList.remove('hidden')
      menuBtn.classList.add('hidden')
      closeNavBtn.classList.remove('hidden')
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.position = 'fixed'
    }

    TOGGLE_MENU = true
  })

  closeNavBtn.addEventListener('click', () => {
    if (TOGGLE_MENU) {
      nav.classList.add('hidden')
      menuBtn.classList.remove('hidden')
      closeNavBtn.classList.add('hidden')
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    TOGGLE_MENU = false
  })

  addEventListener('keydown', (e) => {
    if (!nav.classList.contains('hidden') && (e.key === "Escape" || e.key === "Esc")) {
      nav.classList.add('hidden')
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })

  setScrollAnimation()

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }
})