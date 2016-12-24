import * as promisify from "../index";

/*
Your have to be in an async function to use await
Just wrap the part of your code where you want to program
sequentially in an async closure
*/


(async () => {


    /*
    
    If your async function is not typed you will have to use cast 
    in order to recover the type on the outputs
    
    */
    
    console.log("example1");

    let myAsync1 = function (input, callback) {

        setTimeout(() => {

            if (input === 2) {

                return callback(new Error("Expected error"));

            }

            callback(null, "=>" + input.toString() + "<=");

        }, 100);

    };


    for (let i of [1, 2, 3, 4]) {


        let [error, output] = <[Error, string]>await promisify.generic(myAsync1)(i);

        if (error) {

            console.log(error.message);

            continue;

        }

        console.log(output);



    }


    /*
    
    You can pass context to the function if you 
    need you async function to be bind to a specifical 'this'
    
    */

    console.log("example 2");

    let obj = {
        "prop": "Hello",
        "myAsync": function (input: number, callback: (error: Error, output: string) => void): void {


            setTimeout(() => {

                callback(null, this.prop + "=>" + input.toString() + "<=");

            }, 100);
        }

    };


    for (let i of [1, 2, 3, 4]) {


        let [error, output] = await promisify._2(obj, obj.myAsync)(i);



        if (error) {

            console.log(error.message);

            continue;

        }

        console.log(output);

    }




    /*
    
    If the callback return some values that you will not need it's no problem
    
    In this example we discard output2
    
    */

    console.log("example 3");

    let myAsync2: (input: number, callback: (error: Error, output1: string, output2: string) => void) => void =
        function (input, callback) {

            setTimeout(() => {

                callback(null, "=>" + input.toString() + "<=", "we don't use that");

            }, 100);

        };


    for (let i of [1, 2, 3, 4]) {


        let [error, output] = await promisify._2(myAsync2)(i);

        if (error) {

            console.log(error.message);

            continue;

        }

        console.log(output);

    }





})();