"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = Label;
const react_1 = __importDefault(require("react"));
function Label({ label, className }) {
    return (<label className={`block ml-2  mt-2 mb-1   ${className}`}>{label}</label>);
}
