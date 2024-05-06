const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// header 활성화
const sectionMain = document.querySelector(".mainCont--wrap");
ScrollTrigger.create({
  trigger: ".mainCont--wrap",
  start: "top top",
  // markers: true,
  onEnter: () => {
    $(".header").addClass("on")
  }
})

// section--main 스크롤 이펙트
const mainSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".mainCont--wrap",
    start: "top top",
    end: "100% 100%",
    // markers: true,
    scrub: 1
  },
  ease: "none"
})
mainSection
.set(".header", {yPercent: -100})
.to(".mainCont", {"--background-color": "rgba(0, 0, 0, .6)"}, "a")
.to(".mainCont .text:nth-of-type(1)", {autoAlpha: 1}, "a")
.to(".header", {yPercent: 0, visibility: "visible"}, "a")
.to(".mainCont .text:nth-of-type(1)", {autoAlpha: 0})
.to(".mainCont .text:nth-of-type(2)", {autoAlpha: 1})
.to(".mainCont .text:nth-of-type(2)", {autoAlpha: 0})
.to(".mainCont .text:nth-of-type(3)", {autoAlpha: 1})
.to(".mainCont .text:nth-of-type(3)", {autoAlpha: 0})
.to(".mainCont .text:nth-of-type(4)", {autoAlpha: 1})
.to(".ic-arrow", {autoAlpha: 0})

// section--keyword
const keywordSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".keywordCont--wrap",
    start: "top top",
    end: "100% 100%",
    scrub: 0,
    // markers: true
  }
})
keywordSection
.to(".keywordCont", {"--background-color": "rgba(0, 0, 0, .6)"}, "b")
.to(".keywordCont--text", {autoAlpha: 1}, "b")
.to(".keywordCont--text .text:nth-child(1)", {xPercent: 100}, "c")
.to(".keywordCont--text .text:nth-child(3)", {xPercent: -100}, "c")
.to(".keywordCont", {"--background-color": "rgba(0, 0, 0, 0)"}, "c")
.to(".keywordCont--text", {autoAlpha: 0})
.to(".keywordCont--bg .bg1", {yPercent: -100})
.to(".keywordCont--bg .bg2", {yPercent: -100})
.to(".keywordCont", {"--background-color": "rgba(0, 0, 0, .6)"}, "d")
.to(".keywordCont > .text", {autoAlpha: 1}, "d")

// header 비활성화
ScrollTrigger.create({
  trigger: ".descCont__top",
  start: "top top",
  // markers: true,
  onEnter: () => {
    $(".header").removeClass("on")
  },
  onLeaveBack: () => {
    $(".header").addClass("on")
  }
})

// section--desc
const descSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".descCont__bottom",
    start: "0% 80%",
    end: "0% 20%",
    scrub: 1,
    // markers: true,
  },
})
descSection
.to(".descCont__bottom", {"--progress-width": "20%"}, "e")
.to(".descCont__bottom--text .text:nth-child(1)", {xPercent: -100}, "e")
.to(".descCont__bottom--text .text:nth-child(3)", {xPercent: 100}, "e")

// section--possibility 진입시 백그라운드 black
const backgroundDark = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibilityCont",
    start: "0% 50%",
    // markers: true,
    onEnter: () => {
      $(".header").addClass("on");
      $("body").addClass("dark");
    },
    onLeaveBack: () => {
      $(".header").removeClass("on");
      $("body").removeClass("dark");
    }
  }
})

// section--possibility
const possibilitySection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--possibility",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    invalidateOnRefresh: true,
    anticipatePin: 1,
    // markers: true
  },
  ease: "none"
})
possibilitySection
.to(".possibilityCont", {x: () => -window.innerWidth - 285})

// section--feature
const featureSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature",
    start: "0% 100%",
    end: "100% 35%",
    scrub: 0,
    // markers: true
  }
})
featureSection
.from(".feature__bg--pink", {xPercent:-60}, "f")
.from(".feature__bg--blue", {xPercent:-60}, "f")
.from(".feature__bg--green", {xPercent:50}, "f")
.to(".feature__bg", {"--opacity-value": 1})
.to(".feature__title", {autoAlpha:1})

// section--service
const serviceTitle = document.querySelector(".service__title")
const serviceSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "0% 0%",
    end: "33% bottom",
    scrub: 0,
    // markers: true
  }
})
// section : service-top
const cards = gsap.utils.toArray(".service__top .card__item");
serviceSection.to(".service__top--cont", { x: () => -(serviceTitle.offsetWidth + 160) })
cards.forEach((card, idx) => {
  return serviceSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "g")
})
serviceSection
.to(".icon__wrap--img.open", {autoAlpha: 0}, "g")
.to(".icon__wrap--img.lock", {autoAlpha: 1}, "g+=0.3")
.to(".icon__wrap--img.lock", {autoAlpha: 0})

// section : service-main
const serviceMainsection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__main",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: () => {
      gsap.set(".service__main", {autoAlpha: 1}, "h");
      gsap.set(".service__top", {autoAlpha: 0}, "h");
    },
    onLeaveBack: () => {
      gsap.set(".service__main", {autoAlpha: 0}, "h");
      gsap.set(".service__top", {autoAlpha: 1}, "h");
    }
  },
  ease: "none",
})

gsap.to(".service__main", {
  scrollTrigger: {
    trigger: ".service__main",
    start: "0% 0%",
    end: "20% 10%",
    scrub: 0,
  },
  "--progress-opacity": "1"
})

// section : service-bottom
const serviceBottomSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__bottom",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onEnter: () => {
      gsap.set(".service__bottom .card__item--lock", {autoAlpha: 1}, "i");
      gsap.set(".service__main", {autoAlpha: 0}, "i");
    },
    onLeaveBack: () => {
      gsap.set(".service__bottom .card__item--lock", {autoAlpha: 0}, "i");
      gsap.set(".service__main", {autoAlpha: 1}, "i");
    }
  },
  ease: "none",
})

const bottomCards = gsap.utils.toArray(".service__bottom .card .card__item");
bottomCards.forEach((card, idx) => {
  return serviceBottomSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "j")
})

const serviceBottomCardBlur = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__bottom",
    start: "0% 18%",
    end: "0% 0%",
    // markers: true,
  },
  ease: "none"
})
serviceBottomCardBlur
.to(".service__bottom", {"--progress-opacity": "1"})

// section : service-footer
const serviceFooterSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__footer",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onEnter: () => {
      gsap.set(".service__footer", {autoAlpha: 1}, "k");
      gsap.set(".service__bottom", {autoAlpha: 0}, "k");
    },
    onLeaveBack: () => {
      gsap.set(".service__footer", {autoAlpha: 0}, "k");
      gsap.set(".service__bottom", {autoAlpha: 1}, "k");
    }
  },
  ease: "none",
})
serviceFooterSection
.to(".service__footer", {"--progress-opacity": "1"})

// section-desc-2 진입시 백그라운드 white
const backgroundWhite = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--desc-2",
    start: "0% 50%",
    // markers: true,
    onEnter: () => {
      $(".header").removeClass("on");
      $("body").removeClass("dark");
    },
    onLeaveBack: () => {
      $(".header").addClass("on");
      $("body").addClass("dark");
    },
  }
})

// section--desc2
const desc2Section = gsap.timeline({
  scrollTrigger: {
    trigger: ".desc-2__bottom",
    start: "0% 80%",
    end: "0% 20%",
    scrub: 1,
    // markers: true,
  },
})
desc2Section
.to(".desc-2__bottom", {"--progress-width": "20%"}, "e")
.to(".desc-2__bottom--text .text:nth-child(1)", {xPercent: -100}, "e")
.to(".desc-2__bottom--text .text:nth-child(3)", {xPercent: 100}, "e")

// section--finance
const financeSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--finance",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    invalidateOnRefresh: true,
    anticipatePin: 1,
    // markers: true,
    onLeave: () => {
      $(".finance .arrow").removeClass("on")
    },
    onEnterBack: () => {
      $(".finance .arrow").addClass("on")
    }
  },
  ease: "none"
})
financeSection
.to(".finance__wrap--sticky", {x: () => -window.innerWidth / 2})
// finance section 진입시 arrow 생성 / 50% 지났을때 텍스트 변경
const financeArrow = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--finance",
    start: "top top",
    end: "50% bottom",
    invalidateOnRefresh: true,
    anticipatePin: 1,
    // markers: true,
    onEnter: () => {
      $(".finance .arrow").addClass("on");
    },
    onLeave: () => {
      $(".finance .arrow").addClass("change");
    },
    onEnterBack: () => {
      $(".finance .arrow").removeClass("change");
    },
    onLeaveBack: () => {
      $(".finance .arrow").removeClass("on");
    }
  },
  ease: "none",
})

// section--creator
const creatorSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--creator",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    // markers: true,
  },
  ease: "none"
})
creatorSection
.to(".creator .creator__intro", {duration: 2, autoAlpha: 1})
.to(".creator .creator__intro", {duration: 1, autoAlpha: 0})

// section--use
const useSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--use",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    invalidateOnRefresh: true,
    anticipatePin: 1,
    // markers: true,
  },
  ease: "none"
})
useSection
.to(".use__wrap--sticky", {x: () => -(window.innerWidth - 950)})
// useSection 화면에 진입시 블러처리 / 텍스트 보이기
const useContChangeOpacity = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--use",
    start: "top 30%",
    end: "bottom bottom",
    scrub: 0,
    // markers: true,
    onEnter: () => {
      $(".use .img").addClass("blur");
      $(".use .card__item:nth-child(1)").addClass("content__item--active");
    }
  },
  ease: "none"
})
// footer 진입시 groundsSection join 나오게 하기
const groundSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    onEnter: () => {
      $(".ground__join").addClass("active");
    },
    onLeaveBack: () => {
      $(".ground__join").removeClass("active");
    }
  }
})