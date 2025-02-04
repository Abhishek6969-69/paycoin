"use client"
import React, { Children } from 'react'
import { useState } from 'react'
import { Card } from '@repo/ui/card'
import Input from '@repo/ui/input'
import { Button } from '@repo/ui/button'
import P2PTransfermoney from '../../lib/actions/p2ptransfer'
import { Label } from '@repo/ui/label'
function P2PTransfer() {
  const [to,setto]=useState('')
  const [amount,setamount]=useState('')
  const [sentmoney1,setsentmoney]=useState<any>(false)
  return (
    <div className=' flex justify-center  items-center  w-[900px] h-[100%]'>
        <Card title="send" >
            <div className='p-2 py-4 '>
              <Label label='Number' className=''/>
            <Input type='tel'  placeholder='number' className=''  onChange={(value) => setto(value)}/>
            <Label label='Amount' className=''/>
            <Input placeholder='amount' type="number" className=""onChange={(value)=>setamount(value)}/>
            <div className=' flex justify-center items-center mt-4'>
            {sentmoney1?<p className='text-[#28A745] capitalize text-xl'>sent   ₹{amount} to {to}</p>:null}
            </div>
            <div className=' mt-4   flex justify-center'>
            <Button type='submit' className=' w-full p-3 text-xl'  onClick={async()=>{
            const sentmoney=  await P2PTransfermoney(to,Number(amount)*100)
            setsentmoney(sentmoney)
            }} >send</Button>
            
            </div>
            
            </div>
        </Card>
    </div>
  )
}

export default P2PTransfer