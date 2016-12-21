# promisify
Module to help work in sequencial mode with typeScript thanks to async/await

#Usage:

```javaScript

import promisify from "promisify"

/*An async function that take a number as parameter and return a string through a callback*/

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

            /*Call to myAsync sequentialy*/

            let [error, output]=<[Error, string]>await promisify(myAsync)(i);

            if( error ){

                console.log(error.message);

                break;

            }

            console.log(output);
            
        }


})();

```

See exemple 4 for calling with context

