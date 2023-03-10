function openmobilemen(){
    document.getElementById('mobile').style.width="85%";
}

function closemobilemen(){
    document.getElementById('mobile').style.width="0";
}

// function otherfield(){
// document.getElementById('other').style.display="none";
// }

let preloader = document.getElementById('preloader');

addEventListener("load",Function()) ; {
    preloader.style.display = "none";
}
var modal = document.getElementById('mobile');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}