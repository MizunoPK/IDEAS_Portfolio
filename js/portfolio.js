//Move the jumbotron down below the navbar
var navHeight =  $(".navbar").outerHeight(true); //get navbar height
$(".jumbotron").css("margin-top", navHeight); //set jumbotron top margin