import { html } from "lit";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { LitElementWithProps, pureLit, useOnce, useState } from "pure-lit";
import { lesson, lessons, prism } from "./blocks.styles";
import * as events from "./events"

pureLit("block-lessons", (el) => {
    const { getState: clicks, publish: setClicks } = useState(el, 0)
    useOnce(el, () => {
        el.addEventListener("click", () => {
            const next = Math.min(clicks(), Number.MAX_SAFE_INTEGER-1) + 1;
            setClicks(next);
            window.postMessage({ type: events.block.click, clicks: next, source: el.id }, window.origin)
        })
        window.addEventListener('message', (event) => {
            if (event.data?.type === events.config.setPreviewMode) {
                setClicks(Number.MAX_SAFE_INTEGER);
                window.postMessage({ type: events.block.click, clicks: Number.MAX_SAFE_INTEGER, source: el.id }, window.origin)
            }
        })
    })
    return html`<slot></slot>`
}, {
    styles: [lessons]
})

type BlockLesson = {
    appearOnClick: number
}

pureLit("block-lesson", (el: LitElementWithProps<BlockLesson>) => {
    const appearOnClick = el.attributes["appearOnClick" as any] 
        ? parseInt(el.attributes["appearOnClick" as any].value, 10) 
        : el.appearOnClick
    const { getState: clicks, publish: setClicks } = useState<number>(el, 0)
    useOnce(el, () => {
        window.addEventListener('message', (event) => {
            if (event.origin !== window.origin) return;
            if (event.data?.type === events.block.click && event.data?.source === el.parentElement?.id) {
                setClicks(event.data["clicks"]);
            }
        });
    })
    return html`<slot class="${appearOnClick <= clicks() ? " visible" : "hidden" }"></slot>`
}, {
    styles: [lesson],
    defaults: {
        appearOnClick: 0
    }
})

const subscribers: (() => void)[] = [];
let isLoaded = false;
const addScriptLoadSubscribers = (subscriber: () => void) => {
    if (isLoaded) { subscriber() }
    else { subscribers.push(subscriber) }
}

if (!document.head.querySelector("script#prism")) {
    const prismScript = document.createElement("script")
    prismScript.id = "prism";
    prismScript.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.0/prism.min.js";
    prismScript.type = "text/javascript";
    prismScript.onload = () => (isLoaded = true, subscribers.forEach(subscriber => subscriber()));
    prismScript.dataset.manual = "true";
    document.head.append(prismScript);

    const autoloader = document.createElement("script");
    autoloader.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.0/plugins/autoloader/prism-autoloader.min.js";
    document.head.append(autoloader);
}

pureLit("block-code", (el) => {
    useOnce(el, () => addScriptLoadSubscribers(() => el.requestUpdate()))
    const text = el.innerHTML.replace(/\&amp;/gi, "&").replace(/\&gt;/gi, ">").replace(/\&lt;/gi, "<") ?? "";
    try {
        return html`<pre class="language-${el.lang}">
    <code class="language-${el.lang}">${(Prism) ? unsafeHTML(Prism.highlight(text, Prism.languages[el.lang], el.lang)) : html`<slot></slot>`}</code>
</pre>`;
    } catch (e) {
        return html`<slot></slot>`
    }
}, {
    styles: [prism]
})

declare global {
    namespace Prism {
        function highlight(data: string, grammar: string, lang: string): string
        const languages: Record<string, string>
    }
}