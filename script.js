//Script
$(document).ready(function(){



console.log('JavaScript loaded');

	//make a loop, count to 10

	for (i=0; i<11; i++){
		console.log(i);
		//document.write(i);
	}
	
	function printDom(){
		var all = document.getElementsByTagName("*");
		for(i=0; i < all.length; i++){
			console.log(all[i]);
		}		
	}

	function printMyName(){
		//make a loop, print your name
		var myName = 'Christian lee McAllister';
		var el = document.getElementById("name");
		for (i=0; i<myName.length; i++){
			console.log(myName[i]);
			//Write to our html page.
			//document.write(myName[i]);//dont use this very often
			el.innerHTML += myName[i];
//jquery
		$('h1').text("testing this jquery stuff").addClass('red');		
		}
	
	}

	//Create an event for button click
	var clickme = document.getElementById("clickMe");
	console.log(clickme);
	clickme.onclick = printMyName;
	printDom();
})