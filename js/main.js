(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false

  const menuBtn = document.querySelector('.open-navigation-btn')
  const nav = document.querySelector('#nav-bg')
  menuBtn.addEventListener('click', () => {
    if(!TOGGLE_MENU){
      nav.classList.remove('hidden')
    }
    else{
      nav.classList.add('hidden')
    }
    TOGGLE_MENU = !TOGGLE_MENU
  })

  nav.addEventListener('click', (e) => {
    if(e.target.id === 'nav-bg'){
      nav.classList.add('hidden')
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })

})()