require("rejection-tracker")(__dirname, "..", "..");

export type AsyncFunction0<O1, O2, O3, O4, O5, O6>= {
    (callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6)=>void): void;
};

export type AsyncFunction1<I, O1, O2, O3, O4, O5, O6>= {
    (i: I, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6)=>void): void;
};

export type AsyncFunction2<I1, I2, O1, O2, O3, O4, O5, O6>= {
    (i1: I1, i2: I2, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6)=>void): void;
};

export type AsyncFunction3<I1, I2, I3, O1, O2, O3, O4, O5, O6> = {
    (i1: I1, i2: I2, i3: I3, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};

export type AsyncFunction4<I1, I2, I3, I4, O1, O2, O3, O4, O5, O6> = {
    (i1: I1, i2: I2, i3: I3, i4: I4, callback?: (o1: O1, o2: O2, o3: O3, o4: O4, o5: O5, o6: O6) => void): void;
};

export function typed<O1,O2,O3,O4,O5,O6>(af:AsyncFunction0<O1,O2,O3,O4,O5,O6>):()=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<O1,O2,O3,O4,O5,O6>(c:Object,af:AsyncFunction0<O1,O2,O3,O4,O5,O6>):()=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I,O1,O2,O3,O4,O5,O6>(af:AsyncFunction1<I,O1,O2,O3,O4,O5,O6>):(i:I)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I,O1,O2,O3,O4,O5,O6>(c:Object,af:AsyncFunction1<I,O1,O2,O3,O4,O5,O6>):(i:I)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,O1,O2,O3,O4,O5,O6>(af:AsyncFunction2<I1,I2,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,O1,O2,O3,O4,O5,O6>(c:Object,af:AsyncFunction2<I1,I2,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,I3,O1,O2,O3,O4,O5,O6>(af:AsyncFunction3<I1,I2,I3,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2,i3:I3)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,I3,O1,O2,O3,O4,O5,O6>(c:Object,af:AsyncFunction3<I1,I2,I3,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2,i3:I3)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,I3,I4,O1,O2,O3,O4,O5,O6>(af:AsyncFunction4<I1,I2,I3,I4,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2,i3:I3,i4:I4)=>Promise<[O1,O2,O3,O4,O5,O6]>;
export function typed<I1,I2,I3,I4,O1,O2,O3,O4,O5,O6>(c:Object,af:AsyncFunction4<I1,I2,I3,I4,O1,O2,O3,O4,O5,O6>):(i1:I1,i2:I2,i3:I3,i4:I4)=>Promise<[O1,O2,O3,O4,O5,O6]>;
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
