


export type AsyncFunction11<I, O>= {
    (input: I, callback: (output: O)=>void): void;
};

export type AsyncFunction12<I, O1, O2>= {
    (input: I, callback: (output1: O1, output2: O2)=>void): void;
};


export type AsyncFunction21<I1, I2, O>= {
    (input1: I1, input2: I2, callback: (output: O)=>void): void;
};


export type AsyncFunction22<I1, I2, O1, O2>= {
    (input1: I1, input2: I2, callback: (output1: O1, output2: O2)=>void): void;
};


export function i1o1<I,O>(asyncFunction: AsyncFunction11<I,O>): (input: I) => Promise<O> {

    return (input) => {

        return new Promise<O>(resolve => {
            asyncFunction(input, (output)=> resolve(output));
        });

    };

};



export function i1o2<I,O1,O2>(asyncFunction: AsyncFunction12<I, O1, O2>): (input: I) => Promise<[O1,O2]> {

    return (input) => {

        return new Promise<[O1,O2]>(resolve => {
            asyncFunction(input, (output1, output2)=> resolve([output1, output2]));
        });

    };

};


export function i2o1<I1, I2, O>(asyncFunction: AsyncFunction21<I1, I2, O>): (input1: I1, input2: I2) => Promise<O> {

    return (input1, input2) => {

        return new Promise<O>(resolve => {
            asyncFunction(input1, input2, (output)=> resolve(output));
        });

    };

};


export function i2o2<I1,I2,O1,O2>(asyncFunction: AsyncFunction22<I1,I2,O1,O2>): (input1: I1, input2: I2) => Promise<[O1,O2]> {

    return (input1, input2) => {

        return new Promise<[O1,O2]>(resolve => {
            asyncFunction(input1, input2, (output1, output2)=> resolve([output1, output2]));
        });

    };

};

export default function promisify(asyncFunction: Function): (...inputs) => Promise<any[]> {

    return (...inputs) => {

        return new Promise<any[]>(resolve => {
            asyncFunction.apply(null, inputs.concat([(...outputs) => resolve(outputs)]))
        });

    };

};


