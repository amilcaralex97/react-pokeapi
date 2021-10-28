import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { PokemonList } from "./container/PokemonList/PokemonList";

const App = () => {
  return (
    <>
      <Navbar />
      <PokemonList />
    </>
  );
};

export default App;
