/*-----------------------------------------------------------------------------*/
//                      Rocket launch
/*-----------------------------------------------------------------------------*/
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

/*-----------------------------------------------------------------------------*/
//                      Ticket nasa logo opacity
/*-----------------------------------------------------------------------------*/
$("#nasaLogo").mouseenter(function(){
    $(this).animate({
        "opacity":"1"
    }, 150);
}).mouseleave(function(){
    $(this).animate({
        "opacity":"0.5"
    }, 150);
});


/*-----------------------------------------------------------------------------*/
//                      Rocket hover feedback
/*-----------------------------------------------------------------------------*/
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

/*-----------------------------------------------------------------------------*/
//                      Print multiple items
/*-----------------------------------------------------------------------------*/
function printItems(target, number, whatToPrint){
    for (i=0; i < number; i++){
        document.getElementById(target).innerHTML += whatToPrint;
    }
}
/*-----------------------------------------------------------------------------*/
//                      textFetch1
/*-----------------------------------------------------------------------------*/
$("#buttonFetch1").click(function(){
//    document.getElementById("textPut1").innerHTML += $("#textFetch1").val();
    var i = parseInt($("#textFetch1").val());
    if(typeof i == "number"){
        printItems("textPut1", i, "<span id=\"selectablePpl\">0 </span>");
    }
    else{
        alert("Nonjout");
    }
});

/*-----------------------------------------------------------------------------*/
//                      Blinking
/*-----------------------------------------------------------------------------*/
function blinkC(target){
    $(target).animate({"opacity":"1"}, 500);
    $(target).animate({"opacity":"0"}, 500);
    blinkC(target);
}

$(document).ready(function() {
    blinkC("#blinking");  
});

/*-----------------------------------------------------------------------------*/
//                      Reveal text at interval
/*-----------------------------------------------------------------------------*/
function revealText(target, text, i, interval) {
    if (i < text.length) {
        $(target).append(text[i++]);
        setTimeout(function () { revealText(target, text, i, interval); }, interval);
    }
}
revealText("#targetText", "Ticket to Mars", 0, 50);   

/*-----------------------------------------------------------------------------*/
//                      Change title when hover nav
/*-----------------------------------------------------------------------------*/
$("#nav1").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", " // Missions", 0, 50);
    }
);

$("#nav2").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", " // The planet", 0, 50);
    }
);

$("#nav3").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", " // Videos", 0, 50);
    }
);

$("#nav4").mouseenter(
    function(){
        document.getElementById("newTargetText").innerHTML = " ";
        revealText("#newTargetText", "navigation #4", 0, 50);
    }
);