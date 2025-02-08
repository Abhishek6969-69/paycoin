"use client";

import { Label } from "@repo/ui/label";
import Createonramptransaction from "app/lib/actions/createonRamtransaction";
import { Card } from "@repo/ui/card";
import Option from "@repo/ui/option";
import Input from "@repo/ui/input";
import { useState } from "react";
import { Button } from "@repo/ui/button";

export default function AddMoney() {
  const SUPPORTED_BANK = [
    { name: "HDFC", redirecturl: "https://netbanking.hdfcbank.com/netbanking/" },
    { name: "KOTAK", redirecturl: "https://netbanking.kotak.com/knb2/" },
  ];

  const [redirecturl, setRedirecturl] = useState(SUPPORTED_BANK[0]?.redirecturl);
  const [amount, setAmount] = useState("");
  const [token4, setToken] = useState<string>("");
  const [provider, setProvider] = useState(SUPPORTED_BANK[0]?.name || "");

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <Card title="Add Money" className="border p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <Label label="Amount" className="block mb-1 capitalize" />
          <Input
            className="w-full"
            placeholder="Enter amount"
            type="number"
            
            onChange={(value: string) => setAmount(value)}
          />
        </div>

        <div className="mb-4">
          <Label label="Bank" className="block mb-1 capitalize" />
          <Option
            onselect={(value) => {
              const selectedBank = SUPPORTED_BANK.find((x) => x.name === value);
              setRedirecturl(selectedBank?.redirecturl || "");
              setProvider(selectedBank?.name || "");
            }}
            options={SUPPORTED_BANK.map((x) => ({ key: x.name, value: x.name }))}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            className="w-full md:w-auto"
            onClick={async () => {
              console.log("Button clicked");
              const newToken = await Createonramptransaction({ amount, provider });
              console.log(newToken, "Token generated");
              setToken(newToken || "");
              window.location.href = `http://localhost:3001/transactions/fakebankingui?token=${newToken}` || "";
            }}
          >
            Add Money
          </Button>
        </div>
      </Card>
    </div>
  );
}
