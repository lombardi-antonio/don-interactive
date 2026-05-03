'use client';

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

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

// Cap width: 14px padding + 20px icon + 14px padding = 48px
// Kept as a constant so the panel icon column aligns perfectly with the button cap.
const CAP_WIDTH = 48;

const capStyle = (bottomRadius) => ({
    width: CAP_WIDTH,
    flexShrink: 0,
    padding: '14px',
    background: 'rgba(34, 116, 249, 0.28)',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: bottomRadius,
    boxShadow: 'inset -2px 0 5px rgba(0,0,0,0.10), inset -1px 0 0 rgba(255,255,255,0.15)',
    transition: 'border-bottom-right-radius 150ms ease',
});

/**
 * DownloadDropdownButton
 *
 * A pill-shaped download button styled to match the Message component.
 * Clicking it reveals a dropdown panel with platform options.
 *
 * Props:
 *   items — array of { icon, name, href?, disabled? }
 */
function DownloadDropdownButton({ items = [] }) {
    const allDisabled = items.length === 0 || items.every(item => item.disabled || !item.href);
    const [open, setOpen] = useState(false);
    const [panelPos, setPanelPos] = useState({ top: 0, left: 0, width: 0 });
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const panelRef = useRef(null);
    const { onMouseMove, onMouseLeave, overlay } = useSpotlight();

    useEffect(() => {
        if (!open) return;

        const updatePos = () => {
            if (!buttonRef.current) return;
            const r = buttonRef.current.getBoundingClientRect();
            setPanelPos({ top: r.bottom, left: r.left, width: r.width });
        };

        const handleOutsideClick = (e) => {
            if (!wrapperRef.current?.contains(e.target) && !panelRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };

        const handleScroll = (e) => {
            const inWrapper = wrapperRef.current?.contains(e.target);
            const inPanel = panelRef.current?.contains(e.target);
            if (!inWrapper && !inPanel) setOpen(false);
            else updatePos();
        };

        updatePos();
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', updatePos);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', updatePos);
        };
    }, [open]);

    const panel = open && createPortal(
        <div
            ref={panelRef}
            className="overflow-hidden z-50 vetro-glass-button !bg-white dark:!bg-zinc-900 animate-dropdown-in"
            style={{
                position: 'fixed',
                top: panelPos.top,
                left: panelPos.left,
                width: panelPos.width,
                minWidth: 'max-content',
                borderBottomLeftRadius: '1.5rem',
                borderBottomRightRadius: '1.5rem',
                transformOrigin: 'top center',
            }}
        >
            {/* Bottom specular highlight */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-3xl bg-gradient-to-t from-white/20 to-transparent" aria-hidden="true" />

            {items.map((item, i) => {
                const row = (
                    <div
                        className={`
                            flex items-center
                            transition-colors duration-150
                            ${item.disabled || !item.href
                                ? 'opacity-40 cursor-not-allowed'
                                : 'cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 active:bg-black/10 dark:active:bg-white/20'
                            }
                        `}
                    >
                        {/* Icon column — visually extends the button's left cap */}
                        <div
                            className="flex items-center justify-center flex-shrink-0 self-stretch"
                            style={{ ...capStyle(0), borderTopRightRadius: 0 }}
                            aria-hidden="true"
                        >
                            <div className="w-5 h-5 flex items-center justify-center text-blue-500 dark:text-blue-400">
                                {item.icon}
                            </div>
                        </div>

                        {/* Platform name */}
                        <p className="text-blue-500 dark:text-blue-400 text-sm px-4 py-3 whitespace-nowrap">
                            {item.name}
                        </p>
                    </div>
                );

                return (
                    <div key={i}>
                        {i > 0 && (
                            <div
                                className="bg-black/10 dark:bg-white/10"
                                style={{ height: '1px' }}
                                aria-hidden="true"
                            />
                        )}
                        {item.href && !item.disabled ? <a href={item.href}>{row}</a> : row}
                    </div>
                );
            })}
        </div>,
        document.body
    );

    return (
        <div ref={wrapperRef} className="inline-flex animate-fade-in">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => {
                    if (allDisabled) return;
                    if (!open && buttonRef.current) {
                        const r = buttonRef.current.getBoundingClientRect();
                        setPanelPos({ top: r.bottom, left: r.left, width: r.width });
                    }
                    setOpen(v => !v);
                }}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                disabled={allDisabled}
                className={`
                    relative overflow-hidden inline-flex items-center
                    vetro-glass-button !bg-white dark:!bg-zinc-900
                    text-gray-800 dark:text-white
                    transition-all duration-200 ease-in-out
                    ${open ? 'rounded-t-3xl' : 'rounded-3xl'}
                    ${allDisabled ? 'opacity-40 cursor-not-allowed' : ''}
                `}
            >
                {/* Stained glass gradient */}
                <div className="pointer-events-none absolute inset-0" aria-hidden="true" />
                {/* Specular highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />
                {overlay}

                {/* Download icon cap */}
                <div
                    className="relative flex items-center justify-center self-stretch flex-shrink-0"
                    style={capStyle(open ? 0 : '50%')}
                    aria-hidden="true"
                >
                    <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v13M7 11l5 5 5-5" />
                        <path d="M5 21h14" />
                    </svg>
                </div>

                {/* "Download" label */}
                <p className="text-center text-blue-500 dark:text-blue-400 text-xl px-4 py-2 whitespace-nowrap">
                    Download
                </p>

                {/* Groove divider */}
                <div
                    className="self-stretch w-px flex-shrink-0 bg-gradient-to-b from-white dark:from-white/10 to-transparent"
                    aria-hidden="true"
                />

                {/* Chevron — rotates when open */}
                <div className="relative overflow-hidden self-stretch flex items-center px-4 text-blue-500 dark:text-blue-400">
                    {overlay}
                    <svg
                        className="relative w-3 h-3 transition-transform duration-200"
                        style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        viewBox="0 0 10 6" fill="none"
                        stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M1 1l4 4 4-4" />
                    </svg>
                </div>
            </button>

            {panel}
        </div>
    );
}

export default DownloadDropdownButton;
