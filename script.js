const go = (elem) => {
    window.scroll({
        top: document
            .querySelector(elem)
            .offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

var mail = document.getElementById("mail").innerHTML = "\u{1F4E7} marquestrigueiro@gmail.com"
var phone = document.getElementById("phone").innerHTML = "\u{1F4F1} 920332386"
var linkedin = document.getElementById("linkedin").innerHTML += " Linkedin"
var git = document.getElementById("git").innerHTML += " GitHub"

