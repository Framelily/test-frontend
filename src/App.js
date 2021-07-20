// import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const htmlList = '';
  for (let index = 1; index <= 104; index++) {
    fetch("https://pokeapi.co/api/v2/pokemon/"+index)
      .then(res => res.json())
      .then(
        (result) => {
          // htmlList = htmlList + `<div className="col-md-4 col-lg-2">
          //                               <img src=${result.sprites.front_default} />
          //                               <h6>${result.name}</h6>
          //                             </div>`;
                // console.log(htmlList);
        },
        (error) => {
        }
      )
  }
  // document.getElementById("listPokemon").innerHTML = htmlList;

  return (
    <div>
      {/* menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#">Test Frontend</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pokemon</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Function 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Function 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Function 3</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* form */}
      <div className="container-custom">
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
      </div>

      {/* pokemon */}
      <div className="container">
        <div className="pokemon">
          <div className="col">
            <div className="row" id="listPokemon">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
