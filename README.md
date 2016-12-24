# ts-promisify

TypeScript module to program sequentially in node.js 

In javaScript/TypeScrip long running functions does not return the result directly,
instead we pass a callback with the results when the function is done running.

The problem with that is that we end up having a callback in a callback in a callback ... aka callbacks hell

To deal with this problems latest ECMAScript specification define async/await, feature supported by typeScript,
but you can only 'await' functions that return a Promise.

This module 'promisify' your async function so they can be called
as if they where synchronous ( as if the result was directly returned and not via a callback ).

#Usage:


```javaScript


import * as promisify from "promisify";

/*
Here is a asyncFunction that take a number (e.g. 1 ) in input and return a string (e.g. "=>1<=") after 100ms
*/

let myAsync = function (input: number, callback: (error: Error, output1: string, output2: string) => void): void {

    setTimeout(() => {

        if( input === 2 ){

            callback( new Error("expected error"), null, null);

        }else{

            callback(null, "=>" + input.toString() + "<=", "we will note use this value");

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

        /*

        Here we use promisify._2 because we expect two value from the callback.

        If you where only interested by the 'error' you would have wrote: 
        let error= await promisify._1(myAsync)(i);

        If you where interested by all tree parameters:
        let [error, output1, output2]= await promisify._3(myAsync)(i);

        promisify._0 to promisify_4 are defined in the module.

        */


        let [error, output] = await promisify._2(myAsync)(i);

        if (error) {

            console.log(error.message);

            continue;

        }

        console.log(output);

    }

});

```

The output will be: 

```shell
=>1<=
expected error
=>3<=
```



The equivalent in a the traditional asyncronous paradigme would be:

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

You can bound your async function to a specifics object,

See ts/exemples/test.ts for detailed exemples.



To run the examples:

npm install 
node ./generatedJs/exemples/tests.js ( or npm test )
