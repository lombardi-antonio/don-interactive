
'use client'

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const bgElement00 = '/bgElement00.svg';
const bgElement01 = '/bgElement01.svg';
const bgElement02 = '/bgElement02.svg';
const bgElement03 = '/bgElement03.svg';
const bgElement04 = '/bgElement04.svg';
const bgElement05 = '/bgElement05.svg';

function TerrazzoDynamic() {
    /**
     * Vetro Dynamic Background Component - A Background component that displays a dynamic terrazzo pattern.
     * It is used to create a visually appealing background for the Vetro components.
     */

    // Memoize the array of all available SVG elements
    const bgElements = useMemo(() => [
        bgElement00, bgElement01, bgElement02, bgElement03, bgElement04, bgElement05
    ], []);

    const [objects, setObjects] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [speed] = useState(6); // pixels per frame

    // Initialize objects after component mounts on client
    useEffect(() => {
        setIsClient(true);

        // Generate multiple floating objects (only on client)
        const generateRandomObject = () => ({
            id: Math.random(),
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
            directionX: (Math.random() - 0.5) * 2,
            directionY: (Math.random() - 0.5) * 2,
            svg: bgElements[Math.floor(Math.random() * bgElements.length)],
            size: 30 + Math.random() * 10, // Random size between 30-40px
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5)
        });

        setObjects(Array.from({ length: 8 }, generateRandomObject));
    }, [bgElements]);

    useEffect(() => {
        const moveRandomly = () => {
            if (!isClient) return; // Don't run if not on client

            setObjects(prevObjects =>
                prevObjects.map(obj => {
                    let newX = obj.x + obj.directionX * speed;
                    let newY = obj.y + obj.directionY * speed;
                    let newDirectionX = obj.directionX;
                    let newDirectionY = obj.directionY;
                    let newRotation = (obj.rotation + obj.rotationSpeed) * 1;

                    // Get viewport dimensions safely
                    const maxX = typeof window !== 'undefined' ? window.innerWidth : 800;
                    const maxY = typeof window !== 'undefined' ? window.innerHeight : 600;

                    // Bounce off edges and add some randomness
                    if (newX <= 0 || newX >= maxX) {
                        newDirectionX = -obj.directionX + (Math.random() - 0.5) * 0.5;
                        newX = Math.max(0, Math.min(maxX, newX));
                    }

                    if (newY <= 0 || newY >= maxY) {
                        newDirectionY = -obj.directionY + (Math.random() - 0.5) * 0.5;
                        newY = Math.max(0, Math.min(maxY, newY));
                    }

                    // Normalize direction to prevent it from getting too fast
                    const magnitude = Math.sqrt(newDirectionX * newDirectionX + newDirectionY * newDirectionY);
                    if (magnitude > 0.05) {
                        newDirectionX = (newDirectionX / magnitude) * 0.05;
                        newDirectionY = (newDirectionY / magnitude) * 0.05;
                    }

                    return {
                        ...obj,
                        x: newX,
                        y: newY,
                        directionX: newDirectionX,
                        directionY: newDirectionY,
                        rotation: newRotation
                    };
                })
            );
        };

        const interval = setInterval(moveRandomly, 64);
        return () => clearInterval(interval);
    }, [speed, bgElements, isClient]);

    // Don't render anything during SSR to prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="header grid grid-cols-6 w-full fixed pointer-events-none z-0">
                {/* Placeholder during SSR */}
            </div>
        );
    }

    return (
        <div className="header grid grid-cols-6 w-full fixed pointer-events-none z-0">
            {/* <div className="terrazzo-main col-span-6 bg-[url('../../public/TerrazzoLess.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] min-h-[512px]" role="banner"></div>
            <div className="terrazzo-end col-span-6 bg-[url('../../public/TerrazzoLessEnd.png')] dark:bg-[url('../../public/TerrazzoLessEnd.png')] h-[512px]"></div> */}
            {objects.map((obj) => (
                <div
                    key={obj.id}
                    className="absolute transition-all duration-75 ease-linear"
                    style={{
                        left: `${obj.x}px`,
                        top: `${obj.y}px`,
                        opacity: obj.opacity,
                        transform: `rotate(${obj.rotation}deg)`
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
    )
}

export default TerrazzoDynamic;