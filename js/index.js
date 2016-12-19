"use strict";
function i1o1(asyncFunction) {
    return (input) => {
        return new Promise(resolve => {
            asyncFunction(input, (output) => resolve(output));
        });
    };
}
exports.i1o1 = i1o1;
;
function i1o2(asyncFunction) {
    return (input) => {
        return new Promise(resolve => {
            asyncFunction(input, (output1, output2) => resolve([output1, output2]));
        });
    };
}
exports.i1o2 = i1o2;
;
function i2o1(asyncFunction) {
    return (input1, input2) => {
        return new Promise(resolve => {
            asyncFunction(input1, input2, (output) => resolve(output));
        });
    };
}
exports.i2o1 = i2o1;
;
function i2o2(asyncFunction) {
    return (input1, input2) => {
        return new Promise(resolve => {
            asyncFunction(input1, input2, (output1, output2) => resolve([output1, output2]));
        });
    };
}
exports.i2o2 = i2o2;
;
function promisify(asyncFunction) {
    return (...inputs) => {
        return new Promise(resolve => {
            asyncFunction.apply(null, inputs.concat([(...outputs) => resolve(outputs)]));
        });
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = promisify;
;
