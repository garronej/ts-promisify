
import promisify from "../index"


let obj = {
    "myAsync": function (input, callback) {
        setTimeout(() => {

            if (input === 4) {

                return callback(new Error("sample error"));

            }

            callback(null, "=>" + input.toString() + this.params);

        }, 1000);

    },
    "params": " I am param"
};

(async () => {

    for (let i of [1, 2, 3, 4]) {


        let [error, output] = <[Error, string]>await promisify(obj.myAsync,obj)(i);

        if (error) {

            console.log(error.message);

            break;

        }

        console.log(output);

    }


})();
