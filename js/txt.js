$(document).ready(function () {
    var i = 0;
    var txt = 'Развивайте свой бизнес с помощью нашей компании';
    var speed = 60;
    function typeWriter() {
    if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
    }
 
    window.onload = setTimeout(function(){
        typeWriter(); 
       }, 2000); 
});