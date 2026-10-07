import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", label, iconLeft, iconRight, error, id, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label htmlFor={id} className="text-xs font-bold text-zinc-900">
                        {label}
                    </label>
                )}
                <div className="relative flex items-center">
                    {iconLeft && (
                        <div className="absolute left-4 text-zinc-400">
                            {iconLeft}
                        </div>
                    )}
                    <input
                        ref={ref}
                        id={id}
                        className={`w-full h-12 bg-white border rounded-full text-sm placeholder:text-zinc-400 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-900
                            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200 hover:border-zinc-300 focus:border-zinc-900"}
                            ${iconLeft ? "pl-11" : "pl-5"}
                            ${iconRight ? "pr-11" : "pr-5"}
                            ${className}
                        `}
                        {...props}
                    />
                    {iconRight && (
                        <div className="absolute right-4 text-zinc-400">
                            {iconRight}
                        </div>
                    )}
                </div>
                {error && <span className="text-xs text-red-500 font-medium ml-2">{error}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";
