"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.isArray = Array.isArray;

function notArray(arg) {
    return !(exports.isArray(arg));
}
exports.notArray = notArray;
