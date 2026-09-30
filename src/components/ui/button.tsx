import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-semibold rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
        
        const variants = {
            primary: "bg-[#0b1021] text-white hover:bg-[#1a2240] focus:ring-[#0b1021]", // dark blue almost black
            secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-200",
            outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-700 focus:ring-zinc-200",
            ghost: "bg-transparent text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-200"
        };

        const sizes = {
            sm: "text-xs px-3 py-1.5",
            md: "text-sm px-5 py-3.5",
            lg: "text-base px-6 py-4"
        };

        const width = fullWidth ? "w-full" : "";

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
