import React from 'react'

export default function Input({placeholder,onChange,type,className}:{placeholder:string,onChange:(value:string)=>void,type:string,className:string}) {
  return (
    <div className=' '>
       
        <input className={`border  px-4 py-2  rounded   ${className}`} type={type}  placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}
