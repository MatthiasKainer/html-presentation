
export function getElement(el: Element): HTMLElement {
    return (el.ownerDocument.getRootNode()) as any as HTMLElement
}