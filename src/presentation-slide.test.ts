import "./presentation-slide"
import { fixture, html } from "@open-wc/testing-helpers";
import { getByRole, queryByRole } from "testing-library__dom";
import { getElement } from "./testUtils";


describe("presentation-slide", () => {
    it("should show the next and prev button", async () => {
        const el = await fixture(html`
            <presentation-slide>
                <h1>1</h1>
            </presentation-slide>
        `);
        
        const element = getElement(el);
        expect(getByRole(element, "next-slide")).toBeDefined();
        expect(getByRole(element, "previous-slide")).toBeDefined();
    })
    it("hides the prev button for the first element", async () => {
        const el = await fixture(html`
            <presentation-slide first>
                <h1>1</h1>
            </presentation-slide>
        `);
        
        const element = getElement(el);
        expect(queryByRole(element, "next-slide")).toBeDefined();
        expect(queryByRole(element, "previous-slide")).toBeNull();
    })
    it("hides the next button for the last element", async () => {
        const el = await fixture(html`
            <presentation-slide last>
                <h1>1</h1>
            </presentation-slide>
        `);
        
        const element = getElement(el);
        expect(queryByRole(element, "next-slide")).toBeNull();
        expect(queryByRole(element, "previous-slide")).toBeDefined();
    })
})