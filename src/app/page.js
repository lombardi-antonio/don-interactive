"use client";

import Home from "./home/page";
import { Analytics } from '@vercel/analytics/react';

export default function Root() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}
