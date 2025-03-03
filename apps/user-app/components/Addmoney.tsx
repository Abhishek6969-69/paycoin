"use client";

import { useState } from "react";
import { Card } from "@repo/ui/card";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import Createonramptransaction from "app/lib/actions/createonRamtransaction";
import { Label } from "@repo/ui/label";
import Option from "@repo/ui/option";
import { toast } from "sonner";
export default function AddMoney() {
  const SUPPORTED_BANKS = [
    { name: "HDFC", redirecturl: "https://netbanking.hdfcbank.com/netbanking/" },
    { name: "KOTAK", redirecturl: "https://netbanking.kotak.com/knb2/" },
    {name:"State Bank of India",redirecturl:"https://netbanking.kotak.com/knb2/"}
  ];

  const [redirecturl, setRedirecturl] = useState(SUPPORTED_BANKS[0]?.redirecturl);
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState<string>("");
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
const handelclick=async()=>{
  if(!amount || !provider){
    toast.error("Please fill in all fields!");
    return;
  }
  const parsedamount=Number(amount)
  if(!amount || isNaN(parsedamount) || parsedamount<=0 ){
    toast.error("Please fill in valid  positive value!");
    return;
  }
  const loadingtoast=toast.loading("Processing your request...");
  try{
    const newToken = await Createonramptransaction({ amount, provider });
    if(newToken){
      
      setToken(newToken || "");
                window.location.href = `${process.env.NEXTAUTH_URL}/transactions/fakebankingui?token=${newToken}` || "";
                toast.dismiss(loadingtoast);
    }
  }
  catch(e){
    toast.dismiss(loadingtoast);
    toast.error("An error occurred. Please try again.");
    console.error("Transfer failed:", e);
  }
  
}
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4 md:px-0 mb-36">
      <Card title="Add Money" className="w-full md:w-[500px] shadow-xl bg-gradient-to-br from-gray-900 to-[#1C1F3A] border border-gray-700">
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Label label="Amount" className="text-sm font-medium text-gray-300" />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
              <Input 
                placeholder="Enter amount" 
                type="number" 
                className="w-full pl-8 bg-gray-800/50 border-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 rounded-lg transition-all" 
                onChange={(value) => setAmount(value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label label="Select Bank" className="text-sm font-medium text-gray-300" />
            <Option
              onselect={(value) => {
                const selectedBank = SUPPORTED_BANKS.find((x) => x.name === value);
                setRedirecturl(selectedBank?.redirecturl || "");
                setProvider(selectedBank?.name || "");
              }}
              options={SUPPORTED_BANKS.map((x) => ({ key: x.name, value: x.name }))}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full py-4 text-lg font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300" 
            onClick={handelclick}
          >
            Add Money
          </Button>
        </div>
      </Card>
    </div>
  );
}
