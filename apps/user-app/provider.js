"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const recoil_1 = require("recoil");
const react_1 = require("next-auth/react");
const Providers = ({ children }) => {
    return <recoil_1.RecoilRoot>
        <react_1.SessionProvider>
            {children}
        </react_1.SessionProvider>
    </recoil_1.RecoilRoot>;
};
exports.Providers = Providers;
