import React from 'react';

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
    className = '',
    children,
}) => {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export const Section: React.FC<ContainerProps & { id?: string }> = ({
    className = '',
    children,
    id,
}) => {
    return (
        <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
            {children}
        </section>
    );
};
