var open = document.getElementsByClassName("openMenuSideNav")[0];
function openNav() {
document.getElementById("sideNav").style.width="250px";
document.getElementById("closebtn").style.display="block";
open.style.display="none";
}
function closeNav() {
document.getElementById("sideNav").style.width="0";
document.getElementById("closebtn").style.display="none";
open.style.display="block";
}



function move(){
    var elem= document.getElementById("myBar");
    var width=10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=90){
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}
function moveRight(){
    var elem= document.getElementById("myBarRight");
    var width=10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=80){
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("labelRight").innerHTML = width * 1 + '%';
        }
    }
}


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}