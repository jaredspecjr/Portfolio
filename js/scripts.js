$(document).ready(function(){
  setTimeout(function(){
    $(".introHide").fadeOut(1600);
  },5000);
});

$("#kotaku").click(function(){
  window.location.href = "https://jaredspecjr.github.io/kotaku-landing/";
});

$("#demoDay").click(function(){
  window.location.href = "https://github.com/jaredspecjr/Capstone-game";
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
