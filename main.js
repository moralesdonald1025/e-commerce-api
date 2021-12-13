const request = new XMLHttpRequest();

request.open("GET", "http://localhost:4000/api/product/all");

request.send();
console.log(request.responseText);

request.addEventListener("load", function(){
	console.log(this.responseText)
});