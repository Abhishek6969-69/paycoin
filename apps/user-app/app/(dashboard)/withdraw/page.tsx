import React from 'react';
import WithdrawMoney from '../../../components/Withdrawmoney';

export default function WithdrawPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1320px]">
        <WithdrawMoney />
      </div>
    </div>
  );
}
