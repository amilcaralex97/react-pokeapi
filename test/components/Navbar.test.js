import React from "react";
import ReactDom, { render } from "react-dom";
import { Navbar } from "../../src/components/Navbar/Navbar";

describe("Navbar", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDom.render(component, container);
  const element = (elementClass) => container.querySelector(`.${elementClass}`);

  it("renders a nav", () => {
    render(<Navbar />);
    expect(element("navbar")).not.toBeNull();
  });

  it("displays an li with the value of Poke App", () => {
    render(<Navbar />);
    expect(element("navbar__ol__li--pokeapp").textContent).toMatch("Poke App");
  });
});
