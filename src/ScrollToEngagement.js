// src/ScrollToEngagement.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToEngagement() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && location.hash === '#engagement') {
            const element = document.getElementById('engagement');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // petit délai pour s'assurer que le DOM est chargé
            }
        }
    }, [location]);

    return null;
}

export default ScrollToEngagement;
