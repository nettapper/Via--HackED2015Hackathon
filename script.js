// Paragraph Example
// d3.select("body").append("p").text("New paragraph!");
// var data = [1,2,3,4,5];
// d3.select("body").selectAll("p").data(data).enter().append("p")
    // .text(function(d){return d;})
    // .style("color", function(d) {
	// if (d <= 3) {   //Threshold of 15
	    // return "red";
	// } else {
	    // return "purple";
	// }
    // });

// Bar Graph Example
//var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3 ];
var dataset = [];                        //Initialize empty array
for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.round(Math.random() * 30);  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}
d3.select("body").selectAll("div").data(dataset).enter().append("div").attr("class", "bar").style("height", function(d){return d*5 + "px"});
