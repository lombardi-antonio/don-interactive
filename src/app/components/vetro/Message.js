'use client';

import { useState } from "react";

function Message({ type = "info", children, onDismiss }) {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
        setDismissed(true);
        onDismiss?.();
    };

    return (
        <div className="
        overflow-hidden
        absolute my-1 md:my-6 flex items-center
        animate-fade-in transition ease-in-out duration-500
        text-gray-800 dark:text-white
        rounded-3xl vetro-glass
        z-50
        ">
            {/* Specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/[0.18] to-transparent" aria-hidden="true" />

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
            <p className="text-center text-blue-500 dark:text-blue-400 px-4 py-3 whitespace-nowrap">
                {children}
            </p>

            {/* Groove divider — carved into the glass */}
            <div
                className="self-stretch w-px flex-shrink-0"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.12) 20%, rgba(0,0,0,0.12) 80%, transparent)',
                    boxShadow: '1px 0 0 rgba(255,255,255,0.18)',
                }}
                aria-hidden="true"
            />

            {/* Dismiss button — right segment */}
            <button
                onClick={handleDismiss}
                className="relative px-4 py-3 text-blue-500 dark:text-blue-400 hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors duration-150"
                aria-label="Dismiss"
            >
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    );
}

export default Message;
