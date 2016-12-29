export type AsyncFunction04<O1, O2, O3, O4>= {
    (callback: (output1: O1, output2: O2, output3: O3, output4: O4)=>void): void;
};

export type AsyncFunction14<I, O1, O2, O3, O4>= {
    (input: I, callback: (output1: O1, output2: O2, output3: O3, output4: O4)=>void): void;
};

export type AsyncFunction24<I1, I2, O1, O2, O3, O4>= {
    (input1: I1, input2: I2, callback: (output1: O1, output2: O2, output3: O3, output4: O4)=>void): void;
};

export type AsyncFunction34<I1, I2, I3, O1, O2, O3, O4> = {
    (input1: I1, input2: I2, input3: I3, callback: (output1: O1, output2: O2, output3: O3, output4: O4) => void): void;
};


export type AsyncFunction44<I1, I2, I3, I4, O1, O2, O3, O4> = {
    (input1: I1, input2: I2, input3: I3, input4: I4, callback: (output1: O1, output2: O2, output3: O3, output4: O4) => void): void;
};


export function typed<O1, O2, O3, O4>(asyncFunction: AsyncFunction04<O1, O2, O3, O4>): () => Promise<[O1, O2, O3, O4]>;
export function typed<O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction04<O1, O2, O3, O4>): () => Promise<[O1, O2, O3, O4]>;
export function typed<I, O1, O2, O3, O4>(asyncFunction: AsyncFunction14<I, O1, O2, O3, O4>): (input1: I) => Promise<[O1, O2, O3, O4]>;
export function typed<I, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction14<I, O1, O2, O3, O4>): (input1: I) => Promise<[O1, O2, O3, O4]>;
export function typed<I1, I2, O1, O2, O3, O4>(asyncFunction: AsyncFunction24<I1, I2, O1, O2, O3, O4>): (input1: I1, input2: I2) => Promise<[O1, O2, O3, O3, O4]>;
export function typed<I1, I2, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction24<I1, I2, O1, O2, O3, O4>): (input1: I1, input2: I2) => Promise<[O1, O2, O3, O4]>;
export function typed<I1, I2, I3, O1, O2, O3, O4>(asyncFunction: AsyncFunction34<I1, I2, I3, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3, O4]>;
export function typed<I1, I2, I3, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction34<I1, I2, I3, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3, O4]>;
export function typed<I1, I2, I3, I4, O1, O2, O3, O4>(asyncFunction: AsyncFunction44<I1, I2, I3, I4, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3, O4]>;
export function typed<I1, I2, I3, I4, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction44<I1, I2, I3, I4, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3, O4]>;
export function typed(...inputs: any[]): any { return __generic__(inputs); }

export function generic(context: Object, asyncFunction: Function): (...inputs) => Promise<any[]>;
export function generic(asyncFunction: Function): (...inputs) => Promise<any[]>;
export function generic(...inputs: any[]): Function { return __generic__(inputs); } 

function __generic__(inputs: any[]): Function{

    let context: Object;
    let asyncFunction: Function;

    if( inputs.length == 2 ){

        context= inputs[0];
        asyncFunction= inputs[1];

    }else{

        context= {};
        asyncFunction= inputs[0];

    }

    return (...inputs) => {

        return new Promise<any[]>(resolve => {

            asyncFunction.apply(context, inputs.concat([(...outputs) => resolve(outputs) ]));
        });

    };

}
