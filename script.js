//Script
$(document).ready(function(){



console.log('JavaScript loaded');
	
	function printDom(){
		var all = document.getElementsByTagName("*");
		for(i=0; i < all.length; i++){
			console.log(all[i]);
		}		
	}

	printDom();
})
