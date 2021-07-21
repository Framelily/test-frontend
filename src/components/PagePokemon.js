import React, { useState, useEffect } from 'react';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';

function PagePokemon() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=104'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let pokemonDatas = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(pokemonDatas);
  }

  const getPokemon = ({url}) => {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json())
      .then(data => {
          resolve(data)
      })
    });
  }
  
  const getAllPokemon = async (url) => {
    return new Promise((resolve, reject) => {
      fetch(url).then(res => res.json())
      .then(data => {
          resolve(data)
      })
    });
  }

  const numberPlaceholder = [];
  for (let index = 1; index <= 104; index++) {
    numberPlaceholder.push(index);
  }
  
  return (
    <div>
      {/* pokemon */}
      <div className="container mb-3 mt-5">
        <h5 className="text-center">Fetch Pokemon's data จาก <a href="https://pokeapi.co/api/v2">https://pokeapi.co/api/v2</a></h5>
        <div className="pokemon mt-3">
          <div className="col">
            <div className="form-row">
              {loading ? (
                <>
                  {numberPlaceholder.map((number, i) => {
                    return <CardPlaceholder/>
                  })}
                </>
              ) : (
                <>
                  {pokemonData.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon} />
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagePokemon;