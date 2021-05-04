import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <TopNav />
        <Route exact path="/" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </div>
      </Router>
    );
  }
}

export default App;
