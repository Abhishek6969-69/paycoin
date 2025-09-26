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
    const result = await Createonramptransaction({ amount, provider });
    if(result && result.token){
      setToken(result.token);
      toast.dismiss(loadingtoast);
      toast.success("Redirecting to bank server for payment approval...");
      // Use the redirectUrl from the result instead
      window.location.href = result.redirectUrl;
    }
  }
  catch(e){
    toast.dismiss(loadingtoast);
    toast.error("An error occurred. Please try again.");
    console.error("Transfer failed:", e);
  }
  
}
  return (
    <Card title="Add Money" className="w-full shadow-sm bg-white border border-gray-200">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <Label label="Amount" className="text-sm font-medium text-gray-700" />
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
            <Input 
              placeholder="Enter amount" 
              type="number" 
              className="w-full pl-8 bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 rounded-lg transition-all" 
              onChange={(value) => setAmount(value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label label="Select Bank" className="text-sm font-medium text-gray-700" />
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
          variant="primary"
          size="lg"
          className="w-full" 
          onClick={handelclick}
        >
          Add Money
        </Button>
      </div>
    </Card>
  );
}
