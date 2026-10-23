let age = 11 ;
const prixm16 = 1500;
const prix16p = 2500;
let nbrebilletm16 = 0;
let nbrebillet16p = 0;
let totalrecette = 0;
do{
    if(age<16){
        console.log(`Age : ${age}ans prix du billet : ${prixm16}`);
        totalrecette+=prixm16;
        nbrebilletm16++
    }
    else{
         console.log(`Age : ${age}ans prix du billet : ${prix16p}`);
        totalrecette+=prix16p;
        nbrebillet16p++
    }
    age++
} while(age<=20);

console.log(`Recette : ${totalrecette}`);

console.log(`Nombre billet des moins de 16 ans : ${nbrebilletm16}`);
console.log(`Nombre billet des 16 ans et plus : ${nbrebillet16p}`);
