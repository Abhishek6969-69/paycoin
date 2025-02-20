"use client"

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
    <div className=' mb-36 flex justify-center  items-center  md:w-[900px] md:h-[100%]'>
        <Card title="send" className=' md:w-[500px]' >
            <div className='p-2 py-4 '>
              <Label label='Number' className='md:ml-5'/>
            <Input type='tel'  placeholder='number' className=' w-full md:w-[400px] md:ml-4'  onChange={(value) => setto(value)}/>
            <Label label='Amount' className=''/>
            <Input placeholder='amount' type="number" className="w-full md:w-[400px] md:ml-4"onChange={(value)=>setamount(value)}/>
            <div className=' flex justify-center items-center mt-4'>
            {sentmoney1?<p className='text-[#28A745] capitalize text-xl'>sent   ₹{amount} to {to}</p>:null}
            </div>
            <div className=' mt-4   flex justify-center'>
            <Button type='submit' className='w-full md:w-[400px] md:mr-5 p-3 text-xl'  onClick={async()=>{
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