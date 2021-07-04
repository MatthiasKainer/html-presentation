import "./presentation-body"
import { getByRole } from "testing-library__dom";
import { fixture, html } from "@open-wc/testing-helpers";
import { getElement } from "./testUtils";

describe("presentation-body", () => {
    let element: HTMLElement;
    beforeEach(async () => {
        element = getElement(await fixture(html`<presentation-body>
    <presentation-slide role="slide-1">
    </presentation-slide>
    <presentation-slide role="slide-2">
    </presentation-slide>
</presentation-body>`));
    })

    it("adds all passed slides", async () => {
        expect(getByRole(element, "slide-1")).toBeDefined();
        expect(getByRole(element, "slide-2")).toBeDefined();
    })
})