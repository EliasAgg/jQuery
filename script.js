var isFinished = 1;

$(".logo").click(function(){
   $(this).animate({
       "position":"relative",
       "bottom":"800px",
   }, 800);
    $(this).animate({
        "position":"relative",
        "bottom":"0px",
   }, 3000);
});

$(".logo").mouseenter(function(){
    $(this).animate({
        "width":"105px",
        "height":"105px",
    }, 50);
    $(this).animate({
        "width":"100px",
        "height":"100px",
    }, 50);
})

function blinkC(){
    $("#blinking").animate({"opacity":"1"}, 500);
    $("#blinking").animate({"opacity":"0"}, 500);
    window.setTimeout(function() { blinkC() }, 500)
//    $("#blinking").show(100);
}

$(document).ready(function() {
    blinkC();  
});

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {

  showText("#targetText", "Mission to Mars", 0, 50);   

});

function showTextYo(target, message, index, interval){
    if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

// Change le texte du "logo" quand hover nav
$("#nav1").mouseenter(
    function(){
        document.getElementById("targetText").innerHTML = " ";
        showTextYo("#targetText", "navigation #1", 0, 50);
    }
).mouseleave(
    function(){
        setTimeout(function(){
            document.getElementById("targetText").innerHTML = "";
            showTextYo("#targetText", "Mission to Mars", 0, 50);
        }, 800)
    }
);

$("#nav2").mouseenter(
    function(){
        document.getElementById("targetText").innerHTML = " ";
        showTextYo("#targetText", "navigation #2", 0, 50);
    
    }
).mouseleave(
    function(){
        setTimeout(function(){
            document.getElementById("targetText").innerHTML = "";
            showTextYo("#targetText", "Mission to Mars", 0, 50);
        }, 800)
    }
);

$("#nav3").mouseenter(
    function(){
        document.getElementById("targetText").innerHTML = " ";
        showTextYo("#targetText", "navigation #3", 0, 50);
    }
).mouseleave(
    function(){
        setTimeout(function(){
            document.getElementById("targetText").innerHTML = "";
            showTextYo("#targetText", "Mission to Mars", 0, 50);
        }, 800)
    }
);

$("#nav4").mouseenter(
    function(){
        document.getElementById("targetText").innerHTML = " ";
        showTextYo("#targetText", "navigation #4", 0, 50);
    }
).mouseleave(
    function(){
        setTimeout(function(){
            document.getElementById("targetText").innerHTML = "";
            showTextYo("#targetText", "Mission to Mars", 0, 50);
        }, 800)
    }
);
