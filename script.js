const go = (elem) => {
    window.scroll({
        top: document
            .querySelector(elem)
            .offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}



function rotate() {
    const increment = window.scrollY
    document.getElementById("react").style.transform = `rotate(${increment}deg)`;
    document.getElementById("javascript").style.transform = `rotate(${increment}deg)`;
    document.getElementById("html").style.transform = `rotate(${increment}deg)`;
    document.getElementById("css").style.transform = `rotate(${increment}deg)`;

}

window.addEventListener("scroll", rotate)