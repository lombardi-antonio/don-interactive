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
    const overlay = (
        <div
            className="pointer-events-none absolute inset-0"
            style={{
                background: `radial-gradient(circle 200px at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.18), transparent 70%)`,
                opacity: spot.visible ? 1 : 0,
                transition: 'opacity 400ms ease',
            }}
            aria-hidden="true"
        />
    );
    return { onMouseMove, onMouseLeave, overlay };
}

const edgeRefraction = {
    backdropFilter: 'blur(8px) brightness(1.1) saturate(2.5)',
    WebkitBackdropFilter: 'blur(8px) brightness(1.1) saturate(2.5)',
    maskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 78%, black 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 78%, black 100%)',
};

const engravedV = {
    background: 'rgba(0,0,0,0.18)',
    boxShadow: '1px 0 0 rgba(255,255,255,0.40)',
};

const engravedH = {
    background: 'rgba(0,0,0,0.12)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.30)',
};

/**
 * DropdownButton
 *
 * Props:
 *   icon        — React node rendered in the left icon slot (always visible)
 *   children    — label text / content for the right slot
 *   items       — array of { icon, name, href?, disabled? }
 */
function DropdownButton({ icon, children, items = [] }) {
    const [open, setOpen] = useState(false);
    const [panelPos, setPanelPos] = useState({ top: 0, left: 0, width: 0 });
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const panelRef = useRef(null);
    const { onMouseMove, onMouseLeave, overlay } = useSpotlight();

    const updatePos = () => {
        if (!buttonRef.current) return;
        const r = buttonRef.current.getBoundingClientRect();
        setPanelPos({ top: r.bottom, left: r.left, width: r.width });
    };

    useEffect(() => {
        if (!open) return;
        updatePos();
        const handleOutsideClick = (e) => {
            const inWrapper = wrapperRef.current?.contains(e.target);
            const inPanel = panelRef.current?.contains(e.target);
            if (!inWrapper && !inPanel) setOpen(false);
        };
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', updatePos, true);
        window.addEventListener('resize', updatePos);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', updatePos, true);
            window.removeEventListener('resize', updatePos);
        };
    }, [open]);

    const panel = open && createPortal(
        <div
            ref={panelRef}
            className="vetro-glass rounded-b-2xl overflow-hidden z-50 animate-dropdown-in"
            style={{
                position: 'fixed',
                top: panelPos.top,
                left: panelPos.left,
                width: panelPos.width,
                minWidth: 'max-content',
                transformOrigin: 'top center',
            }}
        >
            {/* Edge refraction */}
            <div className="pointer-events-none absolute inset-0" style={edgeRefraction} aria-hidden="true" />

            {/* Engraved horizontal separator — visually joins button to panel */}
            <div className="h-[1px]" style={engravedH} aria-hidden="true" />

            {items.map((item, i) => {
                const content = (
                    <div
                        className={`
                            relative flex items-center gap-3 px-3 py-2.5
                            transition-colors duration-150
                            ${item.disabled
                                ? 'opacity-40 cursor-not-allowed text-gray-800 dark:text-white'
                                : 'cursor-pointer text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 active:bg-white/30'
                            }
                        `}
                    >
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            {item.icon}
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap">
                            {item.name}
                        </span>
                    </div>
                );

                return (
                    <div key={i}>
                        {i > 0 && (
                            <div className="mx-3 h-[1px]" style={engravedH} aria-hidden="true" />
                        )}
                        {item.href && !item.disabled
                            ? <a href={item.href}>{content}</a>
                            : content
                        }
                    </div>
                );
            })}
        </div>,
        document.body
    );

    return (
        <div ref={wrapperRef} className="relative inline-block animate-fade-in">

            {/* Trigger button — always in flow, sizes the container */}
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen(v => !v)}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className={`
                    relative overflow-hidden flex items-center
                    transition-all ease-in-out duration-200
                    text-gray-800 dark:text-white
                    ${open ? 'vetro-glass rounded-t-2xl' : 'bg-transparent backdrop-blur-[16px] rounded-2xl'}
                `}
            >
                {/* Edge refraction */}
                <div className="pointer-events-none absolute inset-0" style={edgeRefraction} aria-hidden="true" />
                {/* Specular highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] rounded-t-2xl bg-gradient-to-b from-white/[0.18] to-transparent" aria-hidden="true" />
                {overlay}

                {/* Left icon slot */}
                <div className="p-3 flex items-center justify-center">
                    {icon}
                </div>

                {/* Engraved vertical divider */}
                <div className="self-stretch w-[1px] my-2" style={engravedV} aria-hidden="true" />

                {/* Label + chevron */}
                <div className="px-3 py-3 flex items-center gap-1.5">
                    {children}
                    <svg
                        className="w-3 h-3 ml-0.5 transition-transform duration-200"
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

export default DropdownButton;
