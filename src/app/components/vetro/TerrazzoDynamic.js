
'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const bgElements = [
    '/bgElement00.svg',
    '/bgElement01.svg',
    '/bgElement02.svg',
    '/bgElement03.svg',
    '/bgElement04.svg',
    '/bgElement05.svg',
];

const SPEED = 6;
const COUNT = 8;

function generateObject() {
    return {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        directionX: (Math.random() - 0.5) * 2,
        directionY: (Math.random() - 0.5) * 2,
        svg: bgElements[Math.floor(Math.random() * bgElements.length)],
        size: 30 + Math.random() * 10,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
    };
}

function TerrazzoDynamic() {
    const [objects, setObjects] = useState(null); // null = SSR, array = client
    const stateRef = useRef([]); // mutable positions, never triggers re-renders
    const domRefs = useRef({}); // id -> DOM element
    const rafRef = useRef(null);

    // Mount: generate objects once on client
    useEffect(() => {
        const initial = Array.from({ length: COUNT }, generateObject);
        stateRef.current = initial;
        setObjects(initial); // single render to mount DOM elements
    }, []);

    // Animation loop: runs after objects are mounted
    useEffect(() => {
        if (!objects) return;

        const tick = () => {
            const maxX = window.innerWidth;
            const maxY = window.innerHeight;

            stateRef.current = stateRef.current.map(obj => {
                let { x, y, directionX, directionY, rotation, rotationSpeed } = obj;

                x += directionX * SPEED;
                y += directionY * SPEED;
                rotation += rotationSpeed;

                if (x <= 0 || x >= maxX) {
                    directionX = -directionX + (Math.random() - 0.5) * 0.5;
                    x = Math.max(0, Math.min(maxX, x));
                }
                if (y <= 0 || y >= maxY) {
                    directionY = -directionY + (Math.random() - 0.5) * 0.5;
                    y = Math.max(0, Math.min(maxY, y));
                }

                const magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
                if (magnitude > 0.05) {
                    directionX = (directionX / magnitude) * 0.05;
                    directionY = (directionY / magnitude) * 0.05;
                }

                const el = domRefs.current[obj.id];
                if (el) {
                    el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
                }

                return { ...obj, x, y, directionX, directionY, rotation };
            });

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [objects]);

    if (!objects) {
        return <div className="header grid grid-cols-6 w-full fixed pointer-events-none z-0" />;
    }

    return (
        <div className="header grid grid-cols-6 w-full fixed pointer-events-none z-0">
            {objects.map((obj) => (
                <div
                    key={obj.id}
                    ref={el => { domRefs.current[obj.id] = el; }}
                    className="absolute"
                    style={{
                        top: 0,
                        left: 0,
                        willChange: 'transform',
                        transform: `translate(${obj.x}px, ${obj.y}px) rotate(${obj.rotation}deg)`,
                    }}
                >
                    <Image
                        src={obj.svg}
                        alt="Background element"
                        width={obj.size}
                        height={obj.size}
                        className="w-full h-full"
                    />
                </div>
            ))}
        </div>
    );
}

export default TerrazzoDynamic;
