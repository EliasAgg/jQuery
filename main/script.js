// Fusée qui décolle
$(".fusee").click(function(){
   $(this).animate({
       "position":"relative",
       "bottom":"800px",
   }, 800);
    $(this).animate({
        "position":"relative",
        "bottom":"0px",
   }, 3000);
});

// Fusée hover feedback
$(".fusee").mouseenter(function(){
    $(this).animate({
        "width":"105px",
        "height":"105px",
    }, 50);
    $(this).animate({
        "width":"100px",
        "height":"100px",
    }, 150);
})

// clignotement
function blinkC(){
    $("#blinking").animate({"opacity":"1"}, 500);
    $("#blinking").animate({"opacity":"0"}, 500);
    blinkC();
}

$(document).ready(function() {
    blinkC();  
});

// Reveal text at interval
function revealText(target, text, i, interval) {
    if (i < text.length) {
        $(target).append(text[i++]);
        setTimeout(function () { revealText(target, text, i, interval); }, interval);
    }
}
revealText("#targetText", "Mission to Mars: ", 0, 50);   

// Change le texte du "logo" quand hover nav
$("#nav1").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", "Missions", 0, 50);
    }
);

$("#nav2").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", "The planet", 0, 50);
    }
);

$("#nav3").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", "Videos", 0, 50);
    }
);

$("#nav4").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", "navigation #4", 0, 50);
    }
);