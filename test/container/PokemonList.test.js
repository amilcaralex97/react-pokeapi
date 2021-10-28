import React from "react";
import ReactDOM from "react-dom";
import { PokemonList } from "../../src/container/PokemonList/PokemonList";

describe("PokeList", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDOM.render(component, container);
  const element = (elementClass) => container.querySelector(`.${elementClass}`);

  it("Renders a list of 10 pokemons", () => {
    render(<PokemonList />);
    expect(element("ul-pokemon").childNodes.length).toBe(10);
  });
});
