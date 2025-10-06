var crsr = document.querySelector("#cursor")
var blurC = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

    blurC.style.left = dets.x - 250  + "px";
    blurC.style.top = dets.y - 250 + "px";
    // dets is used for mouse veents
    // minus 250(length/width da half) isli kita taki cursor de nal aje circle nahi ta oh div te upperleft corner de naal rehnda si te circle lag karda si
})



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