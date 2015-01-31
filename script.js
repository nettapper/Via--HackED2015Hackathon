// Paragraph Example
d3.select("body").append("p").text("New paragraph!");
var data = [1,2,3,4,5];
d3.select("body").selectAll("p").data(data).enter().append("p")
    .text(function(d){return d;})
    .style("color", function(d) {
	if (d <= 3) {   //Threshold of 15
	    return "red";
	} else {
	    return "purple";
	}
    });

