// Bank Admin Console Script
// Run this script to check bank status during development
// Usage: node scripts/bank-admin.js

const fetch = require('node-fetch');

async function getBankStatus() {
    try {
        const response = await fetch('http://localhost:3001/api/bank/balance?admin_key=dev_admin_2024');
        const data = await response.json();
        
        if (data.success) {
            console.log('\n🏦 BANK ADMINISTRATION PANEL');
            console.log('═══════════════════════════════════════');
            console.log(`📊 Bank Reserves: ${data.bank.reservesInCrores}`);
            console.log(`👥 Total Users: ${data.users.totalUsers}`);
            console.log(`💰 User Balances: ${data.users.totalUserBalancesFormatted}`);
            console.log(`📈 Transactions: ${data.transactions.successful}/${data.transactions.total} (${data.transactions.successRate})`);
            console.log(`💡 Bank Health: ${data.healthCheck.bankSolvency}`);
            console.log(`🔄 Total Money in System: ₹${data.healthCheck.totalCirculation.toLocaleString('en-IN')}`);
            console.log('═══════════════════════════════════════\n');
        } else {
            console.error('❌ Error:', data.error);
        }
    } catch (error) {
        console.error('❌ Failed to connect to bank API:', error.message);
        console.log('💡 Make sure your development server is running on http://localhost:3001');
    }
}

getBankStatus();