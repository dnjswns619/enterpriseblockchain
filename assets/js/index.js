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
    markers: true,
    // pin: true,
    scrub: 1
  },
  ease: "none"
})
mainSection
.set(".header", {yPercent: -100})
.to(".mainCont--wrap", {"--background-color": "rgba(0, 0, 0, .6)"}, "a")
.to(".mainCont--wrap .text:nth-of-type(1)", {autoAlpha: 1}, "a")
.to(".header", {yPercent: 0, visibility: "visible"}, "a")
.to(".mainCont--wrap .text:nth-of-type(1)", {autoAlpha: 0})
.to(".mainCont--wrap .text:nth-of-type(2)", {autoAlpha: 1})
.to(".mainCont--wrap .text:nth-of-type(2)", {autoAlpha: 0})
.to(".mainCont--wrap .text:nth-of-type(3)", {autoAlpha: 1})
.to(".mainCont--wrap .text:nth-of-type(3)", {autoAlpha: 0})
.to(".mainCont--wrap .text:nth-of-type(4)", {autoAlpha: 1})
.to(".ic-arrow", {autoAlpha: 0})

// section--keyword

