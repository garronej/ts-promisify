# ts-promisify

TypeScript module to program sequentially in node.js 

In javaScript/TypeScrip long running functions does not return the result directly but via a callback function.

The problem with that is we end up having a callback in a callback in a callback...

To deal with this problems latest ECMAScript specification define async/await, feature supported by typeScript,
but you can only 'await' functions that return a Promise.

This module 'promisify' your async function so they can be called
as if they where synchronous ( as if the result was directly returned ).

#Usage:

```javaScript

import * as promisify from "promisify";

/*
Here is a asyncFunction that take a number in input 
and return a string after 100ms
*/

let myAsync = function (input: number, 
callback: (error: Error, output1: string, output2: string) => void): void {

    setTimeout(() => {

        if( input === 2 ){

            callback( new Error("expected error"), null, null);

        }else{

            callback(null, "=>" + input.toString() + "<=", "useless");

        }

    }, 100);

};


/*
Your have to be in an async function to use await
Just wrap the part of your code where you want to program
sequentially in an async closure
*/
(async () => {

    for (let i of [1, 2, 3]) {


        let [error, output] = await promisify.typed(myAsync)(i);

        if (error) {

            console.log(error.message);

            continue;

        }

        console.log(output);

    }

})();
```

The output will be: 

```shell
=>1<=
expected error
=>3<=
```

The equivalent in a the traditional asynchronous paradigm would be:

```javaScript
myAsync(1, function (error, output) {
    if (error) {
        console.log(error.message);
    } else {
        console.log(output);
    }
    myAsync(2, function (error, output) {
        if (error) {
            console.log(error.message);
        } else {
            console.log(output);
        }
        myAsync(3, function (error, output) {
            if (error) {
                console.log(error.message);
            } else {
                console.log(output);
            }
        });
    });
});
```
You can bound your async function to a specifics object.
If your callback function is not typed enough use promisify.generic instead of promisify.typed

See *./ts/exemples/test.ts* for detailed exemples.

To run the examples:

````shell
npm install 
node ./generatedJs/exemples/tests.js
````
