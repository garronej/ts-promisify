
export type AsyncFunction00= {
    (callback: ()=>void): void;
};

export type AsyncFunction10<I>= {
    (input: I, callback: ()=>void): void;
};

export type AsyncFunction20<I1, I2>= {
    (input1: I1, input2: I2, callback: ()=>void): void;
};

export type AsyncFunction30<I1, I2, I3> = {
    (input1: I1, input2: I2, input3: I3, callback: () => void): void;
};


export type AsyncFunction40<I1, I2, I3, I4> = {
    (input1: I1, input2: I2, input3: I3, input4: I4, callback: () => void): void;
};


export function _0(asyncFunction: AsyncFunction00): () => Promise<[void]>;
export function _0(context: Object, asyncFunction: AsyncFunction00): () => Promise<[void]>;
export function _0<I>(asyncFunction: AsyncFunction10<I>): (input1: I) => Promise<[void]>;
export function _0<I>(context: Object, asyncFunction: AsyncFunction10<I>): (input1: I) => Promise<[void]>;
export function _0<I1, I2>(asyncFunction: AsyncFunction20<I1, I2>): (input1: I1, input2: I2) => Promise<[void]>;
export function _0<I1, I2>(context: Object, asyncFunction: AsyncFunction20<I1, I2>): (input1: I1, input2: I2) => Promise<[void]>;
export function _0<I1, I2, I3>(asyncFunction: AsyncFunction30<I1, I2, I3>): (input1: I1, input2: I2, input3: I3) => Promise<[void]>;
export function _0<I1, I2, I3>(context: Object, asyncFunction: AsyncFunction30<I1, I2, I3>): (input1: I1, input2: I2, input3: I3) => Promise<[void]>;
export function _0<I1, I2, I3, I4>(asyncFunction: AsyncFunction40<I1, I2, I3, I4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[void]>;
export function _0<I1, I2, I3, I4>(context: Object, asyncFunction: AsyncFunction40<I1, I2, I3, I4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[void]>;
export function _0(...inputs: any[]): any { return __generic__(inputs); }

export type AsyncFunction01<O>= {
    (callback: (output: O)=>void): void;
};

export type AsyncFunction11<I, O>= {
    (input: I, callback: (output: O)=>void): void;
};

export type AsyncFunction21<I1, I2, O>= {
    (input1: I1, input2: I2, callback: (output: O)=>void): void;
};

export type AsyncFunction31<I1, I2, I3, O> = {
    (input1: I1, input2: I2, input3: I3, callback: (output: O) => void): void;
};


export type AsyncFunction41<I1, I2, I3, I4, O> = {
    (input1: I1, input2: I2, input3: I3, input4: I4, callback: (output1: O) => void): void;
};


export function _1<O>(asyncFunction: AsyncFunction01<O>): () => Promise<[O]>;
export function _1<O>(context: Object, asyncFunction: AsyncFunction01<O>): () => Promise<[O]>;
export function _1<I, O>(asyncFunction: AsyncFunction11<I, O>): (input1: I) => Promise<[O]>;
export function _1<I, O>(context: Object, asyncFunction: AsyncFunction11<I, O>): (input1: I) => Promise<[O]>;
export function _1<I1, I2, O>(asyncFunction: AsyncFunction21<I1, I2, O>): (input1: I1, input2: I2) => Promise<[O]>;
export function _1<I1, I2, O>(context: Object, asyncFunction: AsyncFunction21<I1, I2, O>): (input1: I1, input2: I2) => Promise<[O]>;
export function _1<I1, I2, I3, O>(asyncFunction: AsyncFunction31<I1, I2, I3, O>): (input1: I1, input2: I2, input3: I3) => Promise<[O]>;
export function _1<I1, I2, I3, O>(context: Object, asyncFunction: AsyncFunction31<I1, I2, I3, O>): (input1: I1, input2: I2, input3: I3) => Promise<[O]>;
export function _1<I1, I2, I3, I4, O>(asyncFunction: AsyncFunction41<I1, I2, I3, I4, O>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O]>;
export function _1<I1, I2, I3, I4, O>(context: Object, asyncFunction: AsyncFunction41<I1, I2, I3, I4, O>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O]>;
export function _1(...inputs: any[]): any { return __generic__(inputs); }

export type AsyncFunction02<O1, O2>= {
    (callback: (output1: O1, output2: O2)=>void): void;
};

export type AsyncFunction12<I, O1, O2>= {
    (input: I, callback: (output1: O1, output2: O2)=>void): void;
};

export type AsyncFunction22<I1, I2, O1, O2>= {
    (input1: I1, input2: I2, callback: (output1: O1, output2: O2)=>void): void;
};

export type AsyncFunction32<I1, I2, I3, O1, O2> = {
    (input1: I1, input2: I2, input3: I3, callback: (output1: O1, output2: O2) => void): void;
};


export type AsyncFunction42<I1, I2, I3, I4, O1, O2> = {
    (input1: I1, input2: I2, input3: I3, input4: I4, callback: (output1: O1, output2: O2) => void): void;
};


export function _2<O1, O2>(asyncFunction: AsyncFunction02<O1, O2>): () => Promise<[O1, O2]>;
export function _2<O1, O2>(context: Object, asyncFunction: AsyncFunction02<O1, O2>): () => Promise<[O1, O2]>;
export function _2<I, O1, O2>(asyncFunction: AsyncFunction12<I, O1, O2>): (input1: I) => Promise<[O1, O2]>;
export function _2<I, O1, O2>(context: Object, asyncFunction: AsyncFunction12<I, O1, O2>): (input1: I) => Promise<[O1, O2]>;
export function _2<I1, I2, O1, O2>(asyncFunction: AsyncFunction22<I1, I2, O1, O2>): (input1: I1, input2: I2) => Promise<[O1, O2]>;
export function _2<I1, I2, O1, O2>(context: Object, asyncFunction: AsyncFunction22<I1, I2, O1, O2>): (input1: I1, input2: I2) => Promise<[O1, O2]>;
export function _2<I1, I2, I3, O1, O2>(asyncFunction: AsyncFunction32<I1, I2, I3, O1, O2>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2]>;
export function _2<I1, I2, I3, O1, O2>(context: Object, asyncFunction: AsyncFunction32<I1, I2, I3, O1, O2>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2]>;
export function _2<I1, I2, I3, I4, O1, O2>(asyncFunction: AsyncFunction42<I1, I2, I3, I4, O1, O2>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2]>;
export function _2<I1, I2, I3, I4, O1, O2>(context: Object, asyncFunction: AsyncFunction42<I1, I2, I3, I4, O1, O2>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2]>;
export function _2(...inputs: any[]): any { return __generic__(inputs); }


export type AsyncFunction03<O1, O2, O3>= {
    (callback: (output1: O1, output2: O2, output3: O3)=>void): void;
};

export type AsyncFunction13<I, O1, O2, O3>= {
    (input: I, callback: (output1: O1, output2: O2, output3: O3)=>void): void;
};

export type AsyncFunction23<I1, I2, O1, O2, O3>= {
    (input1: I1, input2: I2, callback: (output1: O1, output2: O2, output3: O3)=>void): void;
};

export type AsyncFunction33<I1, I2, I3, O1, O2, O3> = {
    (input1: I1, input2: I2, input3: I3, callback: (output1: O1, output2: O2, output3: O3) => void): void;
};


export type AsyncFunction43<I1, I2, I3, I4, O1, O2, O3> = {
    (input1: I1, input2: I2, input3: I3, input4: I4, callback: (output1: O1, output2: O2, output3: O3) => void): void;
};


export function _3<O1, O2, O3>(asyncFunction: AsyncFunction03<O1, O2, O3>): () => Promise<[O1, O2, O3]>;
export function _3<O1, O2, O3>(context: Object, asyncFunction: AsyncFunction03<O1, O2, O3>): () => Promise<[O1, O2, O3]>;
export function _3<I, O1, O2, O3>(asyncFunction: AsyncFunction13<I, O1, O2, O3>): (input1: I) => Promise<[O1, O2, O3]>;
export function _3<I, O1, O2, O3>(context: Object, asyncFunction: AsyncFunction13<I, O1, O2, O3>): (input1: I) => Promise<[O1, O2, O3]>;
export function _3<I1, I2, O1, O2, O3>(asyncFunction: AsyncFunction23<I1, I2, O1, O2, O3>): (input1: I1, input2: I2) => Promise<[O1, O2, O3, O3]>;
export function _3<I1, I2, O1, O2, O3>(context: Object, asyncFunction: AsyncFunction23<I1, I2, O1, O2, O3>): (input1: I1, input2: I2) => Promise<[O1, O2, O3]>;
export function _3<I1, I2, I3, O1, O2, O3>(asyncFunction: AsyncFunction33<I1, I2, I3, O1, O2, O3>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3]>;
export function _3<I1, I2, I3, O1, O2, O3>(context: Object, asyncFunction: AsyncFunction33<I1, I2, I3, O1, O2, O3>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3]>;
export function _3<I1, I2, I3, I4, O1, O2, O3>(asyncFunction: AsyncFunction43<I1, I2, I3, I4, O1, O2, O3>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3]>;
export function _3<I1, I2, I3, I4, O1, O2, O3>(context: Object, asyncFunction: AsyncFunction43<I1, I2, I3, I4, O1, O2, O3>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3]>;
export function _3(...inputs: any[]): any { return __generic__(inputs); }


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


export function _4<O1, O2, O3, O4>(asyncFunction: AsyncFunction04<O1, O2, O3, O4>): () => Promise<[O1, O2, O3, O4]>;
export function _4<O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction04<O1, O2, O3, O4>): () => Promise<[O1, O2, O3, O4]>;
export function _4<I, O1, O2, O3, O4>(asyncFunction: AsyncFunction14<I, O1, O2, O3, O4>): (input1: I) => Promise<[O1, O2, O3, O4]>;
export function _4<I, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction14<I, O1, O2, O3, O4>): (input1: I) => Promise<[O1, O2, O3, O4]>;
export function _4<I1, I2, O1, O2, O3, O4>(asyncFunction: AsyncFunction24<I1, I2, O1, O2, O3, O4>): (input1: I1, input2: I2) => Promise<[O1, O2, O3, O3, O4]>;
export function _4<I1, I2, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction24<I1, I2, O1, O2, O3, O4>): (input1: I1, input2: I2) => Promise<[O1, O2, O3, O4]>;
export function _4<I1, I2, I3, O1, O2, O3, O4>(asyncFunction: AsyncFunction34<I1, I2, I3, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3, O4]>;
export function _4<I1, I2, I3, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction34<I1, I2, I3, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3) => Promise<[O1, O2, O3, O4]>;
export function _4<I1, I2, I3, I4, O1, O2, O3, O4>(asyncFunction: AsyncFunction44<I1, I2, I3, I4, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3, O4]>;
export function _4<I1, I2, I3, I4, O1, O2, O3, O4>(context: Object, asyncFunction: AsyncFunction44<I1, I2, I3, I4, O1, O2, O3, O4>): (input1: I1, input2: I2, input3: I3, input4: I4) => Promise<[O1, O2, O3, O4]>;
export function _4(...inputs: any[]): any { return __generic__(inputs); }

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
