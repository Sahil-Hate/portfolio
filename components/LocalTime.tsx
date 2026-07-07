"use client";

import { useSyncExternalStore } from "react";

let cached = "";

function readTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Los_Angeles",
  });
}

function subscribe(onChange: () => void) {
  cached = readTime();
  const id = setInterval(() => {
    cached = readTime();
    onChange();
  }, 30_000);
  return () => clearInterval(id);
}

function getSnapshot() {
  if (!cached) cached = readTime();
  return cached;
}

function getServerSnapshot() {
  return "--:--";
}

export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <span suppressHydrationWarning>
      bay area · <span className="text-accent">{time}</span> pt
    </span>
  );
}
