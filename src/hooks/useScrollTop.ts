import { useState, useEffect, useCallback } from 'react';

const useScrollTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [checkScrollTop]);

    return { showScroll, scrollTop };
}

export default useScrollTop;