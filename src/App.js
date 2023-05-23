import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {
  Clientes,
  Empleado,
  Recuadro,
  Search,
  Modale,
  Login,
  Login1,
  //Navbar,
  Navbar1,  
  ListaClientes,
  ListaProveedores,      // No pertenece a nuestro componente
  //Navbar2
} from "./components";

import ListaVentas from "./components/lista/ventas/ListaVentas";
import ListaDeudores from "./components/lista/DEUDORES/ListaDeudores";
import ListaCompras from "./components/lista/COMPRAS/ListaCompras";
import Usuarios from "./components/usuarios/Usuarios";
import ListaUsuarios from "./components/lista/usuarios/ListaUsuarios";

const App = () => {
  return (
    <div>
      <div className="gradient__bg padre">
        <Navbar1 />
        <div className="hijo">
          <Usuarios />
        </div>
      </div>
    </div>
  );
};

export default App;
