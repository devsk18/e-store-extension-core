export abstract class BaseAdapter {
  // to select element
  protected select(selector: string, target?: Element): Element | null {
    return (target ?? document).querySelector(selector);
  }

  // to select all elements
  protected selectAll(selector: string, target?: Element): Element[] {
    return Array.from((target ?? document).querySelectorAll(selector));
  }

  // to select element by xpath
  protected selectXPath(xpath: string, target?: Element): Element | null {
    const result = document.evaluate(
      xpath,
      target ?? document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    return result.singleNodeValue as Element | null;
  }
}
