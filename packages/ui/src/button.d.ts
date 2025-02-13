import { ReactNode } from "react";
interface ButtonProps {
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    className: string;
    type: "submit" | "reset" | "button" | undefined;
}
export declare const Button: ({ onClick, children, className, type }: ButtonProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map