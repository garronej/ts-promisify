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
        need you async function to be bind to a specific 'this'
        
        */


        let obj = {
            "prop": "Hello",
            "myAsync": function (input: number, callback: (error: Error | null, output: string) => void): void {


                setTimeout(() => {

                    callback(null, this.prop + "=>" + input.toString() + "<=");

                }, 100);
            }

        };


        for (let i of [1, 2, 3, 4]) {


            let [error, output] = await promisify.typed(obj, obj.myAsync)(i);



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


        let myAsync: (input: number, callback: (error: Error | null, output1: string, output2: string) => void) => void =
            function (input, callback) {

                setTimeout(() => {

                    callback(null, "=>" + input.toString() + "<=", "we don't use that");

                }, 100);

            };


        for (let i of [1, 2, 3, 4]) {


            let [error, output] = await promisify.typed(myAsync)(i);

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


            await promisify.typed(myAsync)(i, i + 1);

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

            let [output] = await promisify.typed(context, myAsync)(i, i + 1);

            console.log(output);


        }


    } while (false)


    do {

        console.log("unitary5");

        let myAsync = function (input: any, callback?: (error: Error | null, output: string) => void): void {

            setTimeout(() => {

                if( callback )
                    callback(null, "=>" + (<number>input).toString() + "<=");

            }, 100);


        }

        let [error, output] = <[Error, string]>await promisify.generic(myAsync)(666);

        console.log(output);

    } while (false)


    do {

        console.log("unitary6");


        let myAsync = function (input: any, callback?: (error: Error | null, output: string) => void): void {

            setTimeout(() => {

                if( callback )
                    callback.call(this, null);

            }, 100);

        }

        let [error, output] = <[Error, string]>await promisify.generic({}, myAsync)(666);
        
        if( !error && output === undefined  ){

            console.log("done");

        }




    } while (false)


    do {

        console.log("unitary7");

        let myAsync = function (i1: number, i2: number, i3: number, i4: number, 
        callback?: (o1: string, o2: string, o3: number, o4: boolean, o5: string, o7: number) => void): void {

            setTimeout(() => {

                if( callback )
                    callback(i1.toString(), i2.toString(), i3, true, "ok", i4);

            }, 100);


        }

        let [o1, o2, o3, o4, o5, o6] = await promisify.typed(myAsync)(1,2,3,4);

        if( o1 === "1" && o2 === "2" && o3 === 3 && o4 === true && o5 === "ok" && o6 === 4){
            console.log("success");
        }else{
            console.log("failed");
        }


    } while (false)


    do {

        console.log("unitary8");

        let myAsync = function (i1: number, i2: number, i3: number,
        callback?: (o1: any, o2: string, o3: any, o4: boolean, o5: string, o7: number) => void): void {

            setTimeout(() => {

                if( callback )
                    callback(i1.toString(), i2.toString(), i3, true, "ok", 666);

            }, 100);


        }

        let [o1, o2, o3, o4, o5] = await promisify.typed(myAsync)(1,2,3);

        if( o1 === "1" && o2 === "2" && o3 === 3 && o4 === true && o5 === "ok"){
            console.log("success");
        }else{
            console.log("failed");
        }


    } while (false)



})();