import express from "express";
import db from "@repo/db/client";
import {z} from "zod"
const app = express();

app.use(express.json()) 
const webhookschema = z.object({
    token: z.string(),
    user_identifier: z.union([z.string(), z.number()]),
    amount:  z.number()
});
app.post("/hdfcWebhook", async (req, res) => {
  
    const parsed=webhookschema.safeParse(req.body);

    if(!parsed.success){
        return res.status(400).json("input given is incorrect")
    }
   
    const{token,user_identifier,amount}=parsed.data
    const multipliedAmount = amount * 100;

    //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
    if(!token){
        return res.status(400).json("token is required")
    }
    const onramptrans= await db.onRampTransaction.findFirst({
        where:{
            token
        }
    })
  
    if(onramptrans?.status=="Success"){
        return res.json({msg:"payment is already done you are trying again"})
    }
    const paymentInformation: {
        token: string;
        userId: string;
        amount: number
    } = {
        token: token,
        userId: user_identifier.toString(),
        amount: (multipliedAmount)
    };

    try {
        await db.$transaction([
            db.balance.updateMany({
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
            db.onRampTransaction.updateMany({
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
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
    finally{(async () => {
        await db.$disconnect(); // Close Prisma connection on successful execution
      });
    }

})

app.listen(3003);