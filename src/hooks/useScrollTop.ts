// Import necessary dependencies
import { useState, useEffect, useCallback } from 'react';

// useScrollTop is a custom hook that manages the visibility of a scroll-to-top button and provides a function to scroll to the top of the page
const useScrollTop = () => {
    // Initialize state variable
    const [showScroll, setShowScroll] = useState(false);

    // Check if the scroll-to-top button should be visible
    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);

    // Scroll to the top of the page
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [checkScrollTop]);

    // Return the visibility state of the scroll-to-top button and the scrollTop function
    return { showScroll, scrollTop };
}

export default useScrollTop;