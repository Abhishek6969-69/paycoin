"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = __importDefault(require("@repo/db/client"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const webhookschema = zod_1.z.object({
    token: zod_1.z.string(),
    user_identifier: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    amount: zod_1.z.number()
});
app.post("/hdfcWebhook", async (req, res) => {
    const parsed = webhookschema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json("input given is incorrect");
    }
    const { token, user_identifier, amount } = parsed.data;
    const multipliedAmount = amount * 100;
    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    if (!token) {
        return res.status(400).json("token is required");
    }
    const onramptrans = await client_1.default.onRampTransaction.findFirst({
        where: {
            token
        }
    });
    if (onramptrans?.status == "Success") {
        return res.json({ msg: "payment is already done you are trying again" });
    }
    const paymentInformation = {
        token: token,
        userId: user_identifier.toString(),
        amount: (multipliedAmount)
    };
    try {
        await client_1.default.$transaction([
            client_1.default.balance.updateMany({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            client_1.default.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success",
                }
            })
        ]);
        res.json({
            message: "Captured"
        });
    }
    catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        });
    }
    finally {
        (async () => {
            await client_1.default.$disconnect(); // Close Prisma connection on successful execution
        });
    }
});
app.listen(3003);
