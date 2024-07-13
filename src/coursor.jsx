// src/components/CursorTrail.js
import React, { useEffect, useState } from 'react';
import './coursor.css';

const CursorTrail = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="trail"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        />
    );
};

export default CursorTrail;
