
$( document ).ready(function() {
    // console.log( "ready!" );
    $(".sp-js .sp__title").click (function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });
});
