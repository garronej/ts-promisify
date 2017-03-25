export declare type AsyncFunction0<O1, O2, O3, O4, O5, O6> = {
    (callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};
export declare type AsyncFunction1<I, O1, O2, O3, O4, O5, O6> = {
    (i: I, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};
export declare type AsyncFunction2<I1, I2, O1, O2, O3, O4, O5, O6> = {
    (i1: I1, i2: I2, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};
export declare type AsyncFunction3<I1, I2, I3, O1, O2, O3, O4, O5, O6> = {
    (i1: I1, i2: I2, i3: I3, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};
export declare type AsyncFunction4<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6> = {
    (i1: I1, i2: I2, i3: I3, i4: I4, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};
export declare function typed<O1, O2, O3, O4, O5, O6>(af: AsyncFunction0<O1, O2, O3, O4, O5, O6>): () => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<O1, O2, O3, O4, O5, O6>(c: Object, af: AsyncFunction0<O1, O2, O3, O4, O5, O6>): () => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I, O1, O2, O3, O4, O5, O6>(af: AsyncFunction1<I, O1, O2, O3, O4, O5, O6>): (i: I) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I, O1, O2, O3, O4, O5, O6>(c: Object, af: AsyncFunction1<I, O1, O2, O3, O4, O5, O6>): (i: I) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I1, I2, O1, O2, O3, O4, O5, O6>(af: AsyncFunction2<I1, I2, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2) => Promise<[O1, O2, O3, O3, O4, O5, O6]>;
export declare function typed<I1, I2, O1, O2, O3, O4, O5, O6>(c: Object, af: AsyncFunction2<I1, I2, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I1, I2, I3, O1, O2, O3, O4, O5, O6>(af: AsyncFunction3<I1, I2, I3, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2, i3: I3) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I1, I2, I3, O1, O2, O3, O4, O5, O6>(c: Object, af: AsyncFunction3<I1, I2, I3, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2, i3: I3) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6>(af: AsyncFunction4<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2, i3: I3, i4: I4) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function typed<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6>(c: Object, af: AsyncFunction4<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6>): (i1: I1, i2: I2, i3: I3, i4: I4) => Promise<[O1, O2, O3, O4, O5, O6]>;
export declare function generic(context: Object, asyncFunction: Function): (...inputs) => Promise<any[]>;
export declare function generic(asyncFunction: Function): (...inputs) => Promise<any[]>;
