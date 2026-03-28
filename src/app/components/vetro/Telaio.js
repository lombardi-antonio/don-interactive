import Image from "next/image";

function Telaio({ src, alt = "", width = 320, height = 650 }) {
    return (
        <div
            className="relative inline-block"
            style={{ width, height }}
        >
            {/* Outer shell */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.6)]" />

            {/* Side buttons — volume up/down */}
            <div className="absolute -left-[3px] top-[22%] w-[3px] h-8 rounded-l-sm bg-neutral-600" />
            <div className="absolute -left-[3px] top-[34%] w-[3px] h-8 rounded-l-sm bg-neutral-600" />
            {/* Power button */}
            <div className="absolute -right-[3px] top-[28%] w-[3px] h-12 rounded-r-sm bg-neutral-600" />

            {/* Bezel inset */}
            <div className="absolute inset-[6px] rounded-[2.6rem] bg-black overflow-hidden">
                {/* Screen content */}
                <div className="relative top-1 w-full h-full overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[30%] h-[28px] bg-black rounded-full z-10" />

                {/* Screen glare */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[2.6rem] z-20" />
            </div>

            {/* Inner border overlay — outside overflow-hidden so ring isn't clipped */}
            <div className="pointer-events-none absolute inset-[6px] rounded-[2.6rem] ring-[6px] ring-inset ring-black" />
        </div>
    );
}

export default Telaio;
