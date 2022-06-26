const Incrementer = (tab) =>
{
    const n = tab.length;
//-------------ajouter 1 au dernier nomber de tableau----------------
    tab[n - 1] += 1;
    let base = tab[n - 1] / 10;
    tab[n - 1] = tab[n - 1] % 10;
//----------vérifier si on peut ajouter 1 aux autres cases de tableau [0 à n-2]
    for (let i = n - 2; i >= 0; i--) {
        if (base == 1) {
            tab[i] += 1;
            base = tab[i] / 10;
            tab[i] = tab[i] % 10;
        }
    }
     
//----------En cas de base reste à egale 1 => on besoin d'ajouter 1 au debut de tableau :
    if (base == 1) tab.unshift(1);

  return tab
}

//***************************************page HTML****************************************** */
//---------récupérer le tableau d'entrée par la page HTML et calculer la valeur incrémenté
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let targetInput = e.target.querySelector('input').value;
  const words = targetInput.split(',').map(Number);
  document.getElementById("result").innerHTML="le résultat = ["+Incrementer(words)+"]";
});
