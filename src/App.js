import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact"; //add the curly brackets around home, about, contact b/c there is no default export stated

function App() {
  return (
    <div className="border1">
      <div className="App">
        <header className="App-header">
          <img
            src="https://i.imgur.com/6Nn4ucD.gif"
            className="App-logo"
            alt="logo"
          />
          <p>
            Learning 2 deploy on ghpages <code>using react</code> DOES IT SPIN
            REEEEEE.
          </p>
        </header>
      </div>

      <div className="blank">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={() => <div>404 Not found reeee</div>} />
        </Switch>
      </div>
    </div>
  );
}
export default App;

/* ORIGINAL
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> }
        {/* This is a comment, checking out jsx comments }
        <img
          src="https://i.imgur.com/6Nn4ucD.gif"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/yawyeeet.js</code> and save poop very epic.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
