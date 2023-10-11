function startTypedAnimation() {
    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Ethical Hacker', 'Web Designer', 'Penetration Tester'],
      typeSpeed: 50,
      backSpeed: 25, // Added backSpeed to simulate erasing text
      startDelay: 100, // Delay before starting the animation
      backDelay: 800, // Delay before erasing text
      loop: true, // Infinite loop
    });
  }

  startTypedAnimation();
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


// Setup and start animation! 
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxR5x6R0TYGpPN1D1I19e7IN1lkLCRGMFhua9j099aeMcTurYPKR3UPODs_RutzEIdd/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Message sent sucessfully"
            setTimeout(function(){
                msg.innerHTML= ""   
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    // sidemenu for mobile

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right ="0";
    }
    function closemenu(){
        sidemenu.style.right ="-200px";
    }






