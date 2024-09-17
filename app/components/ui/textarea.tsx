import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, placeholder, ...props }, ref) => {
        return (
            <textarea
                className={`w-full h-32 resize-none p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-app-green/20 ${className}`}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    }
);

TextArea.displayName = "TextArea";

export default TextArea;
