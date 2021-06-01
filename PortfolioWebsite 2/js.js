function icons1(img){
    document.getElementsByClassName("img")[0].src = img;
    document.getElementById("header").innerHTML = "About Me"
    document.getElementsByClassName("img")[1].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[2].src = "img/package.png";
    document.getElementsByClassName("img")[3].src = "img/list.png";
    document.getElementsByClassName("img")[4].src = "img/envelope.png";
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("education").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementsByClassName("img")[5].src = img;
    document.getElementsByClassName("img")[6].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[7].src = "img/package.png";
    document.getElementsByClassName("img")[8].src = "img/list.png";
    document.getElementsByClassName("img")[9].src = "img/envelope.png";


}
function icons2(img){
    document.getElementsByClassName("img")[0].src = "img/avatar.png";
    document.getElementsByClassName("img")[1].src = img;
    document.getElementById("header").innerHTML = "Education"
    document.getElementById("aboutme").style.display = "none"
    document.getElementById("education").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementsByClassName("img")[2].src = "img/package.png";
    document.getElementsByClassName("img")[3].src = "img/list.png";
    document.getElementsByClassName("img")[4].src = "img/envelope.png";
    document.getElementsByClassName("img")[5].src = "img/avatar.png";
    document.getElementsByClassName("img")[6].src = img;
    document.getElementsByClassName("img")[7].src = "img/package.png";
    document.getElementsByClassName("img")[8].src = "img/list.png";
    document.getElementsByClassName("img")[9].src = "img/envelope.png";
}
function icons3(img){
    document.getElementsByClassName("img")[0].src = "img/avatar.png";
    document.getElementsByClassName("img")[1].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[2].src = img;
    document.getElementById("header").innerHTML = "Projects"
    document.getElementById("projects").style.display = "block"
    document.getElementById("aboutme").style.display = "none"
    document.getElementById("education").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementsByClassName("img")[3].src = "img/list.png";
    document.getElementsByClassName("img")[4].src = "img/envelope.png";

    document.getElementsByClassName("img")[5].src = "img/avatar.png";
    document.getElementsByClassName("img")[6].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[7].src = img;
    document.getElementsByClassName("img")[8].src = "img/list.png";
    document.getElementsByClassName("img")[9].src = "img/envelope.png";
}
function icons4(img){
    document.getElementsByClassName("img")[0].src = "img/avatar.png";
    document.getElementsByClassName("img")[1].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[2].src = "img/package.png";
    document.getElementsByClassName("img")[3].src = img;
    document.getElementById("header").innerHTML = "Skills"
    document.getElementById("projects").style.display = "none"
    document.getElementById("aboutme").style.display = "none"
    document.getElementById("education").style.display = "none"
    document.getElementById("skills").style.display = "block"
    document.getElementById("contact").style.display = "none"
    document.getElementsByClassName("img")[4].src = "img/envelope.png";

    document.getElementsByClassName("img")[5].src = "img/avatar.png";
    document.getElementsByClassName("img")[6].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[7].src = "img/package.png";
    document.getElementsByClassName("img")[8].src = img;
    document.getElementsByClassName("img")[9].src = "img/envelope.png";
}
function icons5(img){
    document.getElementsByClassName("img")[0].src = "img/avatar.png";
    document.getElementsByClassName("img")[1].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[2].src = "img/package.png";
    document.getElementsByClassName("img")[3].src = "img/list.png";
    document.getElementsByClassName("img")[4].src = img;
    document.getElementById("contact").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("aboutme").style.display = "none"
    document.getElementById("education").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("header").innerHTML = "Contact"

    document.getElementsByClassName("img")[5].src = "img/avatar.png";
    document.getElementsByClassName("img")[6].src = "img/graduation-cap.png";
    document.getElementsByClassName("img")[7].src = "img/package.png";
    document.getElementsByClassName("img")[8].src = "img/list.png";
    document.getElementsByClassName("img")[9].src = img;
}


    var st = document.getElementById("date")

    function time(){
    var d = new Date()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    var dayName = days[d.getDay()];
    st.innerHTML = dayName +" " + d.getDay()

    document.getElementById("time").innerHTML = d.getHours().toString() + (":") + d.getMinutes().toString()
    setTimeout(time, 1000)
}
   
    
    
