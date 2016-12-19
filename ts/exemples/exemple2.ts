
import * as promisify from "../index";



/*
On a typer la fonction un minimum mais pas utilisé les interface du
modure promisify
*/

let myAsyncTyped: (input:number, callback:Function)=>void= 
function(input, callback){

    setTimeout(()=>{

        if( input === 4 ){

            return callback(new Error("sample error"));

        }

        callback(null,"I am typed" + input.toString());

    },1000);

};



(async () => {



        for (let i of [1,2,3,4] ) {

            /*
            Quand on utilise pas les interfaces pour constrire la fonction mais que la
            fonction est quand même typer il faut metre les type atendu au niveau de la 
            fonction, comme ça on vérifie que, a priori ça peut marché compte tenu des
            informations que le compilateur à.
            */

            let [error, output] = await promisify.i1o2<number, Error, string>(myAsyncTyped)(i);

            if( error ){

                console.log(error.message);

                break;

            }

            console.log(output);


            
        }



})();
