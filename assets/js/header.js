window.addEventListener("load", () => {
  const burderBtnWrap = document.querySelector(".header__hamburger")
  const burgerBtn = document.querySelector(".header__hamburger--wrap");
  const mobileMenu = document.querySelector(".header__mobileMenu");
  burgerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(burderBtnWrap.classList.contains("on")) {
      burderBtnWrap.classList.remove("on");
      mobileMenu.classList.remove("on")
      document.body.classList.remove("scrollNone");
    } else {
      burderBtnWrap.classList.add("on");
      mobileMenu.classList.add("on")
      document.body.classList.add("scrollNone");
    }
    if (document.body.classList.contains("scrollNone")) {
        disableScroll();
    } else {
        enableScroll();
    }
  })
  
  function preventDefault(e) {
      e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
  }

  function enableScroll() {
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
  }

  function preventDefaultForScrollKeys(e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(e.code)) {
        preventDefault(e);
    }
  }
})