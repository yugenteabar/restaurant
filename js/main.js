import setScrollAnimation from './scroll.js'
(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false

  let containerMargin

  function defineContainerMargin() {
    const container = document.querySelector('.container')
    containerMargin = (innerWidth - container.offsetWidth) / 2

    const cpls = document.querySelectorAll('.custom-padding-left')
    const cprs = document.querySelectorAll('.custom-padding-right')

    cpls.forEach(cpl => {
      cpl.style.paddingLeft = containerMargin + 'px'
    })
    cprs.forEach(cpr => {
      cpr.style.paddingRight = containerMargin + 'px'
    })
  }

  function test() {
    const reavlElements =  document.querySelectorAll('[class*="hide-reaveal"]')
    if(reavlElements.length){
      reavlElements.forEach((rel) => {
        rel.classList.remove('hide-reaveal')
      })
    }
  }

  test()




  const menuBtn = document.querySelector('.open-navigation-btn')
  const nav = document.querySelector('#navBg')
  const closeNavBtn = document.querySelector('#closeNavBtn')
  menuBtn.addEventListener('click', () => {
    if (!TOGGLE_MENU) {
      nav.classList.remove('hidden')
    } else {
      nav.classList.add('hidden')
    }
    TOGGLE_MENU = !TOGGLE_MENU
  })

  nav.addEventListener('click', (e) => {
    if (e.target.id === 'navBg') {
      nav.classList.add('hidden')
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })

  closeNavBtn.addEventListener('click', (e) => {
    nav.classList.add('hidden')
    TOGGLE_MENU = !TOGGLE_MENU
  })

  addEventListener('keydown', e => {
    if (!nav.classList.contains('hidden') && (e.key === "Escape" || e.key === "Esc")) {
      nav.classList.add('hidden')
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })

  addEventListener('resize', defineContainerMargin)

  defineContainerMargin()

  setScrollAnimation()

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }
})()