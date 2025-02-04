"use client"
import prisma from "@repo/db/client";
import { balanceAtom } from "@repo/store/atoms/balanceAtom";
import {useBalance }from "@repo/store/hooks/useBalance";
import { Label } from "@repo/ui/label";
// import Createonramptransaction from "app/lib/actions/createonramtransaction";
import Createonramptransaction from "app/lib/actions/createonRamtransaction";
import { Card } from "@repo/ui/card";
import Option from "@repo/ui/option";
import Input from "@repo/ui/input";
import { useState ,useTransition} from "react";
import { Button } from "@repo/ui/button";


export default function Addmoney(){
    const SUPPORTED_BANK=[{
        name:'HDFC',
        redirecturl:"https://netbanking.hdfcbank.com/netbanking/"
    },{
        name:"KOTAK",
        redirecturl:"https://netbanking.kotak.com/knb2/"
    }]
    const [redirecturl, setredirecturl] = useState(SUPPORTED_BANK[0]?.redirecturl);
    const [amount,setamount]=useState("");
   const [token4,settoken]=useState<string>("")
   
    const [provider,setprovider]=useState(SUPPORTED_BANK[0]?.name || "")
    return(
        <div className=" w-[500px]">
                
            <Card title="Add Money" className="border p-4  rounded   mx-4" >
            <Input className="" placeholder="Amount" type="number" onChange={(value)=>{
                setamount(value)
            }}/>

            <Label  label="bank" className=" capitalize"/>
            <Option onselect={(value) => {
            setredirecturl(SUPPORTED_BANK.find(x => x.name === value)?.redirecturl || "")
            setprovider(SUPPORTED_BANK.find(x => x.name === value)?.name || "")
        }} options={SUPPORTED_BANK.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button type="submit" className=""  onClick={async() => {
               console.log("button is clicked")
                const newToken=await Createonramptransaction({amount ,provider})
                console.log(newToken,"nsj")
                settoken(newToken || "")
               
                window.location.href =  `http://localhost:3001/transactions/fakebankingui?token=${newToken}` || "";
              
              
            }}>
            Add Money
           
            </Button>
           
        </div>
            </Card>
        </div>
    )
}