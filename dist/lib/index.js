"use strict";
require("rejection-tracker")(__dirname, "..", "..");
function typed() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return __generic__(inputs);
}
exports.typed = typed;
function generic() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return __generic__(inputs);
}
exports.generic = generic;
function __generic__(inputs) {
    var context;
    var asyncFunction;
    if (inputs.length == 2) {
        context = inputs[0];
        asyncFunction = inputs[1];
    }
    else {
        context = {};
        asyncFunction = inputs[0];
    }
    return function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            asyncFunction.apply(context, inputs.concat([function () {
                    var outputs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        outputs[_i] = arguments[_i];
                    }
                    return resolve(outputs);
                }]));
        });
    };
}
//# sourceMappingURL=index.js.map