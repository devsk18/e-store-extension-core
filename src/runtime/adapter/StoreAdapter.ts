import { BaseAdapter } from './BaseAdapter';

export interface StoreStructure {
    productView: {
        productElementSelector: string;
        uiInjectionElementSelector: string;
        getBarcode: (element: Element) => string | null;
    };
    listView: {
        productElementSelector: string;
        uiInjectionElementSelector: string;
        getBarcode: (element: Element) => string | null;
    };
};

export abstract class StoreAdapter extends BaseAdapter {

    abstract readonly structure: StoreStructure;

    // Existence check methods
    abstract doesProductViewExist(): boolean;
    abstract doesProductListExist(): boolean;

    // Element retrieval methods
    abstract getProductViewElement(): Element | null;
    abstract getProductListElements(): Element[];

    // Product data extraction methods
    abstract getDataFromProductViewElement(element: Element): any;
    abstract getDataFromProductListElement(element: Element): any;

    // Banner injection methods
    abstract injectViewItemBanner(target: Element): Element;
    abstract injectListItemBanner(target: Element): Element;
}