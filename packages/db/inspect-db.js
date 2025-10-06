const { PrismaClient } = require('@prisma/client');

(async () => {
  const db = new PrismaClient();
  try {
    const users = await db.user.findMany({ select: { id: true, number: true, name: true } });
    console.log('USERS:', users);

    const balances = await db.balance.findMany({ select: { id: true, userId: true, amount: true } });
    console.log('BALANCES:', balances);

    const txs = await db.onRampTransaction.findMany({ select: { id: true, userId: true, token: true, status: true, amount: true } });
    console.log('ONRAMP_TXS:', txs);

    const counts = {
      users: await db.user.count(),
      balances: await db.balance.count(),
      onRampTransactions: await db.onRampTransaction.count(),
    };
    console.log('COUNTS:', counts);

  } catch (err) {
    console.error('ERROR while inspecting DB:', err);
  } finally {
    await db.$disconnect();
  }
})();
