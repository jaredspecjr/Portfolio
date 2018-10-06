$(document).ready(function(){
  setTimeout(function(){
    $(".introHide").fadeOut(1600);
  },5000);
});


$("#kotaku").click(function(){
  window.open("https://jaredspecjr.github.io/kotaku-mock/", "_blank");
});

$("#demoDay").click(function(){
  window.open("https://console.firebase.google.com/project/videogame-bef13/overview", "_blank");
});

$("#bikeIndex").click(function(){
  window.open("https://jaredspecjr.github.io/bike-index/", "_blank");
});

$("#beanLounge").click(function(){
  window.open("https://bean-lounge.firebaseapp.com/","_blank");
});

$("#aboutButton").click(function(){
  $(".about").toggleClass('aboutClicked');
  $(".hiddenAbout").fadeIn(1000);
});

$("#aboutBack").click(function(){
  $(".about").toggleClass('aboutClicked');
  $(".hiddenAbout").hide();
});

$("#skillsButton").click(function(){
  $(".skills").toggleClass('skillsClicked');
  $(".hiddenSkills").fadeIn(1000);
});

$("#skillsBack").click(function(){
  $(".skills").toggleClass('skillsClicked');
  $(".hiddenSkills").hide();
});

$("#projectsButton").click(function(){
  $(".projects").toggleClass('projectsClicked');
  $(".hiddenProjects").fadeIn(1000);
});

$("#projectsBack").click(function(){
  $(".projects").toggleClass('projectsClicked');
  $(".hiddenProjects").hide();
});

$("#contactButton").click(function(){
  $(".contact").toggleClass('contactClicked');
  $(".hiddenContact").fadeIn(1000);
});

$("#contactBack").click(function(){
  $(".contact").toggleClass('contactClicked');
  $(".hiddenContact").hide();
});
