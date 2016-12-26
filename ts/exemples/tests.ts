import * as promisify from "../index";

/*
Your have to be in an async function to use await
Just wrap the part of your code where you want to program
sequentially in an async closure
*/


(async () => {

    do {

        console.log("example1");

        /*
        
        If your async function is not typed you will have to use cast 
        in order to recover the type on the outputs
        
        */


        let myAsync = function (input, callback) {

            setTimeout(() => {

                if (input === 2) {

                    return callback(new Error("Expected error"));

                }

                callback(null, "=>" + input.toString() + "<=");

            }, 100);

        };


        for (let i of [1, 2, 3, 4]) {


            let [error, output] = <[Error, string]>await promisify.generic(myAsync)(i);

            if (error) {

                console.log(error.message);

                continue;

            }

            console.log(output);



        }

    } while (false)


    do {

        console.log("example 2");

        /*
        
        You can pass context to the function if you 
        need you async function to be bind to a specifical 'this'
        
        */


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



    } while (false)




    do {


        console.log("example 3");

        /*
        
        If the callback return some values that you will not need it's no problem
        
        In this example we discard output2
        
        */


        let myAsync: (input: number, callback: (error: Error, output1: string, output2: string) => void) => void =
            function (input, callback) {

                setTimeout(() => {

                    callback(null, "=>" + input.toString() + "<=", "we don't use that");

                }, 100);

            };


        for (let i of [1, 2, 3, 4]) {


            let [error, output] = await promisify._2(myAsync)(i);

            if (error) {

                console.log(error.message);

                continue;

            }

            console.log(output);

        }



    } while (false)





    /* unitary tests */



    do {

        console.log("unitary1");

        let myAsync = function (input, callback) {

            setTimeout(() => {

                callback("=>" + input.toString());

            }, 100);

        };


        for (let i of [1, 2, 3, 4]) {


            let [output] = <[string]>await promisify.generic(myAsync)(i);

            console.log(output);



        }

    } while (false)

    do {


        console.log("unitary2");

        let myAsync = function (input, callback) {

            setTimeout(() => {

                callback();

            }, 100);

        };


        for (let i of [1, 2, 3, 4]) {


            await promisify.generic(myAsync)(i);

            console.log("done");



        }

    } while (false)




    do {

        console.log("unitary3");

        let myAsync = function (input1: number, input2: number, callback: () => void) {

            setTimeout(() => {

                callback();

            }, 100);

        };


        for (let i of [1, 2, 3, 4]) {


            await promisify._0(myAsync)(i, i + 1);

            console.log("done");



        }

    } while (false)

    do {

        console.log("unitary4");

        let myAsync = function (input1: number, input2: number, callback: (output: string) => void) {

            setTimeout(() => {

                callback(input1.toString() + " " + input2.toString() + this.input3);

            }, 100);

        };



        let context = { "input3": " ras" };

        for (let i of [1, 2, 3, 4]) {

            let [output] = await promisify._1(context, myAsync)(i, i + 1);

            console.log(output);


        }


    } while (false)


    do {

        console.log("unitary5");

        let myAsync = function (input: any, callback?: (error: Error, output: string) => void): void {

            setTimeout(() => {

                callback(null, "=>" + (<number>input).toString() + "<=");

            }, 100);


        }

        let [error, output] = <[Error, string]>await promisify.generic(myAsync)(666);

        console.log(output);

    } while (false)


    do {

        console.log("unitary6");


        let myAsync = function (input: any, callback?: (error: Error, output: string) => void): void {

            setTimeout(() => {

                callback.call(this, null);

            }, 100);

        }

        let [error, output] = <[Error, string]>await promisify.generic(null, myAsync)(666);
        
        if( !error && output === undefined  ){

            console.log("done");

        }




    } while (false)



})();