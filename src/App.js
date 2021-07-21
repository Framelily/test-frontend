import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Card from './components/Card';
import CardPlaceholder from './components/CardPlaceholder';
import { getPokemon, getAllPokemon } from './services/pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  const numberPlaceholder = [];
  for (let index = 1; index <= 104; index++) {
    numberPlaceholder.push(index);
  }

  return (
    <div>
      <Header/>
      <Menu/>
      

      {/* form */}
      {/* <div className="container-custom">
        <form className="form-custom">
          <h5 className="text-center mb-4">Test Form and validation</h5>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="please fill first name" required autoFocus/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="please fill last name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="please fill email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="please fill password" required/>
          </div>
          <div className="form-group">
            <label htmlFor="verifyPassword">Verify Password</label>
            <input type="password" className="form-control" id="verifyPassword" name="verifyPassword" placeholder="please fill verify password" required/>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" name="gender" required>
              <option value="">Please select a gander</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div> */}

      {/* pokemon */}
      <div className="container mb-3 mt-5">
        <h5 class="text-center">Fetch Pokemon's data จาก <a href="https://pokeapi.co/api/v2">https://pokeapi.co/api/v2</a></h5>
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

export default App;
