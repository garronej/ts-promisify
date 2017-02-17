
import * as pr from "../lib/index";

require("colors");


class MyClass {

    public readonly alphabet: string[]= [];

    constructor(){};

    public method(char: string, callback: (alphabet: string[])=>void): void{

        setTimeout(()=> {
            this.alphabet.push(char);
            callback(this.alphabet);
        }, Math.random()*1000);

    }

}


(async () => {

    let inst = new MyClass();

    let alphabet= ["a", "b", "c", "d", "e", "f", "g"];

    for (let char of alphabet) {
        let [alphabet] = await pr.typed(
            inst,
            inst.method
        )(char);

        console.log(alphabet);
    }

    console.log("Done: ".green, inst.alphabet);

    console.assert(JSON.stringify(inst.alphabet) === JSON.stringify(alphabet));

    console.log("PASS".green);

})();