document.addEventListener()

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    // delay:1
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body", 
        markers: true,
        start:"top -10%",
        end: "top -11%",
        scrub:3
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:2 
    }
})