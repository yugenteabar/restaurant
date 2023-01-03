import setScrollAnimation from './scroll.js'
addEventListener('load', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  let TOGGLE_MENU = false


  function init() {
    // new SmoothScroll(target,speed,smooth)
    new SmoothScroll(document, 50, 16)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body)

    let moving = false
    let pos = target.scrollTop
    let frame = target === document.body &&
      document.documentElement ?
      document.documentElement :
      target

    target.addEventListener('mousewheel', scrolled, {
      passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
      passive: false
    })

    function scrolled(e) {
      e.preventDefault();
      let delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true
      let delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    let requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  const nav = document.querySelector('#navBg')
  const closeNavBtn = document.querySelector('#closeNavBtn')
  const menuBtn = document.querySelector('#menuBtn')
  const yugenCircles = document.querySelector('#yugenWaterMark')
  const navList = document.querySelector('#navList')

  menuBtn.addEventListener('click', () => {
    if (!TOGGLE_MENU) {
      nav.classList.remove('hidden')
      menuBtn.classList.add('hidden')
      closeNavBtn.classList.remove('hidden')
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.right = `0px`
      document.body.style.left = `0px`
      document.body.style.position = 'fixed'
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.add('hidden')
        document.querySelector('#mobileLogo').classList.remove('hidden')
      }
      TOGGLE_MENU = true
    }
  })

  closeNavBtn.addEventListener('click', () => {
    if (TOGGLE_MENU) {
      nav.classList.add('hidden')
      menuBtn.classList.remove('hidden')
      closeNavBtn.classList.add('hidden')
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.right = ``
      document.body.style.left = ``
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.remove('hidden')
        document.querySelector('#mobileLogo').classList.add('hidden')
      }

      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      TOGGLE_MENU = false
    }
  })

  addEventListener('keydown', (e) => {
    if (!nav.classList.contains('hidden') && (e.key === "Escape" || e.key === "Esc")) {
      nav.classList.add('hidden')
      menuBtn.classList.remove('hidden')
      closeNavBtn.classList.add('hidden')
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.right = ``
      document.body.style.left = ``
      if (innerWidth < 500) {
        document.querySelector('#bookNow').classList.remove('hidden')
        document.querySelector('#mobileLogo').classList.add('hidden')
      }
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
      TOGGLE_MENU = !TOGGLE_MENU
    }
  })

  let positions = []

  addEventListener("mousemove", e => {
    if (TOGGLE_MENU && innerWidth > 1024) {
      const x = -(e.pageX + yugenCircles.offsetLeft) / 50;
      const y = -(e.pageY + yugenCircles.offsetTop) / 50;
      positions.push({
        x,
        y
      });
      const averageCount = 10;
      if (positions.length > averageCount)
        positions.splice(0, 1);

      const current = positions.reduce((acc, e) => {
        acc.x += e.x;
        acc.y += e.y;
        return acc
      }, {
        x: 0,
        y: 0
      });
      current.x /= positions.length;
      current.y /= positions.length;

      yugenCircles.style.transform = `translateX(${current.x}px) translateY(${current.y}px)`;
    }
  })


  setScrollAnimation()

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

  navList.style.height = (window.innerHeight - 130) + 'px'
  navList.style.overflow = 'scroll'
  window.onresize = () => {
    navList.style.height = (window.innerHeight - 130) + 'px'
    navList.style.overflow = 'scroll'
  }

  window.onscroll = function () {
    const top = window.scrollY
    const header = document.getElementsByTagName('header')[0]
    const offset = header.clientHeight
    if (top > offset - 40) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }

  // loading page

  const landingTeaBar = document.getElementById('teaBar')
  const landingDining = document.getElementById('dining')
  const loadingScreen = document.getElementById('loading-screen')
  if (landingTeaBar && landingDining) {
    let mobCurrPos = 0
    let mobPrevPos = mobCurrPos
    const sensitivityError = 5

    // desktop teabar event
    landingTeaBar.addEventListener('wheel', (e) => {
      if (e.wheelDelta < 0) {
        window.location.assign("https://teabar.vercel.app/?a=hidden")
      }
    })

    // desktop restaurant event
    landingDining.addEventListener('wheel', (e) => {
      if (e.wheelDelta >= 0) {
        window.location.assign("https://restaurant-lime-xi.vercel.app/?a=hidden")
      }
    })

    // mobile restaurant event
    loadingScreen.addEventListener('touchmove', (e) => {
      mobCurrPos = e.changedTouches[0].pageY

      if (Math.abs(mobCurrPos - mobPrevPos) > sensitivityError) {
        if (mobCurrPos < mobPrevPos) {
          window.location.assign("https://teabar.vercel.app/?a=hidden")
        }
        else {
          window.location.assign("https://restaurant-lime-xi.vercel.app/?a=hidden")
        }
        mobPrevPos = mobCurrPos
      }
    })
  }
})