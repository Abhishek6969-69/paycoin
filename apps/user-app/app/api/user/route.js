"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const next_auth_1 = require("next-auth");
const server_1 = require("next/server");
const auth_1 = require("../../lib/auth");
const GET = async () => {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    if (session.user) {
        console.log(session.user, "yehh");
        return server_1.NextResponse.json({
            user: session.user
        });
    }
    return server_1.NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    });
};
exports.GET = GET;
