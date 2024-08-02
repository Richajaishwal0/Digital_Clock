var text="Hello, Welcome to my weather app!!"
var speed=50;
let i=0
function typewriter(){
    while (i<text.length){
        document.getElementsByClassName('head').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typewriter,speed)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typewriter();
});