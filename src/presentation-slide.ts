import { css, html } from "lit";
import { LitElementWithProps, pureLit } from "pure-lit";

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
  (element: LitElementWithProps<Props>) => html`<slot></slot> ${element.last
      ? ''
      : html`<div
          class="scroller next"
          role="next-slide"
          @click=${() => {
            element.nextElementSibling?.scrollIntoView();
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
            element.previousElementSibling?.scrollIntoView();
          }}
        >
          prev
        </div>`}`,
        {
          styles,
          defaults: {
            first: false,
            last: false
          }
        }
);