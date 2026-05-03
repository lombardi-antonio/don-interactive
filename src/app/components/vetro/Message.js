'use client';

import { useState } from "react";

function useSpotlight() {
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
    const overlay = (
        <>
            <div className="dark:hidden pointer-events-none absolute inset-0" style={overlayStyle('rgba(0,0,0,0.12)')} aria-hidden="true" />
            <div className="hidden dark:block pointer-events-none absolute inset-0" style={overlayStyle('rgba(255,255,255,0.18)')} aria-hidden="true" />
        </>
    );
    return { onMouseMove, onMouseLeave, overlay };
}

function Message({ type = "info", children, onDismiss, relative = false }) {
    const [dismissed, setDismissed] = useState(false);
    const { onMouseMove, onMouseLeave, overlay } = useSpotlight();

    if (dismissed) return null;

    const handleDismiss = () => {
        setDismissed(true);
        onDismiss?.();
    };

    return (
        <div className={`
        ${relative ? 'relative inline-flex' : 'absolute left-1/2 -translate-x-1/2 flex'} overflow-hidden w-auto items-center
        animate-fade-in transition ease-in-out duration-500
        text-gray-800 dark:text-white rounded-3xl
        vetro-glass-button !bg-white dark:!bg-zinc-900 z-50
        `}>
            {/* Stained glass gradient */}
            <div
                className="pointer-events-none absolute inset-0 white/10 dark:black/10"
                aria-hidden="true"
            />
            {/* Specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />

            {/* Info circle — left cap: left arc is the pill edge, right arc is carved into the glass */}
            <div
                className="relative flex items-center justify-center self-stretch flex-shrink-0"
                style={{
                    padding: '14px',
                    background: 'rgba(34, 116, 249, 0.28)',
                    borderTopRightRadius: '50%',
                    borderBottomRightRadius: '50%',
                    boxShadow: 'inset -2px 0 5px rgba(0,0,0,0.10), inset -1px 0 0 rgba(255,255,255,0.15)',
                }}
                aria-hidden="true"
            >
                <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="3.5" r="1.1" />
                    <rect x="5.1" y="5.5" width="1.8" height="4" rx="0.9" />
                </svg>
            </div>

            {/* Message text */}
            <p className="text-center text-blue-500 dark:text-blue-400 text-xl px-4 py-2 whitespace-nowrap">
                {children}
            </p>

            {/* Groove divider — carved into the glass */}
            <div
                className="self-stretch w-px flex-shrink-0 bg-gradient-to-b from-white dark:from-white/10 to-transparent"
                //style={{
                //background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.12) 20%, rgba(255, 255, 255, 0.05) 20%, transparent)',
                //}}
                aria-hidden="true"
            />

            {/* Dismiss button — right segment */}
            <button
                onClick={handleDismiss}
                className="relative overflow-hidden self-stretch flex items-center px-4 text-blue-500 dark:text-blue-400 transition-colors duration-150"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                aria-label="Dismiss"
            >
                {overlay}
                <svg className="relative w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    );
}

export default Message;
