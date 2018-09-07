$("#aboutButton").click(function(){
  $(".about").toggleClass('aboutClicked');
  $(".hidden").fadeIn(1000);
});

$("#aboutBack").click(function(){
  $(".about").toggleClass('aboutClicked');
  $(".hidden").hide();
});
