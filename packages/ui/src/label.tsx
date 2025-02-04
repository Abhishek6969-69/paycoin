import React from 'react'

 export function Label({label,className}:{label:string,className:string}) {
  return (
    <label className={`block ml-2  mt-2 mb-1   ${className}`} >{label}</label>
  )
}

