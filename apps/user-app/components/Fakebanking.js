"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Fakebanking;
const axios_1 = __importDefault(require("axios"));
async function Fakebanking() {
    try {
        const response = await axios_1.default.get("http://localhost:3004/transactions");
        return response.data; // Return the fetched data
    }
    catch (error) {
        console.error("Error fetching transactions:", error);
        return null; // Handle errors properly
    }
}
