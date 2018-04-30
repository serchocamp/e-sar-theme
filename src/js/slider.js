$(document).ready(function(){
	setInterval(function(){ $(".carousel-indicators li:last").hasClass("active")? $(".carousel-indicators li:first").trigger("click") : $(".carousel-indicators").find(".active").next().trigger("click");},4000);
})