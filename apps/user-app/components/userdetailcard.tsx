import React, { useState } from 'react'
import Image from 'next/image';
import { Card } from '@repo/ui/card';
import img from 'abhi.jpeg'
export default function Userdetailcard({session1}:{session1:any}) {
 const [src1,setsrc]=useState<string>("")
    return (
      <div className="max-w-sm w-[400px] bg-white border border-gray-200 rounded-lg shadow-md p-6">
    
    <h2 className="text-2xl font-bold text-gray-800 mb-4">User Details</h2>
    <div className="space-y-2">
        <div className=' flex  items-center justify-center'>
            <div>
        <Image className='rounded-full h-36 w-36'
      src={src1 || img}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
        </div>
      <Detail label="Name" value={session1?.user.name || "Not Available"} />
      <Detail label="Phone Number" value={session1?.user.email} />
     
      
    </div>
  </div>
  )
}
const Detail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between text-gray-700">
      <span className="font-semibold">{label}:</span>
      <span className="truncate">{value}</span>
    </div>
  );
  

