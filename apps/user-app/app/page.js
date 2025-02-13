"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const next_auth_1 = require("next-auth");
const navigation_1 = require("next/navigation");
const auth_1 = require("./lib/auth");
async function Page() {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    if (session?.user) {
        (0, navigation_1.redirect)('/dashboard');
    }
    else {
        (0, navigation_1.redirect)('/api/auth/signin');
    }
}
