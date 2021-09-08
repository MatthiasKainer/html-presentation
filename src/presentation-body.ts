import { pureLit, useOnce } from "pure-lit"
import { css, html } from "lit"
import * as events from "./events"

function init() {
  const style = document.createElement("style")

  style.appendChild(document.createTextNode(`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;

    --colorContrast: #331832ff;
    --colorHighlight: #d81e5bff;
    --colorFocus: #f0544fff;
    --colorShow: #c6d8d3ff;
    --colorMain: #fdf0d5ff;
  }
`));
  document.head.insertBefore(style, document.head.firstChild!)
}

function openFullscreen(el: HTMLElement) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  }
}

let windowObjectReference : Window | null;
let windowFeatures = "resizable,scrollbars";

window.addEventListener("message", (evt) => {
  windowObjectReference?.postMessage(evt.data, location.href)
})

export default pureLit("presentation-body", (el) => {
  useOnce(el, init)
  useOnce(el, () => {
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'o') {
        console.log("opening fullscreen")
        openFullscreen(el)
      }
      if (event.ctrlKey && event.key === 'c') {
        console.log("opening second window")
        if (windowObjectReference) {
          windowObjectReference.close();
        }
        windowObjectReference = window.open(window.location.href, "popup", windowFeatures);
        windowObjectReference?.addEventListener("load", () => {
          windowObjectReference?.postMessage({ type: events.config.setPreviewMode }, location.href);
        });
      }
    });
  })
  return html`<slot></slot>`
},
  {
    styles: css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      scroll-behavior: smooth;

      overflow: scroll-y;
      text-align: center;
    }
    h1 {
      color: var(--colorFocus);
      font-size: 15rem;
      line-height: 10rem;
      position: absolute;
      bottom: 0;
    }
    h2 {
      color: var(--colorContrast);
      font-size: 5rem;
      line-height: 5rem;
      margin-top: 4rem;
    }
    video {
      width: 100%;
      height: 70%;
    }
  `
  })