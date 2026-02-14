import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'trydo';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    className?: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:-translate-y-1';

    const variants = {
        primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 border border-transparent',
        secondary: 'bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 border border-transparent',
        trydo: 'bg-[#f9004d] text-white shadow-lg shadow-[#f9004d]/30 hover:shadow-[#f9004d]/50 border border-transparent',
        outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-6 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...(props as any)}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
