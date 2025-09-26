import React from 'react';
import WithdrawMoney from '../../../components/Withdrawmoney';

export default function WithdrawPage() {
  return (
    <div className="w-full h-screen text-[#333333] bg-[#FBFBFB]">
      <div className="text-4xl text-[#E0E1DD] pt-8 ml-16 mb-8 font-bold">
        Cash Out to Bank
      </div>
      <div className="flex justify-center">
        <WithdrawMoney />
      </div>
    </div>
  );
}