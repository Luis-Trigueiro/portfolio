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
    document.getElementById("java").style.transform = `rotate(${increment}deg)`;

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
        $("#bot").html('<p class="robotAnswer"><span style="font-size: 14px;">🤖</span></br>My name is Dudu Bot and my master is Luis Eduardo Marques</p>');
    } else if (questionUser.match(/(nationality|country|nation)/)) {
        $("#bot").html('<p class="robotAnswer"><span style="font-size: 14px;">🤖</span></br>My master has Portuguese and Brazilian citizenship</p>');

    } else if (questionUser.match(/(mail|contact)/)) {
        $("#bot").html('<p class="robotAnswer"><span style="font-size: 14px;">🤖</span></br>Contact email is marquestrigueiro@gmail.com</p>');
    } else if (questionUser.match(/(language|stack)/)) {
        $("#bot").html('<p class="robotAnswer"><span style="font-size: 14px;">🤖</span></br>Do you want to dowload my CV to have this information? <a target="_blank" href="doc/Luis Eduardo Trigueiro CV PT_F.pdf">click</a></p>');
    }else{
        $("#bot").html('<p class="robotAnswer"><span style="font-size: 14px;">🤖</span></br>I do not know this information. Maybe here. <a target="_blank" href="doc/Luis Eduardo Trigueiro CV PT_F.pdf">click</a></p>');

    }

}




