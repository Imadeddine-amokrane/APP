function showCity() {
		 

		  let nomVilleSelectionnee = document.getElementById("choisirville" ).value;
		  
		  let cities = document.getElementsByClassName("city");
		  let l=cities.length;

		  for (i=0; i<l; i++) {
    			if (cities[i].id == nomVilleSelectionnee) {
    				  
    				  cities[i].style.display= "";
   				 } else {
      				
      				cities[i].style.display= "none";
    				}
  				}
		  
}