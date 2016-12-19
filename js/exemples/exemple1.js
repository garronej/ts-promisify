"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const index_1 = require("../index");
/*Pas du tout typer*/
let myAsync = function (input, callback) {
    setTimeout(() => {
        if (input === 4) {
            return callback(new Error("sample error"));
        }
        callback(null, "I am not typed" + input.toString());
    }, 1000);
};
(() => __awaiter(this, void 0, void 0, function* () {
    for (let i of [1, 2, 3, 4]) {
        /*
        Quand on a pas du tout de type on utilise la fonction générique,
        on ne garentie alors rien du tout et il faut faire un cast pour avoir
        les types de retours
        */
        let [error, output] = yield index_1.default(myAsync)(i);
        if (error) {
            console.log(error.message);
            break;
        }
        console.log(output);
    }
}))();
