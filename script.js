// My script
$(document).ready(function(){
    $("a").addClass("aBold");
    $("a").click(function(event){
	alert("baby come back!");
	event.preventDefault();
	console.log("i won't let you leave!!");
    });
});
