import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "../../components/Item/Item";

export const PokemonList = () => {
  const [data, setData] = useState({ pokemons: [] });

  useEffect(async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=10");
    setData({ pokemons: res.data.results });
  }, []);
  return (
    <ul className="ul-pokemon">
      {data.pokemons.map((pokemon) => {
        return <Item name={pokemon.name} />;
      })}
    </ul>
  );
};
