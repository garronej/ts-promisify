export declare type AsyncFunction11<I, O> = {
    (input: I, callback: (output: O) => void): void;
};
export declare type AsyncFunction12<I, O1, O2> = {
    (input: I, callback: (output1: O1, output2: O2) => void): void;
};
export declare type AsyncFunction21<I1, I2, O> = {
    (input1: I1, input2: I2, callback: (output: O) => void): void;
};
export declare type AsyncFunction22<I1, I2, O1, O2> = {
    (input1: I1, input2: I2, callback: (output1: O1, output2: O2) => void): void;
};
export declare function i1o1<I, O>(asyncFunction: AsyncFunction11<I, O>): (input: I) => Promise<O>;
export declare function i1o2<I, O1, O2>(asyncFunction: AsyncFunction12<I, O1, O2>): (input: I) => Promise<[O1, O2]>;
export declare function i2o1<I1, I2, O>(asyncFunction: AsyncFunction21<I1, I2, O>): (input1: I1, input2: I2) => Promise<O>;
export declare function i2o2<I1, I2, O1, O2>(asyncFunction: AsyncFunction22<I1, I2, O1, O2>): (input1: I1, input2: I2) => Promise<[O1, O2]>;
export default function promisify(asyncFunction: Function): (...inputs) => Promise<any[]>;
