import { BrowserRouter, Route, Switch, NavLink,} from 'react-router-dom';
import PageFrom from './components/PageFrom';
import PagePokemon from './components/PagePokemon';
import PageFunction from './components/PageFunction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import cartoon from './cartoon.png';

function App() {
  // console.log(useLocation());
  return (
    <div>
      <header>
        Frontend Developer Exams
      </header>
      <BrowserRouter>
        <div className="menu">
          <NavLink exact to="/" activeClassName="active">Froms</NavLink>
          <NavLink exact to="/pokemon" activeClassName="active">Pokemon's</NavLink>
          <NavLink exact to="/function" activeClassName="active">Function</NavLink>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={PageFrom}></Route>
            <Route exact path="/pokemon" component={PagePokemon}></Route>
            <Route exact path="/function" component={PageFunction}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <img src={cartoon} className="cartoon"/>
    </div>
  );
}

export default App;
