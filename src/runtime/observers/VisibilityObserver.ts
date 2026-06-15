export class VisibilityObserver {
  private observers = new Map<Element, IntersectionObserver>();

  observe(element: Element, callback: () => void): void {
    if (this.observers.has(element)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
          this.observers.delete(element);
        }
      });
    });

    observer.observe(element);
    this.observers.set(element, observer);
  }

  disconnect(element: Element): void {
    const observer = this.observers.get(element);
    if (!observer) {
      return;
    }

    observer.disconnect();
    this.observers.delete(element);
  }

  clear(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
  }

  isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const isVerticallyInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const isHorizontallyInView = rect.left <= window.innerWidth && rect.left + rect.width >= 0;

    return isVerticallyInView && isHorizontallyInView;
  }
}
