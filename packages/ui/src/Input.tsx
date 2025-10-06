import React from 'react'

type InputProps = {
  placeholder: string;
  onChange: (value: string) => void;
  type: string;
  className?: string;
  maxlength?: number;
  value?: string;
}

export default function Input({ placeholder, onChange, type, className = '', maxlength, value }: InputProps) {
  return (
    <div>
      <input
        value={value}
        maxLength={maxlength}
        className={`border px-4 py-2 rounded ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
