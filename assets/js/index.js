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
    scrub: "0",
    markers: true
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

