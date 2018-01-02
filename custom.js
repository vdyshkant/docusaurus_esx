
$( document ).ready(function() {
    // console.log( "ready!" );
    $(".sp-js .sp-js-master").click (function(e){
        e.preventDefault();
        $(this).find('.spoiler').toggleClass("open");
        $(this).next().slideToggle();
    });


    // nav navToggle
    // $(".spoiler").click (function(){
    //   $(this).toggleClass("open");
    //   $(this).siblings('.sp-js-slave').slideToggle();
    // });
});
