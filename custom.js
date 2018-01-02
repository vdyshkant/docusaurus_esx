
$( document ).ready(function() {
    // console.log( "ready!" );
    $(".sp-js .sp__title").click (function(e){
        e.preventDefault();
        $(this).find('.sp__content').slideToggle();
    });
});
