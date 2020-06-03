$(document).ready(function () {
    let screenHeight =$(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
     let currentPosition =$(this).scrollTop();
     console.log(currentPosition);
     if (currentPosition > screenHeight-100){
       $(".side-nav").addClass("side-nav-scroll");
     } else {
         $(".side-nav").removeClass("side-nav-scroll");

     }

    });


});
$(window).on("load",function () {
$(".loader-container").fadeOut(500,function () {
    $(this).remove();
});
});
