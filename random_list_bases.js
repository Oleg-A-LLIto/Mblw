function prices() {
	var prices = document.getElementsByTagName("pricetag");
	for(var i=0; i<prices.length; i++){
		prices.item(i).innerHTML = Math.round((Math.random()*5+5)*100)/100 + "$";
	}
}
		
function names() {
	var first_names = ['Funny', 'Stubborn', 'Clumsy', 'Cute', 'Curious', 'Adorable', 'Happy', 'Weird', 'Small', 'Friendly', 'Fluffy', 'Little'];
	var last_names = ['boi', 'sir', 'ball', 'lady', 'bun'];
	var names = document.getElementsByTagName("nametag");	
	for(var i = 0; i<names.length; i++){
		names.item(i).innerHTML = first_names[Math.floor(Math.random() * first_names.length)] +" " + last_names[Math.floor(Math.random() * last_names.length)];
		
	}
}

function pictures() {
	var picnumber = 19;
	var pics = document.getElementsByClassName("card_img");
	for(var i=0; i<pics.length; i++){
		pics.item(i).src = "images/toy/base/ ("+Math.ceil(Math.random()*picnumber)+").jpg";
	}
}
		
window.onload = function(){
	prices();
	names();
	pictures()
}