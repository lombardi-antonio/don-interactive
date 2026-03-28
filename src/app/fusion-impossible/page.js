import localFont from "next/font/local";
import { generateMetadata as genMeta } from "../utils/metadata";
import VerniceShader from "../components/vetro/VerniceShader";

export const metadata = genMeta('fusion-impossible');

const monomaniac = localFont({
  src: "../fonts/MonomaniacOne-Regular.ttf",
  fontFamily: "Monomaniac",
});

export default function FusionImpossible() {
  return (
    <main>
      <VerniceShader className="fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1
          className={`${monomaniac.className} text-center text-6xl font-bold text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]`}
        >
          WORK IN PROGRESS
        </h1>
      </div>
    </main>
  );
}
