"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
const react_1 = __importDefault(require("react"));
function Input({ placeholder, onChange, type, className }) {
    return (<div className=' '>
       
        <input className={`border  px-4 py-2 text-black rounded   ${className}`} type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
    </div>);
}
