export class DOMObserver {
  private observer: MutationObserver | null = null;
  private debounceTimer: number | null = null;

  start(callback: () => void): void {
    this.observer = new MutationObserver((mutations) => {
      if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) {
        return;
      }

      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = window.setTimeout(callback, 500);
    });

    const root = document.body || document.documentElement;
    this.observer.observe(root, {
      subtree: true,
      childList: true,
    });
  }

  stop(): void {
    this.observer?.disconnect();
    this.observer = null;
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
  }
}
