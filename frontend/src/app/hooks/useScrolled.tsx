import {useEffect, useState} from "react";

export const useScrolled = (threshold: number = 60): boolean => {
    const [scrolled, isScrolled] = useState(false);

    const handleScroll = () => {
        isScrolled(window.scrollY > threshold);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [threshold]);

    return scrolled
}