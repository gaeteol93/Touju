
// 컨텐츠
$(".more_Cts").hide();
$(".more_Cts2").hide();
$(".more_Cts3").hide();

// 숨김버튼
$("#less_Btn1").hide();
$("#less_Btn2").hide();
$("#less_Btn3").hide();

// 더보기 버튼
$("#more_Btn2").hide();
$("#more_Btn3").hide();

// 더보기 버튼1
$("#more_Btn1").click(function() {
    $("#more_Btn1").hide();
    $("#more_Btn2").show();

    $("#less_Btn1").show();

    $(".more_Cts").show();
})
// 더보기 버튼 2
$("#more_Btn2").click(function() {
    $(".more_Cts2").show();

    $("#more_Btn2").hide();
    $("#more_Btn3").show();

    $("#less_Btn1").hide();
    $("#less_Btn2").show();
})
// 더보기 버튼 3
$("#more_Btn3").click(function() {
    $(".more_Cts3").show();

    $("#more_Btn3").hide();

    $("#less_Btn2").hide();
    $("#less_Btn3").show();
})

// 숨기기 버튼 1
$("#less_Btn1").click(function() {
    $(".more_Cts").hide();

    $("#more_Btn1").show();
    $("#more_Btn2").hide();

    $("#less_Btn1").hide();
})
// 숨기기 버튼 2
$("#less_Btn2").click(function() {
    $(".more_Cts2").hide();

    $("#more_Btn2").show();
    $("#more_Btn3").hide();

    $("#less_Btn1").show();
    $("#less_Btn2").hide();
})
// 숨기기 버튼 3
$("#less_Btn3").click(function() {
    $(".more_Cts3").hide();

    $("#more_Btn3").show();

    $("#less_Btn2").show();
    $("#less_Btn3").hide();
})


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


$(".heart_on").hide();

$(".heart_off").click(function() {
    $(".heart_on").show();

    $(".heart_off").hide();
})
$(".heart_on").click(function() {
    $(".heart_on").hide();

    $(".heart_off").show();
})