"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT = PUT;
const server_1 = require("next/server");
const next_auth_1 = require("next-auth");
const prisma_1 = __importDefault(require("@/lib/prisma")); // Adjust this import based on your prisma client location
async function PUT(request) {
    try {
        const session = await (0, next_auth_1.getServerSession)();
        if (!session?.user?.email) {
            return server_1.NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const { name, profileImage } = await request.json();
        const updatedUser = await prisma_1.default.user.update({
            where: { email: session.user.email },
            data: {
                name,
                profileImage,
            },
        });
        return server_1.NextResponse.json(updatedUser);
    }
    catch (error) {
        console.error('Error updating user:', error);
        return server_1.NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}
