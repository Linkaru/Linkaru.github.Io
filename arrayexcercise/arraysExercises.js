$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
       var shapes1 = ($(".numElements").val());
        //CALL listElements
        listElements(shapes1);
         
    });
    $(".q3-function").click(function() {
        //CALL fillArray
        fillArray();
        
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
    });
});

var output = function() {
     var arr = [2, 5, 6, 10, 16, 7, 8];
    for( i=0; i < arr.length; i+=2){
     $(".q1-output").append(arr[i] +"<br>");
    }
};

var listElements = function(n) {
  var shapes = ["Circle", "Square", "Rectangle", "Trapezoid","Triangle", "Rhombus", "Octagon"];
   for (i=0; i < n; i++)
	$(".q2-output").append(shapes[i] + "<br>");

    
};

var fillArray = function() {
 var arr = [];
 for(i=0; i < arr.length; i++){
   $(".q3-output").append(arr.push(i) + "<br>");
 }
};
var pairingArrays = function() {

};