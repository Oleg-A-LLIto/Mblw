function prices() {
	var prices = document.getElementsByTagName("pricetag");
	for(var i=0; i<prices.length; i++){
		prices.item(i).innerHTML = Math.round((Math.random()*10+10)*100)/100 + "$";
	}
}
		
function names() {
	var first_names = ['Cuti', 'Meme', 'Lasley', 'Dorian Grey', 'Vasya', 'Squishy', 'Trollo', 'Petra', 'King', 'Dendy', 'Chilli', 'Gustav', 'Eugen', 'Mili', 'Marsey', 'Doge', 'Nenneke', 'Septim', 'Amore', 'Pablo', 'Mark', 'Dorito', 'Claus'];
	var names = document.getElementsByTagName("nametag");	
	for(var i = 0; i<names.length; i++){
		names.item(i).innerHTML = first_names[Math.floor(Math.random() * first_names.length)];
		
	}
}

function pictures() {
	var picnumber = 14;
	var pics = document.getElementsByClassName("card_img");
	for(var i=0; i<pics.length; i++){
		pics.item(i).src = "images/toy/preset/("+Math.ceil(Math.random()*picnumber)+").jpg";
        pics.item(i).alt = "plush toy preset";
	}
}
		
window.onload = function(){
	prices();
	names();
	pictures()
}