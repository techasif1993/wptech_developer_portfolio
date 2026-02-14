"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
    src?: string;
    alt: string;
    className?: string;
    fallbackSrc?: string;
}

export function ProfileImage({ src, alt, className, fallbackSrc = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" }: ProfileImageProps) {
    const [imgSrc, setImgSrc] = useState(src || "/images/profile.jpg");

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={cn("object-cover w-full h-full transition-all duration-700", className)}
            onError={() => {
                // If the current source fails
                if (imgSrc === "/images/profile.jpg" && src && src !== "/images/profile.jpg") {
                    // Try the WP source if local failed and WP source exists
                    setImgSrc(src);
                } else {
                    // Otherwise fallback to generic
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
}
