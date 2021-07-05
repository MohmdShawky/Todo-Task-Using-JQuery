$(document).ready(function () {
  $("ul").on("click","li",function(){
    $(this).toggleClass("task-completed");
  });

  $("ul").on("click","span",function(event){
    $(this).parent().fadeOut(function(){
      $(this).remove();
    });
    event.stopPropagation();
  });

  //Add task When Click Enter
  $("input[type='text']").keypress(function(event){
    if(event.which === 13){
      var task = $(this).val();

      $(this).val(" ");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + task + "</li>");
    }
  });
})