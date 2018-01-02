
$( document ).ready(function() {
    // console.log( "ready!" );
    $(".sp-js .sp-js-master").click (function(e){
        e.preventDefault();
        $(this).toggleClass("open");
        $(this).find('.burgSpoiler').toggleClass("open");
        $(this).next().slideToggle();
    });
});
