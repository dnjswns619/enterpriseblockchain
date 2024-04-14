const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// header 활성화
const sectionMain = document.querySelector(".main__wrap");
ScrollTrigger.create({
  trigger: ".main__wrap",
  start: "top top",
  // markers: true,
  onEnter: () => {
    $(".header").addClass("on")
  }
})

// section--main 스크롤 이펙트
const mainSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".main__wrap",
    start: "top top",
    end: "100% 100%",
    // markers: true,
    scrub: 1
  },
  ease: "none"
})
mainSection
.set(".header", {yPercent: -100})
.to(".main__cont", {"--background-color": "rgba(0, 0, 0, .6)"}, "a")
.to(".main__cont .text:nth-of-type(1)", {autoAlpha: 1}, "a")
.to(".header", {yPercent: 0, visibility: "visible"}, "a")
.to(".main__cont .text:nth-of-type(1)", {autoAlpha: 0})
.to(".main__cont .text:nth-of-type(2)", {autoAlpha: 1})
.to(".main__cont .text:nth-of-type(2)", {autoAlpha: 0})
.to(".main__cont .text:nth-of-type(3)", {autoAlpha: 1})
.to(".main__cont .text:nth-of-type(3)", {autoAlpha: 0})
.to(".main__cont .text:nth-of-type(4)", {autoAlpha: 1})
.to(".ic-arrow", {autoAlpha: 0})

// section--keyword
const keywordSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".keyword__wrap",
    start: "top top",
    end: "100% 100%",
    scrub: 0,
    // markers: true
  }
})
keywordSection
.to(".keyword__cont", {"--background-color": "rgba(0, 0, 0, .6)"}, "b")
.to(".keyword__cont--text", {autoAlpha: 1}, "b")
.to(".keyword__cont--text .text:nth-child(1)", {xPercent: 100}, "c")
.to(".keyword__cont--text .text:nth-child(3)", {xPercent: -100}, "c")
.to(".keyword__cont", {"--background-color": "rgba(0, 0, 0, 0)"}, "c")
.to(".keyword__cont--text", {autoAlpha: 0})
.to(".keyword__cont--bg .bg1", {yPercent: -100})
.to(".keyword__cont--bg .bg2", {yPercent: -100})
.to(".keyword__cont", {"--background-color": "rgba(0, 0, 0, .6)"}, "d")
.to(".keyword__cont > .text", {autoAlpha: 1}, "d")

// header 비활성화
ScrollTrigger.create({
  trigger: ".desc__topCont",
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
    trigger: ".desc__bottomCont",
    start: "0% 80%",
    end: "0% 20%",
    scrub: 1,
    // markers: true,
  },
})
descSection
.to(".desc__bottomCont", {"--progress-width": "20%"}, "e")
.to(".desc__bottomCont--text .text:nth-child(1)", {xPercent: -100}, "e")
.to(".desc__bottomCont--text .text:nth-child(3)", {xPercent: 100}, "e")

const backgroundDark = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibility__cont",
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

const possibilitySection = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibility",
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
.to(".possibility__cont", {x: () => -window.innerWidth - 285})

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

const serviceTitle = document.querySelector(".service__title")
const serviceSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "0% 0%",
    end: "33% bottom",
    scrub: 0,
    markers: true
  }
})
const cards = gsap.utils.toArray(".service__top .card__item");
serviceSection.to(".service__top", { x: () => -(serviceTitle.offsetWidth + 160) })
cards.forEach((card, idx) => {
  return serviceSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "g")
})
serviceSection
.to(".icon__wrap--img.open", {autoAlpha: 0}, "g")
.to(".icon__wrap--img.lock", {autoAlpha: 1}, "g+=0.3")
.to(".icon__wrap--img.lock", {autoAlpha: 0})

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

const serviceFooterSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__footer",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    markers: true,
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