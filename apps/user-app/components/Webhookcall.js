"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhookcall = void 0;
const axios_1 = __importDefault(require("axios"));
const Webhookcall = async ({ token, amount, user_identifier }) => {
    try {
        await axios_1.default.post("http://localhost:3004/confirm-payment", {
            token, user_identifier, amount,
        });
        return true;
    }
    catch (error) {
        console.error("Error in webhook call:", error);
        return false;
    }
};
exports.Webhookcall = Webhookcall;
