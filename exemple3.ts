
import * as promisify from "./promisify";


/*
La methode la plus sûr, on utilise les intérface définit dans le module
promisify pour définire la fonction. Si on fait une erreur le compilateur
nous l'indiquerà
*/

//let myAsyncTyped: (input: number, callback: (output: number)=>void)=> void= //L'équivalent sans interface
let myAsyncFullyTyped: promisify.AsyncFunction11<number, string>= 
function(input, callback){

    setTimeout(()=>{

        callback("I am a fully typed function" + input.toString());

    },1000);

};



(async () => {

        for (let i of [1,2,3,4] ) {

            /*
            Avec la methode sûr on a pas besoin de définire le types
            car ils on déjà été vérouillé au moment de la definition de la fonction
            L'utilisation des interface définit dans le module est facultative, du moment
            que la fonction est complétement typé (c'est à dire le callvack aussi) 
            on a pas besoin de présisé les type ici.
            */

            let output = await promisify.i1o1(myAsyncFullyTyped)(i);

            console.log(output);
            
        }





})();
