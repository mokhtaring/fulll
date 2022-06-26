const FizzBuzz = (N) =>{
    var tab=[]
   for (i=1; i<=N; i++) {

        // si le nomber est divisé par 5 et 3, on enregistre "FizzBuzz"
        if ( i % 5 ===0 && i % 3 ===0) { 
            tab=[...tab,"FizzBuzz"];
        }
           // si le nomber est divisé par 3, on enregistre "Fizz"
           else if ( i % 3 === 0 ) { 
              tab=[...tab,"Fizz"];}
          
                // si le nomber est divisé par 5, on enregistre "Buzz"
                else if ( i % 5 === 0) {
                    tab=[...tab,"Buzz"];         
                }
                    // si le nomber n'est pas divisé par 5 et/ou 3, on enregistre le nomber 
                    else { 
                        tab=[...tab,i];
                    } 
     }
     return tab
}
//***************************************page HTML****************************************** */
//---------récupérer le nomber d'entrée par la page HTML et afficher le résultat de FizzBuzz
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let targetInput = e.target.querySelector('input').value;
  const words = parseInt(targetInput, 10);
  document.getElementById("result").innerHTML=FizzBuzz(words).map(element=>`<div>${element}</div>`)
});
