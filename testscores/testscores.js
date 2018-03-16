$(".submit").click(function() {
    for(var i=0; i < 26; i++) {
    	$(".inputs").append(arr[i]);
    }
});

$(".calculate").click(function() {
    for(var i=0; i < arr.length; i++)
    sum=sum + arr[i];
    Average = sum/arr.length;
});