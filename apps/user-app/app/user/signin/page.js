'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignIn;
const react_1 = require("react");
const signincomponent_1 = __importDefault(require("components/signincomponent"));
const navigation_1 = require("next/navigation");
function SignIn() {
    return (<react_1.Suspense fallback={<div>Loading...</div>}>
            <SignInContent />
        </react_1.Suspense>);
}
function SignInContent() {
    const searchParams = (0, navigation_1.useSearchParams)();
    return (<div>
            <signincomponent_1.default />
        </div>);
}
