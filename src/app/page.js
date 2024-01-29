"use client";

import Home from "./home/page";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Root() {
  return (
  <main>
    <Home />
    <Analytics />
    <SpeedInsights />
  </main>);
}
