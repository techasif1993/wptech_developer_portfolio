"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ServiceCardProps {
    title: string;
    excerpt: string;
    icon?: React.ReactNode;
    slug: string;
    className?: string;
}

export const ServiceCard = ({ title, excerpt, icon, slug, className }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-primary/50 hover:bg-white/10 h-full flex flex-col justify-between",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {icon}
                </div>

                <h3 className="mb-3 text-xl font-bold font-heading text-white transition-colors group-hover:text-primary">
                    {title}
                </h3>

                <div
                    className="mb-8 text-sm leading-relaxed text-slate-400 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />
            </div>

            <Link href={`/services/${slug}`} className="relative z-10 inline-flex items-center text-sm font-semibold text-white group-hover:text-primary">
                Learn More <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
        </motion.div>
    );
};
