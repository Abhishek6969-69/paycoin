'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignUp;
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const signup_1 = __importDefault(require("components/signup"));
function SignUp() {
    return (<react_1.Suspense fallback={<div>Loading...</div>}>
            <SignUpContent />
        </react_1.Suspense>);
}
function SignUpContent() {
    const searchParams = (0, navigation_1.useSearchParams)();
    return (<div>
            <signup_1.default />
        </div>);
}
