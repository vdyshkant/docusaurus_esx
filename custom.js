
$( document ).ready(function() {
    // console.log( "ready!" );
    $(".sp-js").click (function(e){
        e.preventDefault();
        $(this).find('.sp-content').slideToggle();
    });
});
