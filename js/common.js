$(document).ready(function() {


  $("nav li a").each(function(){
    if ($(this).parent().find("ul").length > 0 ) {
      console.log("sdf");
    } else {
      $(this).parent().toggleClass("nodepth");
    }
  
  });




  $("nav li a").click(function() {

    $(this).siblings().toggleClass("active");
    $(this).parent().toggleClass("active");



  });


});
