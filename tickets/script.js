/*-----------------------------------------------------------------------------*/
//                      Rocket launch
/*-----------------------------------------------------------------------------*/
// Create a "keys" array, and a string with the code.
var keys = [], konami = "38,38,40,40,37,39,37,39,66,65,13";
// bind a keydown listener to the document.
$(document).keydown(function(keyPressed) {
    // push the keycode to the keys array.
  keys.push(keyPressed.keyCode);
    // check if the "keys.toString" 
  if (keys.toString().indexOf(konami) >= 0 ) {
      // disconnect the event handler
    $(document).unbind('keydown',arguments.callee);
      // stuff we want to do
    $(".fusee").animate({"position":"relative","bottom":"800px",}, 800); // rocket launch in 800ms.
    $(".fusee").animate({"position":"relative","bottom":"0px",}, 3000); // rocket land in 3s.
  }
});

/*-----------------------------------------------------------------------------*/
//                      Ticket nasa logo opacity
/*-----------------------------------------------------------------------------*/

var nbPass = 0;

$("#buttonFormTicket").click(function(){
    var age = parseInt($("#ageFetch").val());
    var lname = $("#lnameFetch").val().trim();
    var name = $("#nameFetch").val().trim();
    if (isNaN(age) == true){
        $("#formTicketError").html("Please enter an age");
    } else if (lname == "" || isNaN(parseInt(lname)) == false){
        $("#formTicketError").html("Please enter a last name");
    } else if (name == "" || isNaN(parseInt(name)) == false){
        $("#formTicketError").html("Please enter a name");
    } else if (nbPass >= 4){
        $("#formTicketError").html("Maximum capacity reached");
        setTimeout(function(){$("#formTicketError").hide();}, 2000);
    }
    else{
        document.getElementById("ticketImageBody").innerHTML += 
        "<div class=\"ticketColumn\"><img src=\"https://i.imgur.com/TfZICsn.png\" class=\"persona\" /><br><span class=\"passengerNameLabel\">Name: </span><span class=\"passengerName\">" + name + "</span><br><span class=\"passengerNameLabel\">L-Name: </span><span class=\"passengerName\">" + lname + "</span><br><span class=\"passengerAgeLabel\">Age: </span><span class=\"passengerAge\">" + age + "</span></div>";
        nbPass++;
        $("#formTicketError").html("");
        $("#nameFetch").val("");
        $("#lnameFetch").val("");
        $("#ageFetch").val("");
    }
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
        revealText("#newTargetText", " // Technologies", 0, 50);
    }
);

//$("#nav4").mouseenter(
//    function(){
//        document.getElementById("newTargetText").innerHTML = " ";
//        revealText("#newTargetText", "navigation #4", 0, 50);
//    }
//);