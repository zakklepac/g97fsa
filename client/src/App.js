import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Borrow from "./Borrow";
import Lend from "./Lend";
import "./index.css";

class App extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Catlist</h1>
          <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/borrow">Borrow a cat</NavLink></li>
            <li><NavLink to="/lend">Lend a cat</NavLink></li>
          </ul>
          </div>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/borrow" component={Borrow}/>
          <Route path="/lend" component={Lend}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
