// header 활성화
const sectionMain = document.querySelector(".main__wrap");
ScrollTrigger.create({
  trigger: ".main__wrap",
  start: "top top",
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
    scrub: 1
  },
  ease: "none"
})
mainSection
.set(".header", {yPercent: -100})
.to(".main__content", {"--background-color": "rgba(0, 0, 0, .6)"}, "a")
.to(".main__content .text:nth-of-type(1)", {autoAlpha: 1}, "a")
.to(".header", {yPercent: 0, visibility: "visible"}, "a")
.to(".main__content .text:nth-of-type(1)", {autoAlpha: 0})
.to(".main__content .text:nth-of-type(2)", {autoAlpha: 1})
.to(".main__content .text:nth-of-type(2)", {autoAlpha: 0})
.to(".main__content .text:nth-of-type(3)", {autoAlpha: 1})
.to(".main__content .text:nth-of-type(3)", {autoAlpha: 0})
.to(".main__content .text:nth-of-type(4)", {autoAlpha: 1})
.to(".ic-arrow", {autoAlpha: 0})

// section--keyword
const keywordSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".keyword__wrap",
    start: "top top",
    end: "100% 100%",
    scrub: 0,
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
  },
})
descSection
.to(".desc__bottomCont", {"--progress-width": "20%"}, "e")
.to(".desc__bottomCont--text .text:nth-child(1)", {xPercent: -100}, "e")
.to(".desc__bottomCont--text .text:nth-child(3)", {xPercent: 100}, "e")

const galleryFrontSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery__cont",
    start: "0% 0%",
    end: "20% 0%",
    scrub: 0,
  }
})
const gallerybehindSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery__cont",
    start: "65% 0%",
    end: "80% 0%",
    scrub: 0,
  }
})
ScrollTrigger.matchMedia({
  "(max-width: 750px)": function() {
    galleryFrontSection.to(".gallery__cont--left .text", {autoAlpha: 0})
    gallerybehindSection.to(".gallery__cont--left .text", {autoAlpha: 1})
  }
});

// section--possibility 진입시 백그라운드 black
const backgroundDark = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibility__cont",
    start: "0% 50%",
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

const header = document.querySelector(".header");
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if(entry.isIntersecting) { // 요소가 현재 뷰포트에 노출되어 있는지 확인
      header.classList.add("on");// 50%이상 보였을 때 실행시킬 코드
    }
  }, {threshold: 0.5}) // 대상 요소가 50% 이상 보였을 때 작동
})
const possibilityContObserver = document.querySelectorAll(".possibility");
possibilityContObserver.forEach((poster) => {
  observer.observe(poster);
})
const challangeContObserver = document.querySelectorAll(".challange");
challangeContObserver.forEach((poster) => {
  observer.observe(poster);
})
const featureContObserver = document.querySelectorAll(".feature");
featureContObserver.forEach((poster) => {
  observer.observe(poster);
})
const serviceContObserver = document.querySelectorAll(".service");
serviceContObserver.forEach((poster) => {
  observer.observe(poster);
})

// section--possibility
const possibilitySection = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibility",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
  ease: "none"
})
const possibilityItem = document.querySelector(".possibility__cont--item");
const possibilityItemWidth = possibilityItem.clientWidth;
ScrollTrigger.matchMedia({
  "(min-width: 751px)": function() {
    possibilitySection
    .to(".possibility__cont", {x: () => -possibilityItemWidth * 1.5})
  },
  "(max-width: 750px)": function() {
    const possibilityItemBox = document.querySelector(".possibility__cont--item .item__box");
    const possibilityItemBoxWidth = possibilityItemBox.offsetWidth;
    const possibilityMobile = gsap.timeline({
      scrollTrigger: {
        trigger: ".possibility",
        start: "top top",
        end: "40% 0%",
        scrub: 0,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        pin: true
      },
      ease: "none"
    })
    possibilityMobile
    .to(".possibility__cont--item", {x: () => -((possibilityItemBoxWidth * 2.5) + (75 * 3))})
  }
});


// section--feature
const featureSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature",
    start: "60% 100%",
    end: "130% 60%",
    scrub: 0,
  }
})
ScrollTrigger.matchMedia({
  "(min-width: 751px)": function() {
    featureSection
    .from(".feature__bg--pink", {xPercent:-60}, "f")
    .from(".feature__bg--blue", {xPercent:-60}, "f")
    .from(".feature__bg--green", {xPercent:50}, "f")
    .to(".feature__bg", {"--opacity-value": 1})
    .to(".feature__title", {autoAlpha:1})
  },
  "(max-width: 750px)": function() {
    featureSection
    .to(".feature__bg--blue", {height: "33.33%"}, "f")
    .to(".feature__bg--green", {height: "33.33%"}, "f")
    .to(".feature__bg", {"--opacity-value": 1})
    .to(".feature__title", {autoAlpha:1})
  }
});


// section--service

const serviceSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "0% 0%",
    end: "33% bottom",
    scrub: 0,
    InvalidateOnRefresh: true,
  }
})
// section : service-top
// 반응형에따라 컨텐츠의 크기가 달라졌을 경우 크기를 다시 감지하여 가로스크롤 적용
ScrollTrigger.matchMedia({
  "(min-width: 1441px)": function() {
    const serviceTitle = document.querySelector(".service__top--title")
    serviceSection.to(".service__top--cont", { x: () => {
      return -(serviceTitle.offsetWidth + 160);
    } })
    const cards = gsap.utils.toArray(".service__top .card__item");
    cards.forEach((card, idx) => {
      return serviceSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "g")
    })
    serviceSection
    .to(".icon__wrap--img.open", {autoAlpha: 0}, "g")
    .to(".icon__wrap--img.lock", {autoAlpha: 1}, "g+=0.3")
    .to(".icon__wrap--img.lock", {autoAlpha: 0})
  },
  "(min-width: 751px) and (max-width: 1440px)": function() {
    const serviceTitle = document.querySelector(".service__top--title")
    serviceSection.to(".service__top--cont", { x: () => {
      return -(serviceTitle.offsetWidth + 160);
    } })
    const cards = gsap.utils.toArray(".service__top .card__item");
    cards.forEach((card, idx) => {
      return serviceSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "g")
    })
    serviceSection
    .to(".icon__wrap--img.open", {autoAlpha: 0}, "g")
    .to(".icon__wrap--img.lock", {autoAlpha: 1}, "g+=0.3")
    .to(".icon__wrap--img.lock", {autoAlpha: 0})
    .set(".service__top .card__item--normal", {autoAlpha: 0})
    .to(".service__top .card__item", {width: 208, height: 280}, "n")
    .to(".service__top .card__item", {x: (-((cards[0].offsetWidth + 40) * 3) + (95 * 3))}, "n")
  },
  "(max-width: 750px)": function() {
    const serviceTopCard = document.querySelector(".service__top--cont .card__item");
    const serviceTopCardWidth = serviceTopCard.offsetWidth;
    serviceSection
    .to(".service__top--cont .card", {x: () => -((serviceTopCardWidth * 3) + 80)})
    .to(".icon__wrap--img.open", {autoAlpha: 0}, "g")
    .to(".icon__wrap--img.lock", {autoAlpha: 1}, "g+=0.3")
    .to(".service__top--cont .card", {autoAlpha: 0})
  }
});

// section : service-main
// 테블릿 사이즈인 경우 .service__main에 있는 카드 크기 변화
ScrollTrigger.matchMedia({
  "(min-width: 751px) and (max-width: 1440px)": function() {
    const serviceMainCardScale = gsap.timeline({
      scrollTrigger: {
        trigger: ".service__main",
        start: "70% 50%",
        end: "100% 100%",
        scrub: 0,
      },
      ease: "none",
    })
    serviceMainCardScale.to(".service__main .card__item", {width: 303, height: 408})
  }
});
const serviceMainsection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__main",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: () => {
      gsap.set(".service__main", {autoAlpha: 1}, "i");
      gsap.set(".service__top", {autoAlpha: 0}, "i");
    },
    onLeaveBack: () => {
      gsap.set(".service__main", {autoAlpha: 0}, "i");
      gsap.set(".service__top", {autoAlpha: 1}, "i");
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
ScrollTrigger.matchMedia({
  "(max-width: 750px)": function() {
    const serviceSectionOpacityChange = gsap.timeline({
      scrollTrigger: {
        trigger: ".service__main",
        start: "0% 0%",
        end: "20% 10%",
        scrub: 0,
        pin: true,
      }
    })
    serviceSectionOpacityChange.from(".card__item--sticky .card__item", {xPercent: 5})
  }
});

// section : service-bottom
const serviceBottomSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__bottom",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    onEnter: () => {
      gsap.set(".service__bottom .card__item--lock", {autoAlpha: 1}, "j");
      gsap.set(".service__main", {autoAlpha: 0}, "j");
    },
    onLeaveBack: () => {
      gsap.set(".service__bottom .card__item--lock", {autoAlpha: 0}, "j");
      gsap.set(".service__main", {autoAlpha: 1}, "j");
    }
  },
  ease: "none",
})


ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function() {
    const bottomCards = gsap.utils.toArray(".service__bottom .card .card__item");
    bottomCards.forEach((card, idx) => {
      return serviceBottomSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "k")
    })
  },
  "(min-width: 751px) and (max-width: 1024px)": function() {
    const bottomCards = gsap.utils.toArray(".service__bottom .card .card__item");
    bottomCards.forEach((card, idx) => {
      return serviceBottomSection.to(card, { x: () => -(card.offsetWidth + 40) * idx, delay: 0.1 }, "k")
    })
  },
  "(max-width: 750px)": function() {
    serviceBottomSection.to(".service__bottom .card .card__item:nth-child(3)", { "--progress-btt1": 1 }, "n")
    serviceBottomSection.to(".service__bottom .card .card__item:nth-child(4)", { "--progress-btt2": 1 }, "n")
    serviceBottomSection.to(".service__bottom .card .card__item:nth-child(4)", { "--progress-btt2": 2 })
    serviceBottomSection.to(".service__bottom .card", { autoAlpha: 0 })
  }
});


const serviceBottomCardBlur = gsap.timeline({
  scrollTrigger: {
    trigger: ".service__bottom",
    start: "0% 18%",
    end: "0% 0%",
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
    onEnter: () => {
      gsap.set(".service__footer", {autoAlpha: 1}, "l");
      gsap.set(".service__bottom", {autoAlpha: 0}, "l");
    },
    onLeaveBack: () => {
      gsap.set(".service__footer", {autoAlpha: 0}, "l");
      gsap.set(".service__bottom", {autoAlpha: 1}, "l");
    }
  },
  ease: "none",
})

ScrollTrigger.matchMedia({
  "(min-width: 751px)": function() {
    serviceFooterSection.to(".service__footer", {"--progress-opacity": "1"})
  },
  "(max-width: 750px)": function() {
    serviceFooterSection.set(".service__footer--content .card__item--lock", {autoAlpha: 0})
    serviceFooterSection.to(".service__footer", {"--progress-opacity": "1"})
    serviceFooterSection.to(".service__footer--content .card__item--lock", {autoAlpha: 1})
  }
});

// section-desc-2 진입시 백그라운드 white
const backgroundWhite = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--desc-2",
    start: "0% 50%",
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
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if(entry.isIntersecting) { // 요소가 현재 뷰포트에 노출되어 있는지 확인
      header.classList.remove("on");// 50%이상 보였을 때 실행시킬 코드
    }
  }, {threshold: 0.5}) // 대상 요소가 50% 이상 보였을 때 작동
})
const desc2ContObserver = document.querySelectorAll(".desc-2");
desc2ContObserver.forEach((poster) => {
  observer.observe(poster);
})
// section--desc2
const desc2Section = gsap.timeline({
  scrollTrigger: {
    trigger: ".desc-2__bottom",
    start: "0% 80%",
    end: "0% 20%",
    scrub: 1,
  },
})
ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function() {
    desc2Section
    .to(".desc-2__bottom", {"--progress-width": "20%"}, "m")
    .to(".desc-2__bottom--text .text:nth-child(1)", {xPercent: -100}, "m")
    .to(".desc-2__bottom--text .text:nth-child(3)", {xPercent: 100}, "m")
  },
  "(min-width: 751px) and (max-width: 1024px)": function() {
    desc2Section
    .to(".desc-2__bottom", {"--progress-width": "20%"}, "m")
    .to(".desc-2__bottom--text .text:nth-child(1)", {xPercent: -80}, "m")
    .to(".desc-2__bottom--text .text:nth-child(3)", {xPercent: 80}, "m")
  },
  "(max-width: 750px)": function() {
    desc2Section
    .to(".desc-2__bottom", {"--progress-width": "20%"}, "m")
    .to(".desc-2__bottom--text .text:nth-child(1)", {xPercent: -40}, "m")
    .to(".desc-2__bottom--text .text:nth-child(3)", {xPercent: 40}, "m")
  }
});


// section--finance
const financeSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--finance",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
    invalidateOnRefresh: true,
    anticipatePin: 1,
    onLeave: () => {
      $(".finance .arrow").removeClass("on")
    },
    onEnterBack: () => {
      $(".finance .arrow").addClass("on")
    }
  },
  ease: "none"
})
// 반응형에따라 컨텐츠의 크기가 달라졌을 경우 크기를 다시 감지하여 가로스크롤 적용
ScrollTrigger.matchMedia({
  "(min-width: 1440px)": function() {
    const financeTitle = document.querySelector(".finance__title");
    financeSection.to(".finance__wrap--sticky", {x: () => -(financeTitle.offsetWidth + 260)})
  },
  "(min-width: 751px) and (max-width: 1439px)": function() {
    const financeItem = document.querySelector(".finance__item");
    financeSection.to(".finance__wrap--sticky", {x: () => -(financeItem.offsetWidth + 80)})
  }
});
// finance section 진입시 arrow 생성 / 50% 지났을때 텍스트 변경
const financeArrow = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--finance",
    start: "top top",
    end: "50% bottom",
    invalidateOnRefresh: true,
    anticipatePin: 1,
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

const financeDesc = gsap.timeline({
  scrollTrigger: {
    trigger: ".finance__desc",
    start: "-10% 50%",
    end: "100% 60%",
    scrub: 0,
    onEnter: () => {
      $(".finance .arrow").removeClass("on");
    }
  },
  ease: "none",
})

financeDesc.to(".finance__desc", { autoAlpha: 1 })

// section--creator
const creatorSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--creator",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
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
  },
  ease: "none"
})
// 반응형에따라 컨텐츠의 크기가 달라졌을 경우 크기를 다시 감지하여 가로스크롤 적용
ScrollTrigger.matchMedia({
  "(min-width: 1440px)": function() {
    const useTitle = document.querySelector(".use__title");
    useSection.to(".use__wrap--sticky", {x: () => -(useTitle.offsetWidth + 260)})
  },
  "(min-width: 751px) and (max-width: 1439px)": function() {
    const useItem = document.querySelector(".use__item");
    useSection.to(".use__wrap--sticky", {x: () => -(useItem.offsetWidth)})
  },
  "(max-width: 750px)": function() {
    const useCardItem = document.querySelector(".use__item .card__item");
    useSection.to(".use__item", {x: () => -((useCardItem.offsetWidth * 3) + 32)})
  }
});
// useSection 화면에 진입시 블러처리 / 텍스트 보이기
const useContChangeOpacity = gsap.timeline({
  scrollTrigger: {
    trigger: "#section--use",
    start: "top 30%",
    end: "bottom bottom",
    scrub: 0,
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
    onEnter: () => {
      $(".ground__join").addClass("active");
    },
    onLeaveBack: () => {
      $(".ground__join").removeClass("active");
    }
  }
})