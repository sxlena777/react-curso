import React from "react";
import ReactDOM from "react-dom/client";
import { CompEjemplo, ComponenteCard } from "./comp";
import { Boton } from "./Boton";

//import { Boton } from "./Boton";

const rootElement = document.getElementById("root"); //elemento root seleccionado
const root = ReactDOM.createRoot(rootElement);

const change = (info) => {
  // Muestra por pantalla cuando se ejecute un evento de cambio en el button, muestra el valor de ese button en tiempo real por consola
  console.clear();
  console.log(info.target.value);
};

root.render(
  <>
    <CompEjemplo title="Hola 1" />

    <ComponenteCard
      nombre="lautaro"
      nick="zoso"
      edad={30}
      casado={true}
      direccion={{
        calle: "street example",
        altura: 123,
        edificio: false, // false -> casa | true -> Departamento
      }}
    />

    <ComponenteCard
      nombre="name"
      nick="asdfqwer"
      edad={44}
      casado={false}
      direccion={{
        calle: "calle de ejemplo",
        altura: 189,
        edificio: true, // false -> casa | true -> Departamento
      }}
    />


    <Boton />

    <input onChange={change}></input>

  </> // cierre de fake tag
);
