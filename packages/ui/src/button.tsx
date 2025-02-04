"use client";

import { ReactNode } from "react";
import { MouseEventHandler } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick:  (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  className:string,
  type:"submit" | "reset" | "button" | undefined;
}

export const Button = ({ onClick, children,className,type }: ButtonProps) => {
  return (
    <button className={`bg-blue-500 text-white hover:bg-blue-600
    ${className} text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 
    `} onClick={onClick} type={type}>
    {children}
  </button>
  

  );
};
