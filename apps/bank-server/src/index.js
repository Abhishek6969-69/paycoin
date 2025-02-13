"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const transactions = {};
app.post("/dummy", async (req, res) => {
    const { token, user_identifier, amount } = req.body;
    transactions[token] = {
        user_identifier,
        amount: Number(amount),
        webhookUrl: "http://localhost:3003/hdfcWebhook",
        status: "Pending"
    };
    return res.json({ message: "Transaction created" });
});
app.get("/transactions", async (req, res) => {
    return res.json(transactions);
});
app.post("/confirm-payment", async (req, res) => {
    const { amount, user_identifier, token } = req.body;
    try {
        await axios.post("http://localhost:3003/hdfcWebhook", {
            user_identifier: user_identifier.toString(),
            amount,
            token
        });
        res.status(200).json({ message: "Payment confirmed" });
    }
    catch (error) {
        console.error("Error in webhook call:", error);
        res.status(500).json({ error: "Webhook call failed" });
    }
});
app.listen(3004, () => {
});
