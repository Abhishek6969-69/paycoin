"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceAtom = void 0;
const recoil_1 = require("recoil");
exports.balanceAtom = (0, recoil_1.atom)({
    key: "balance",
    default: 0,
});
