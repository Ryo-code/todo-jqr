//check off specific to-dos by clicking
$('ul').on("click", "li", function(){ 
  //↑this means "when you CLICK on an LI inside a UN"
  $(this).toggleClass("completed");
});

//click on X to delete to-do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  }); 
  event.stopPropagation();; //stops event bubbling
});

$("input[type='text']").keypress(function(event){
  //"which" is the character code. "13" is the enter key
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span>" + todoText + "</li>")
  }
})