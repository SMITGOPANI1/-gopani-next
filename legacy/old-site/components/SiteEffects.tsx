"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/site-effects";

/** Runs all homepage interactions (menus, sliders, counters, forms…). */
export default function SiteEffects() {
  useEffect(() => initSite(), []);
  return null;
}
