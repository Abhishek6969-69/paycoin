const db = require('./index').default || require('./index');

async function run(){
  const u = await db.user.findUnique({where:{number:'9696694046'}})
  console.log('found user', u)
  await db.$disconnect()
}
run().catch(e=>{console.error(e); process.exit(1)})
