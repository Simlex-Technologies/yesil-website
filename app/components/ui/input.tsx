import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, placeholder, ...props }, ref) => {
        return (
            <input
                type={type}
                className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-green/20 ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
