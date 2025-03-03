import React from 'react'

export default function Input({placeholder,onChange,type,className, maxlength}:{placeholder:string,onChange:(value:string)=>void,type:string,className:string, maxlength?:number}) {
  return (
    <div className=' '>
       
        <input maxLength={maxlength} className={`border  px-4 py-2  rounded    ${className}`} type={type}  placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    </div>
  )
}
