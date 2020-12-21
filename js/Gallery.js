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
$(".cts05").hide();
$(".cts06").hide();

$("#more_Btn2").hide();
$("#more_Btn3").hide();
$("#more_Btn4").hide();
$("#more_Btn5").hide();
$("#more_Btn6").hide();
$("#less_Btn").hide();

$("#more_Btn1").click(function() {
    $(".cts02").show();

    $("#more_Btn1").hide();
    $("#more_Btn2").show();
})

$("#more_Btn2").click(function() {
    $(".cts03").show();

    $("#more_Btn2").hide();
    $("#more_Btn3").show();
})

$("#more_Btn3").click(function() {
    $(".cts04").show();

    $("#more_Btn3").hide();
    $("#more_Btn4").show();
})

$("#more_Btn4").click(function() {
    $(".cts05").show();

    $("#more_Btn4").hide();
    $("#more_Btn5").show();
})

$("#more_Btn5").click(function() {
    $(".cts06").show();

    $("#more_Btn5").hide();
    $("#less_Btn").show();
})

$("#less_Btn").click(function() {
    $(".cts02").hide();
    $(".cts03").hide();
    $(".cts04").hide();
    $(".cts05").hide();
    $(".cts06").hide();

    $("#less_Btn").hide();

    $("#more_Btn1").show();

    href="#image";
})

$(".heart_on").hide();

$(".heart_off").click(function() {
    $(".heart_on").show();

    $(".heart_off").hide();
})
$(".heart_on").click(function() {
    $(".heart_on").hide();

    $(".heart_off").show();
})
