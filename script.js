

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Ethical Hacker', 'Web Deginer', ' Penetration Tester'],
    typeSpeed: 50,
});
// ----------------------------------------
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}



// cursor
var crsr= document.querySelector("#cursor");
var blur= document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
   
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y +"px"
    blur.style.left = dets.x- 50+"px"
    blur.style.top = dets.y -50+"px"
})









