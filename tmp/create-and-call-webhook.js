require('dotenv').config();
const crypto = require('crypto');
const { PrismaClient } = require('@prisma/client');
const fetch = require('node-fetch');

(async ()=>{
  const db = new PrismaClient();
  try{
    // create on-ramp transaction for userId 3
    const token = 'testtoken_' + Math.random().toString(36).slice(2,10);
    const tx = await db.onRampTransaction.create({ data: {
      userId: 3,
      token,
      amount: 5000,
      status: 'Processing',
      type: 'DEPOSIT'
    }});
    console.log('Created onRampTransaction:', tx);

    // prepare webhook payload
    const payload = {
      token: token,
      user_identifier: '3',
      amount: 5000
    };

    const secret = process.env.WEBHOOK_SECRET || 'dev_secret';
    const signature = crypto.createHmac('sha256', secret).update(JSON.stringify(payload)).digest('hex');

    // POST to webhook
    const res = await fetch('http://localhost:3003/hdfcWebhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hdfc-signature': signature
      },
      body: JSON.stringify(payload)
    });

    const text = await res.text();
    console.log('Webhook response status:', res.status);
    console.log('Webhook response body:', text);

    // re-query transaction and balance
    const reTx = await db.onRampTransaction.findUnique({ where: { id: tx.id } });
    console.log('After webhook, transaction:', reTx);
    const balance = await db.balance.findUnique({ where: { userId: 3 } });
    console.log('User balance (id 3):', balance);
  }catch(e){
    console.error('ERR', e);
  } finally{
    await db.$disconnect();
  }
})();
