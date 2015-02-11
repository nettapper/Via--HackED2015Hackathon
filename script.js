// My script
$(document).ready(function(){
    $("a").click(function(event){
	alert("baby come back!");
	event.preventDefault();
	console.log("i won't let you leave!!");
    });
});
