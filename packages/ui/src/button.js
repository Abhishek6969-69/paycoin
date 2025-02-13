"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button = ({ onClick, children, className, type }) => {
    return (<button className={`bg-blue-500 text-white hover:bg-blue-600
    ${className} text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 
    `} onClick={onClick} type={type}>
    {children}
  </button>);
};
exports.Button = Button;
