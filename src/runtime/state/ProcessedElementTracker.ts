const PROCESSED_ATTR = 'data-estore-extension-processed';

export class ProcessedElementTracker {
  isProcessed(element: Element): boolean {
    return element.hasAttribute(PROCESSED_ATTR);
  }

  mark(element: Element): void {
    element.setAttribute(PROCESSED_ATTR, 'true');
  }

  unmark(element: Element): void {
    element.removeAttribute(PROCESSED_ATTR);
  }

  clear(): void {
    document
      .querySelectorAll(`[${PROCESSED_ATTR}]`)
      .forEach((el) => el.removeAttribute(PROCESSED_ATTR));
  }
}
