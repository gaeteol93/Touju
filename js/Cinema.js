$("#head_Title").click(function() {
    location.href="index.html";
}) 

$("#head_home").click(function() {
    location.href="index.html";
}) 

$("#head_about").click(function() {
    location.href="About.html";
}) 

$("#head_gallery").click(function() {
    location.href="Gallery.html";
}) 

$("#head_video").click(function() {
    location.href="Cinema.html";
}) 

$(".cts02").hide();
$(".cts03").hide();
$(".cts04").hide();

$("#more_Btn2").hide();
$("#more_Btn3").hide();

$("#less_Btn").hide();

$("#more_Btn1").click(function() {
    $(".cts02").show();

    $("#more_Btn2").show();
    $("#more_Btn1").hide();
})

$("#more_Btn2").click(function() {
    $(".cts03").show();

    $("#more_Btn3").show();
    $("#more_Btn2").hide();
})

$("#more_Btn3").click(function() {
    $(".cts04").show();

    $("#more_Btn4").show();
    $("#more_Btn3").hide();

    $("#less_Btn").show();
})

$("#less_Btn").click(function() {
    $(".cts02").hide();
    $(".cts03").hide();
    $(".cts04").hide();

    $("#more_Btn4").hide();
    $("#more_Btn1").show();

    $("#less_Btn").hide();
})