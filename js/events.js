// contact information on mouse over and out events
function ShowAndHide() {
    var x = document.getElementById('con');
    if (x.style.opacity == 0) {
        x.style.opacity = 1;
    } else {
        x.style.opacity = 0;
    }
}

// navbar scroll effect
window.onscroll = ()=>{
    const navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > 50){
        navbar.classList.add('gradienttwo');
        navbar.classList.remove('gradientclass');
        navbar.classList.remove('bg-light');


    } else{
        navbar.classList.remove('gradienttwo');
        navbar.classList.add('gradientclass');
        navbar.classList.remove('gradienttwo')

    }
}

// upcomming projects alert (alt+click)
function isKeyPressed(event) {
    if (event.altKey) {
      alert("upcomming projects! 1) discord clone 2) AI assistant bot 3) Graded quiz board 4) Sky view app");
    } else {
      alert("The ALT key was NOT pressed!");
    }
  }

  // on resize of the document
function resize()
{var w = window.outerWidth;
var h = window.outerHeight;
var txt = "Window size: width=" + w + ", height=" + h;
alert(txt);
}

// at the end of loading the page
window.addEventListener('load', (event)=>{
    alert('Glade to see you landed in my page')
})