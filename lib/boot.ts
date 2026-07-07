// Shared, cached answer to "is the boot preloader going to run this session?"
// Read through useSyncExternalStore so server render and hydration stay consistent.

let cached: boolean | null = null;

export function subscribe() {
  return () => {};
}

export function getBootSnapshot(): boolean {
  if (cached === null) {
    try {
      cached = !sessionStorage.getItem("booted");
    } catch {
      cached = false;
    }
  }
  return cached;
}

export function getBootServerSnapshot(): boolean {
  return false;
}

export function markBooted() {
  try {
    sessionStorage.setItem("booted", "1");
  } catch {
    // ignore, preloader will simply run again next load
  }
}

export const BOOT_DURATION = 1.5; // seconds the hero waits before its entrance
