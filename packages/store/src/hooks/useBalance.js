"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBalance = void 0;
const recoil_1 = require("recoil");
const balance_1 = require("../atoms/balance");
const useBalance = () => {
    const value = (0, recoil_1.useRecoilValue)(balance_1.balanceAtom);
    return value;
};
exports.useBalance = useBalance;
