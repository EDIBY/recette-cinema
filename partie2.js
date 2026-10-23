let age = 11; // on commence par l'age minimum
let prixbilletm16 = 1500; // prix du billet en FCFA pour les moins de 16 ans. 
let prixbillet16p = 2500; // prix du billet en FCFA pour 16 ans et plus
let billetm16 = 0; //Nombre de ticket vendu aux moins de 16 ans
let billet16p = 0; //Nombre de ticket vendu aux plus de 16 ans
let billet18 = 0; // nombre de ticket vendu aux plus de 18 ans
let Recettem16 = 0; // Le montant total des tickets vendus aux moins 16 ans
let Recette16p = 0; // Le montant total des tickets vendus aux plus 16 ans
let Recette18plus = 0; //Le montant total des tickets vendus aux plus 18 ans
let prixbillet18 = 2000; // prix du billet en FCFA pour les plus de 18 ans
let Recettetotale = 0; // Le montant de la vente des tickets aux 10 personnes 
let Totalticket = 0; // Tous les tickets vendus   
while(age >= 11 && age <= 20){// Parcours les ages des 10 personnes. ces ages sont compris entre 11 ans et 20 ans.
    if(age < 16) { // verifie si l'age est inferieur a 16 ans
      billetm16++;
      Recettem16 += prixbilletm16; // donne la recette realisé sur les billets des moins de 16 ans
    }
    else if(age >= 16 && age <= 17){  // verifie si l'age est superieure ou égale a 16 ans
      billet16p++;
      Recette16p += prixbillet16p; // donne la recette realisé sur les billets des plus de 16 ans
    }
     else {
      billet18++;
      Recette18plus += prixbillet18; //
     }
    age++;
}
  Recettetotale = Recette16p + Recettem16 + Recette18plus
  console.log(`Recettetotale : ${Recettetotale}`)