"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const promisify = require("../index");
/*
On a typer la fonction un minimum mais pas utilisé les interface du
modure promisify
*/
let myAsyncTyped = function (input, callback) {
    setTimeout(() => {
        if (input === 4) {
            return callback(new Error("sample error"));
        }
        callback(null, "I am typed" + input.toString());
    }, 1000);
};
(() => __awaiter(this, void 0, void 0, function* () {
    for (let i of [1, 2, 3, 4]) {
        /*
        Quand on utilise pas les interfaces pour constrire la fonction mais que la
        fonction est quand même typer il faut metre les type atendu au niveau de la
        fonction, comme ça on vérifie que, a priori ça peut marché compte tenu des
        informations que le compilateur à.
        */
        let [error, output] = yield promisify.i1o2(myAsyncTyped)(i);
        if (error) {
            console.log(error.message);
            break;
        }
        console.log(output);
    }
}))();
