'use client';

import { useState } from "react";

function useSpotlight(darkInLight = false) {
    const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });
    const onMouseMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpot({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
    };
    const onMouseLeave = () => setSpot(s => ({ ...s, visible: false }));
    const overlayStyle = (color) => ({
        background: `radial-gradient(circle 200px at ${spot.x}px ${spot.y}px, ${color}, transparent 70%)`,
        opacity: spot.visible ? 1 : 0,
        transition: 'opacity 400ms ease',
    });
    const overlay = darkInLight ? (
        <>
            <div className="dark:hidden pointer-events-none absolute inset-0" style={overlayStyle('rgba(0,0,0,0.12)')} aria-hidden="true" />
            <div className="hidden dark:block pointer-events-none absolute inset-0" style={overlayStyle('rgba(255,255,255,0.18)')} aria-hidden="true" />
        </>
    ) : (
        <div className="pointer-events-none absolute inset-0" style={overlayStyle('rgba(255,255,255,0.18)')} aria-hidden="true" />
    );
    return { onMouseMove, onMouseLeave, overlay };
}

function Button({ children, type = "default", linkButtonUrl }) {
    const { onMouseMove, onMouseLeave, overlay } = useSpotlight(type === 'info');

    return (
        <>
            {type === "default" && (
                <a href={linkButtonUrl}>
                    <button
                        className="
                    relative overflow-hidden
                    vetro-glass-button
                    hover:bg-black/50 dark:hover:bg-white/50
                    h-fit animate-fade-in transition ease-in-out duration-100
                    text-gray-800 dark:text-white text-center rounded-full
                    z-50 hover:text-black"
                        type="submit"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* Edge refraction */}
                        <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                backdropFilter: 'blur(6px) brightness(1.1) saturate(2.5)',
                                WebkitBackdropFilter: 'blur(6px) brightness(1.1) saturate(2.5)',
                                maskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, transparent 65%, black 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 50%, transparent 65%, black 100%)',
                            }}
                            aria-hidden="true"
                        />
                        {overlay}
                        <div className="
                        p-3 h-fit rounded-full
                        hover:shadow-[0_0_0_4px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_0_4px_rgba(0,0,0,0.25)]"
                        >
                            {children}
                        </div>
                    </button>
                </a>
            )}
            {type === "info" && (
                <a href={linkButtonUrl}>
                    <button
                        className="
                    relative overflow-hidden
                    vetro-glass-button
                    h-fit animate-fade-in transition ease-in-out duration-100
                    text-white text-center rounded-full
                    z-50 text-sm"
                        type="submit"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* Stained glass gradient */}
                        <div
                            className="pointer-events-none absolute inset-0 white/10 dark:black/10"
                            aria-hidden="true"
                        />
                        {/* Specular highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />
                        {overlay}
                        <div className="relative px-3 py-1 h-fit rounded-full">
                            {children}
                        </div>
                    </button>
                </a>
            )}
            {type === "link" && (
                <a href={linkButtonUrl} className="flex items-center justify-center">
                    <button
                        className="
                        relative overflow-hidden
                        vetro-glass
                        text-lg m-4 min-w-[25%]
                        animate-fade-in transition ease-in-out duration-100
                        text-white text-center rounded-full"
                        type="submit"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* Stained glass gradient */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-500/40 via-indigo-500/30 to-rose-500/50"
                            aria-hidden="true"
                        />
                        {/* Specular highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/[0.22] to-transparent" aria-hidden="true" />
                        {overlay}
                        <div className="relative py-2 px-8 h-fit rounded-full text-black dark:text-white">
                            {children}
                        </div>
                    </button>
                </a>
            )}
            {type === "link-navbar" && (
                <a href={linkButtonUrl} className="flex items-center justify-center">
                    <button
                        className="
                        relative overflow-hidden
                        vetro-glass
                        text-xs
                        animate-fade-in transition ease-in-out duration-100
                        text-white text-center rounded-full"
                        type="submit"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* Stained glass gradient */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-500/50 via-indigo-500/50 to-rose-500/50"
                            aria-hidden="true"
                        />
                        {/* Specular highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/[0.22] to-transparent" aria-hidden="true" />
                        {overlay}
                        <div className="relative py-2 px-4 h-fit rounded-full">
                            {children}
                        </div>
                    </button>
                </a>
            )}
        </>
    )
}

export default Button;
