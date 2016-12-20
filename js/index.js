"use strict";
function i1o1(asyncFunction) {
    return function (input) {
        return new Promise(function (resolve) {
            asyncFunction(input, function (output) { return resolve(output); });
        });
    };
}
exports.i1o1 = i1o1;
;
function i1o2(asyncFunction) {
    return function (input) {
        return new Promise(function (resolve) {
            asyncFunction(input, function (output1, output2) { return resolve([output1, output2]); });
        });
    };
}
exports.i1o2 = i1o2;
;
function i2o1(asyncFunction) {
    return function (input1, input2) {
        return new Promise(function (resolve) {
            asyncFunction(input1, input2, function (output) { return resolve(output); });
        });
    };
}
exports.i2o1 = i2o1;
;
function i2o2(asyncFunction) {
    return function (input1, input2) {
        return new Promise(function (resolve) {
            asyncFunction(input1, input2, function (output1, output2) { return resolve([output1, output2]); });
        });
    };
}
exports.i2o2 = i2o2;
;
function promisify(asyncFunction) {
    return function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            asyncFunction.apply(null, inputs.concat([function () {
                    var outputs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        outputs[_i] = arguments[_i];
                    }
                    return resolve(outputs);
                }]));
        });
    };
}
exports.__esModule = true;
exports["default"] = promisify;
;
