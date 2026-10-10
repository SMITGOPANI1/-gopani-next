"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/config/site";
import { ArrowRight, X } from "./icons";

const KEY = "karmahubai-announce-closed";

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(true); // hidden until we know the visitor hasn't closed it

  useEffect(() => {
    try {
      setHidden(!!sessionStorage.getItem(KEY)); // eslint-disable-line react-hooks/set-state-in-effect -- sessionStorage is client only
    } catch {
      setHidden(false);
    }
  }, []);

  if (!CONFIG.announcement.text || hidden) return null;

  return (
    <div className="announce" role="region" aria-label="Announcement">
      <span>{CONFIG.announcement.text}</span>
      <a href={CONFIG.announcement.href}>
        {CONFIG.announcement.linkText} <ArrowRight size={14} />
      </a>
      <button
        className="close"
        aria-label="Close announcement"
        onClick={() => {
          setHidden(true);
          try { sessionStorage.setItem(KEY, "1"); } catch {}
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
