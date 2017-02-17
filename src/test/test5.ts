
import * as pr from "../lib/index";

require("colors");


class MyClass {

    public readonly alphabet: string[]= [];

    constructor(){};

    public method(char: string, message: string, callback?: (alphabet: string[], message: string)=>void): void{

        let safeCallback= callback || function(){};

        setTimeout(()=> {
            this.alphabet.push(char);
            safeCallback(this.alphabet, message);
        }, Math.random()*1000);

    }

}


(async () => {

    let inst = new MyClass();

    let alphabet= ["a", "b", "c", "d", "e", "f", "g"];

    for (let char of alphabet){
        let [alphabet, message] = await pr.typed(
            inst,
            inst.method
        )(char, "oui");

        console.assert(message === "oui");

        console.log(alphabet[alphabet.length-1]);
    }


    console.log("Done: ".green, inst.alphabet);

    console.assert(JSON.stringify(inst.alphabet) === JSON.stringify(alphabet));

    console.log("PASS".green);

})();