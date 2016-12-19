
import promisify from "../index"

/*Pas du tout typer*/

let myAsync= function(input, callback){

    setTimeout(()=>{

        if( input === 4 ){

            return callback(new Error("sample error"));

        }

        callback(null,"I am not typed" + input.toString());

    },1000);

};

(async () => {

        for (let i of [1,2,3,4] ) {

            /*
            Quand on a pas du tout de type on utilise la fonction générique,
            on ne garentie alors rien du tout et il faut faire un cast pour avoir
            les types de retours
            */

            let [error, output]=<[Error, string]>await promisify(myAsync)(i);

            if( error ){

                console.log(error.message);

                break;

            }

            console.log(output);
            
        }


})();
