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
    const increment = window.scrollY;
    const elements = ["react", "javascript", "html", "css", "java"];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.transform = `rotate(${increment}deg)`;
        }
    });
}

window.addEventListener("scroll", rotate);


$(".flip").click(function () {
    $(".flip").animate({ width: 0 }, "fast");
    $(".panel").delay(200).slideDown("fast");
    $(".panel").css("display", "flex");

});
$(".exit").click(function () {
    $(".panel").slideUp("fast");
    $(".flip").delay(200).animate({ width: 70 }, "fast");
});



var question = () => {
    var questionUser = document.getElementById("question").value;
    $("#questionUser").html(questionUser);
    if (questionUser.match(/name/)) {
        $("#bot").html('<p class="robotAnswer"><audio autoplay> <source src="sound/robot.mp3"type="audio/mpeg"></audio><span style="font-size: 14px;">🤖</span></br>My name is Dudu Bot and my master is Luis Eduardo Marques</p>');
    } else if (questionUser.match(/(nationality|country|nation)/)) {
        $("#bot").html('<p class="robotAnswer"><audio autoplay> <source src="sound/robot.mp3"type="audio/mpeg"></audio><span style="font-size: 14px;">🤖</span></br>My master has Portuguese and Brazilian citizenship</p>');

    } else if (questionUser.match(/(mail|contact)/)) {
        $("#bot").html('<p class="robotAnswer"><audio autoplay> <source src="sound/robot.mp3"type="audio/mpeg"></audio><span style="font-size: 14px;">🤖</span></br>Contact email is marquestrigueiro@gmail.com</p>');
    } else if (questionUser.match(/(language|stack)/)) {
        $("#bot").html('<p class="robotAnswer"><audio autoplay> <source src="sound/robot.mp3"type="audio/mpeg"></audio><span style="font-size: 14px;">🤖</span></br>Do you want to dowload my CV to have this information? <a target="_blank" href="doc/Luis Eduardo Trigueiro CV PT_F.pdf">click</a></p>');
    } else {
        $("#bot").html('<p class="robotAnswer"><audio autoplay> <source src="sound/robot.mp3"type="audio/mpeg"></audio><span style="font-size: 14px;">🤖</span></br>I do not know this information. Maybe here. <a target="_blank" href="doc/Luis Eduardo Trigueiro CV PT_F.pdf">click</a></p>');

    }

}




