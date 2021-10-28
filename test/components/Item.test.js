import React from "react";
import ReactDOM from "react-dom";
import { Item } from "../../src/components/Item/Item";

describe("Item", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);
  const element = (elementClass) => container.querySelector(`.${elementClass}`);

  it("display li tag", () => {
    render(<Item />);
    expect(element("pokemon-name")).not.toBeNull();
  });

  it("display pokemon name", () => {
    render(<Item name="Bulbasour" />);
    expect(element("pokemon-name").textContent).toMatch("Bulbasour");
  });
});
