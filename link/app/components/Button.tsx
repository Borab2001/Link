'use client';

import clsx from 'clsx';

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return (
        <button
            onClick={onClick} 
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                transition
                min-w-[72px]
            `,
            disabled && "opacity-50 cursor-default",
            fullWidth ? "w-full" : "w-full sm:w-auto",
            secondary ? "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-neutral-800" : "text-white",
            danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
            !secondary && !danger && "bg-indigo hover:bg-indigoDarker focus-visible:outline-indigoDark"
            )}
        >
            {children}
        </button>
    );
}
 
export default Button;