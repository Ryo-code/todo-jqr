//check off specific to-dos by clicking
$('li').click(function(){
  $(this).toggleClass("completed");
});

//click on X to delete to-do
$("span").click(function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  }); //the parent of the span you clicked on is the li
  event.stopPropagation();; //jQuery method that stops event bubbling
});