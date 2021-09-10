import { css, html } from "lit";
import { LitElementWithProps, pureLit, useOnce } from "pure-lit";
import * as events from "./events"

const styles = css`
  :host {
    position: relative;
    display: inline-block;
    border: solid 1px gray;
    width: 100%;
    height: 100%;
    background-color: var(--colorMain);
  }
  :host slot {
      display:block;
    width: 100%;
    height: 100%;
    overflow-x: auto;
  }
  * {
    text-align: center;
    font-family: 'Martel Sans', sans-serif;
  }
  .scroller {
    display: block;
    position: absolute;
    bottom: 0px;
    left: 20px;
    cursor: pointer;
  }
  .scroller.next {
    right: 20px;
    left: auto;
  }
`;

type Props = {first: boolean; last: boolean};

pureLit(
  'presentation-slide',
  (element: LitElementWithProps<Props>) => {
    const myIndex = [...(element.parentElement?.querySelectorAll("presentation-slide") ?? document.querySelectorAll("presentation-slide"))].findIndex(val => {
      return val === element
    })
    useOnce(element, () => {
      window.addEventListener("message", (evt) => {
        if (evt.data?.type === events.slide.switchTo && evt.data?.payload === myIndex) {
          element.scrollIntoView();
        }
        if (evt.data?.type === events.config.setPreviewMode) {
          console.log("Slide in preview mode")
          element.style.height = "50%";
          element.style.width = "50%";
          (element.style as any).zoom = "0.5";
        } 
      })
      if (window.location.hash === `#${myIndex}`) {
        element.scrollIntoView();
      }
    })
    return html`<slot></slot> ${element.last
      ? ''
      : html`<div
          class="scroller next"
          role="next-slide"
          @click=${() => {
            window.postMessage({ type: events.slide.switchTo, payload: myIndex + 1 }, location.href);
            window.location.hash = `#${myIndex + 1}`
          }}
        >
          next
        </div>`}
    ${element.first
      ? ''
      : html`<div
          class="scroller"
          role="previous-slide"
          @click=${() => {
            window.postMessage({ type: events.slide.switchTo, payload: myIndex - 1 }, location.href);
            window.location.hash = `#${myIndex - 1}`
          }}
        >
          prev
        </div>`}`
  },
  {
    styles,
    defaults: {
      first: false,
      last: false
    }
  }
);