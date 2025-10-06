const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

async function run(){
  const u = await db.user.findUnique({where:{number:'9696694046'}})
  console.log('found user', u)
  await db.$disconnect()
}
run().catch(e=>{console.error(e); process.exit(1)})
