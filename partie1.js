let age = 11; // on commence par l'age minimum
let prixbilletm16 = 1500; // prix du billet en FCFA pour les moins de 16 ans. 
let prixbillet16p = 2500; // prix du billet en FCFA pour 16 ans et plus
let billetm16 = 0; //Nombre de ticket vendu aux moins de 16 ans
let billet16p = 0; //Nombre de ticket vendu aux plus de 16 ans
let Recettem16 = 0; // Le montant total des tickets vendus aux moins 16 ans
let Recette16p = 0; // Le montant total des tickets vendus aux plus 16 ans
let Recettetotale = 0; // Le montant de la vente des tickets aux 10 personnes
let Totalticket = 0; // tous les tickets vendus
while(age >= 11 && age <= 20){// Parcours les ages des 10 personnes. ces ages sont compris entre 11 ans et 20 ans.
    if(age < 16) { // verifie si l'age est inferieur a 16 ans
      billetm16++;
      Recettem16 += prixbilletm16; // donne la recette realisé sur les billets des moins de 16 ans
      console.log(`Age : ${age}, prix du billet : ${prixbilletm16}`); // affiche age des moins de 16 ans et le prix de leurs billet
    }
    else{ // verifie si l'age est superieure ou égale a 16 ans
      billet16p++;
      Recette16p += prixbillet16p; // donne la recette realisé sur les billets des plus de 16 ans
      console.log(`Age : ${age}, prix du billet : ${prixbillet16p}`); // affiche age des plus de 16 ans et le prix de leurs billet
    }
    age+=1; // ajoute 1 a l'age
      }
  Recettetotale = Recette16p + Recettem16
  console.log(`Recettetotale : ${Recettetotale}`)
  Totalticket = billet16p + billetm16
  console.log(`Ticketmoins16: ${billetm16}`)
  console.log(`Ticket16p : ${billet16p}`)
  console.log(`Totalticket : ${Totalticket}`)