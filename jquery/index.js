$("h1").addClass("big");
$("button").on("click",function(){
    $("h1").slideUp().delay(1000).slideDown();
});