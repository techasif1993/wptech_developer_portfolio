import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    className = '',
    children,
    hoverEffect = true,
}) => {
    // Trydo Card Style: Dark bg (#191919), subtle border, hover lift
    const baseStyles = 'bg-[#191919] border border-white/5 rounded-xl p-8 transition-all duration-300 relative overflow-hidden group';
    const hoverStyles = hoverEffect ? 'hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {/* Optional: Glossy overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
