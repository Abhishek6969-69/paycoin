const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transactions: Record<string, { 
    user_identifier: string; 
    amount: number; 
    webhookUrl: string; 
    status: "Pending" | "Success"; 
}> = {}; 

app.post("/dummy", async (req:any, res:any) => {
    const { token, user_identifier, amount } = req.body;
    transactions[token] = {
        user_identifier,
        amount: Number(amount),
        webhookUrl: process.env.WEBHOOK_URL || "",
        status: "Pending"
    };
 return   res.json({ message: "Transaction created" });
});
app.get("/transactions", async (req:any, res:any) => {
   return  res.json(transactions);

})
app.post("/confirm-payment", async (req:any, res:any) => {
    const { amount, user_identifier, token } = req.body;
    try {
        await axios.post(`${process.env.WEBHOOK_URL}/hdfcWebhook` || "", {
            user_identifier:user_identifier.toString(),
            amount,
            token
        });
        res.status(200).json({ message: "Payment confirmed" });
    } catch (error) {
        console.error("Error in webhook call:", error);
        res.status(500).json({ error: "Webhook call failed" });
    }
});


app.listen(process.env.PORT || 3004, () => {
   
});
