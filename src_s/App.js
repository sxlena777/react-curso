import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar1,
  ListaFechas,
  ListaFechasVentas,
  ListaDeudores,
  Usuarios,
  Productos,
} from "./componentes";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar1 />
      </div>
      <div>
        <Productos />
      </div>
    </>
  );
};

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
} */

export default App;
